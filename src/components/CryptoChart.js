// src/components/CryptoChart.jsx
import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import {
  LineChart, Line, Area, XAxis, YAxis,
  Tooltip, Legend, CartesianGrid, ResponsiveContainer, Brush,
} from 'recharts';
import Papa from 'papaparse';

import bitcoinCsv  from '../data/bitcoin.csv';
import ethereumCsv from '../data/ethereum.csv';
import solanaCsv   from '../data/solana.csv';
import leobtcCsv   from '../data/leobtc.csv';
import leoethCsv   from '../data/leoeth.csv';
import leosolCsv   from '../data/leosol.csv';

/* -----------------------------------------------------------
   CSV helpers
----------------------------------------------------------- */
const csvMap = {
  bitcoin: bitcoinCsv,
  ethereum: ethereumCsv,
  solana:  solanaCsv,
  leobtc:  leobtcCsv,
  leoeth:  leoethCsv,
  leosol:  leosolCsv,
};

const parseAssetCsv = (text) => {
  const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
  let cumul = 1;
  return data.map((row) => {
    // Handle both "Price" and "Open" column names
    const priceValue = row.Price || row.Open;
    // Handle strings with currency symbols or numbers directly
    const price = typeof priceValue === 'string' 
                ? Number(priceValue.replace(/[$,]/g, '')) 
                : Number(priceValue);
                
    // Handle Return as string with % or as number directly
    const returnValue = row.Return;
    const retPct = typeof returnValue === 'string' && returnValue.includes('%')
                ? Number(returnValue.replace('%', ''))
                : Number(returnValue);
                
    cumul *= 1 + retPct / 100;
    return {
      date:              row.Date,
      price,
      return:            retPct,
      cumulativeReturn: (cumul - 1) * 100,
    };
  });
};

const parseLeoCsv = (text) => {
  const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
  return data.map((row) => {
    const cumField = Object.keys(row)[1];
    return {
      date:                row.Date,
      leoCumulativeReturn: Number(row[cumField]),
    };
  });
};

/* -----------------------------------------------------------
   Format helpers
----------------------------------------------------------- */
const fUSD = (v) => `$${v.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;


/* -----------------------------------------------------------
   Tooltip
----------------------------------------------------------- */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const map = Object.fromEntries(payload.map((p) => [p.dataKey, p]));
  
  return (
    <div className="rounded-xl bg-white/90 backdrop-blur p-3 shadow-lg text-xs sm:text-sm">
      <p className="font-semibold mb-2">{label}</p>
      {map.buyHoldValue && (
        <p className="text-red-600 font-medium">
          Buy & Hold: {fUSD(map.buyHoldValue.value)}
        </p>
      )}
      {map.strategyValue && (
        <p className="text-blue-600 font-medium">
          ARC Strategies: {fUSD(map.strategyValue.value)}
        </p>
      )}
      {map.buyHoldValue && map.strategyValue && (
        <p className="text-blue-600 mt-2 font-medium">
          Difference: {fUSD(map.strategyValue.value - map.buyHoldValue.value)}
          {' '}
          ({((map.strategyValue.value / map.buyHoldValue.value - 1) * 100).toFixed(1)}%)
        </p>
      )}
    </div>
  );
};

/* -----------------------------------------------------------
   Constants
----------------------------------------------------------- */
const leoSymMap  = { bitcoin: 'leobtc', ethereum: 'leoeth', solana: 'leosol' };
const assetNames = { bitcoin: 'Bitcoin', ethereum: 'Ethereum', solana: 'Solana' };

/* -----------------------------------------------------------
   Main component
----------------------------------------------------------- */
export default function CryptoChart() {
  /* ---------- state ---------- */
  const [asset,   setAsset]   = useState('bitcoin');
  const [capital, setCapital] = useState(1000);
  const [cache,   setCache]   = useState({});
  const [loading, setLoading] = useState(false);
  const [frame,   setFrame]   = useState(0);
  const [playing, setPlaying] = useState(false);

  /* ---------- CSV loading ---------- */
  const loadCsv = useCallback(async (sym) => {
    if (cache[sym] || !csvMap[sym]) return;
    setLoading(true);
    try {
      const text   = await (await fetch(csvMap[sym])).text();
      const parsed = sym.startsWith('leo') ? parseLeoCsv(text) : parseAssetCsv(text);
      setCache((p) => ({ ...p, [sym]: parsed }));
    } catch (err) { console.error('CSV load error:', err); }
    setLoading(false);
  }, [cache]);

  useEffect(() => {
    loadCsv(asset);
    loadCsv(leoSymMap[asset]);
    setFrame(0);
    setPlaying(false);
  }, [asset, loadCsv]);

  /* ---------- merged data ---------- */
  const fullData = useMemo(() => {
    const rows    = cache[asset] ?? [];
    const leoRows = cache[leoSymMap[asset]] ?? [];
    const leoMap  = Object.fromEntries(leoRows.map((r) => [r.date, r.leoCumulativeReturn]));
    const cap     = Number.isFinite(capital) && capital >= 0 ? capital : 0;
    
    return rows.map((d) => {
      const leoReturn = leoMap[d.date];
      const strategyValue = typeof leoReturn === 'number' ? cap * (1 + leoReturn / 100) : 0;
      const buyHoldValue = cap * (1 + d.cumulativeReturn / 100);
      
      return {
        date: d.date,
        strategyValue,
        buyHoldValue,
      };
    });
  }, [cache, asset, capital]);

  const displayData = useMemo(
    () => fullData.slice(0, Math.min(frame, fullData.length)),
    [fullData, frame],
  );

  /* ---------- play / pause timer ---------- */
  useEffect(() => {
    if (!playing) return undefined;
    if (displayData.length >= fullData.length) { setPlaying(false); return undefined; }
    const id = setInterval(() => setFrame((f) => Math.min(f + 1, fullData.length)), 100);
    return () => clearInterval(id);
  }, [playing, displayData.length, fullData.length]);

  /* ---------- axis domains ---------- */
  const [usdMin, usdMax] = useMemo(() => {
    if (!displayData.length) return [0, 0];
    const nums = displayData.flatMap((d) => [d.buyHoldValue, d.strategyValue].filter(Boolean));
    return [Math.min(...nums), Math.max(...nums)];
  }, [displayData]);

  /* ---------- metrics ---------- */
  const currentValues = useMemo(() => {
    if (!displayData.length) return { strategy: 0, buyHold: 0, diff: 0, diffPct: 0 };
    const last = displayData[displayData.length - 1];
    const strategy = last.strategyValue || 0;
    const buyHold = last.buyHoldValue || 0;
    const diff = strategy - buyHold;
    const diffPct = buyHold > 0 ? (strategy / buyHold - 1) * 100 : 0;
    return { strategy, buyHold, diff, diffPct };
  }, [displayData]);

  /* ---------- UI ---------- */
  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-6">
      {/* controls bar */}
      <div
        className="flex flex-col sm:flex-row items-center gap-3 mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl
                   bg-white/70 backdrop-blur shadow-md border border-indigo-100"
      >
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <select
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            className="rounded-lg border px-3 py-2 text-base sm:text-lg shadow-sm focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 bg-white flex-grow sm:flex-grow-0"
            aria-label="Select cryptocurrency"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
          </select>

          <input
            type="number"
            min="0"
            step="100"
            value={capital}
            onChange={(e) => setCapital(+e.target.value)}
            className="rounded-lg border px-3 py-2 text-base sm:text-lg shadow-sm w-full sm:w-auto
                      focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-white"
            placeholder="Starting $"
            aria-label="Starting investment (USD)"
          />

          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors
                      px-4 py-2 font-medium text-white shadow-sm w-full sm:w-auto"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>

        {loading && (
          <span className="animate-pulse text-gray-500 text-sm">Loading…</span>
        )}
      </div>

      {/* stats summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-5">
        <div className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-md border border-red-100">
          <p className="text-gray-500 text-sm">Buy & Hold {assetNames[asset]}</p>
          <p className="text-red-600 text-xl sm:text-2xl font-semibold">{fUSD(currentValues.buyHold)}</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-md border border-blue-100">
          <p className="text-gray-500 text-sm">ARC Strategies</p>
          <p className="text-blue-600 text-xl sm:text-2xl font-semibold">{fUSD(currentValues.strategy)}</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-md border border-blue-100 sm:col-span-2">
          <p className="text-gray-500 text-sm">Difference</p>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <p className={`text-xl sm:text-2xl font-semibold ${currentValues.diff >= 0 ? 'text-green-600' : 'text-green-600'}`}>
              {currentValues.diff >= 0 ? '+' : ''}{fUSD(currentValues.diff)}
            </p>
            <p className={`text-lg ${currentValues.diffPct >= 0 ? 'text-green-600' : 'text-rose-600'}`}>
              ({currentValues.diffPct >= 0 ? '+' : ''}{currentValues.diffPct.toFixed(1)}%)
            </p>
          </div>
        </div>
      </div>

      {/* chart panel */}
      <div className="h-[300px] sm:h-[400px] md:h-[540px] rounded-xl sm:rounded-3xl border border-indigo-100
                      bg-gradient-to-br from-white via-sky-50 to-indigo-50 shadow-xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={displayData} margin={{ 
            top: 20, 
            right: 30, 
            bottom: 35, 
            left: 10, 
            ...window.innerWidth > 640 && { right: 60, left: 60 } 
          }}>
            {/* ─── defs (gradient + glow) ───────────────────── */}
            <defs>
              <linearGradient id="gradStrategy" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"  stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="90%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="gradBuyHold" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"  stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="90%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
              <filter id="glow" width="300%" height="300%" x="-100%" y="-100%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="blueGlow" width="300%" height="300%" x="-100%" y="-100%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feColorMatrix
                  type="matrix"
                  values="0.2 0 0 0 0
                          0.4 0.4 0.8 0 0.6
                          0.8 0.8 1 0 1
                          0 0 0 1 0"
                  in="coloredBlur"
                />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CartesianGrid stroke="#e0e7ff" strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
              interval="preserveStartEnd"
              minTickGap={30}
            />

            {/* Y axis → USD */}
            <YAxis
              domain={[usdMin, usdMax]}
              tickFormatter={fUSD}
              tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
              width={window.innerWidth < 640 ? 50 : 60}
              label={window.innerWidth >= 640 ? { value: 'USD', angle: -90, position: 'insideLeft' } : null}
            />

            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              wrapperStyle={{ 
                fontSize: window.innerWidth < 640 ? '11px' : '13px',
                paddingBottom: '10px'
              }} 
            />

            {/* USD series */}
            <Area
              type="monotone"
              dataKey="buyHoldValue"
              name="Buy & Hold"
              stroke="#ef4444"
              fill="url(#gradBuyHold)"
              strokeWidth={window.innerWidth < 640 ? 1.5 : 2.5}
              fillOpacity={0.4}
            />
            <Line
              type="monotone"
              dataKey="buyHoldValue"
              name="Buy & Hold"
              stroke="#ef4444"
              strokeWidth={window.innerWidth < 640 ? 2 : 3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2 }}
              filter="url(#glow)"
            />
            
            <Area
              type="monotone"
              dataKey="strategyValue"
              name="ARC Strategies"
              stroke="#3b82f6"
              fill="url(#gradStrategy)"
              strokeWidth={window.innerWidth < 640 ? 1.5 : 2.5}
              fillOpacity={0.4}
            />
            <Line
              type="monotone"
              dataKey="strategyValue"
              name="ARC Strategies"
              stroke="#3b82f6"
              strokeWidth={window.innerWidth < 640 ? 2 : 3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2 }}
              filter="url(#blueGlow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
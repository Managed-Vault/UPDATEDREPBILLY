import React from 'react';
import { Link } from 'react-router-dom';
import CryptoChart from './CryptoChart';

const SectionFour = () => { 
  return (
    /* SECTION 4: STRATEGY SECTION - SIGNALS FIRST */
    <section className="bg-gradient-to-b from-neutral-50 to-white py-24 px-4 text-neutral-800 relative overflow-hidden" id="clear-easy-signals">
      {/* faint grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="signal-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#signal-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ─── headline ─────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-headline font-bold py-1 px-4 rounded-full mb-4">
            STRATEGY INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-brand-600">
            Clear and Easy&nbsp;Signals
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed font-content text-neutral-700">
            We show you what we're doing, as we do it. No guessing—just follow along.
            Our signals are simple to use and work&nbsp;better than&nbsp;holding.
          </p>
        </div>

        {/* Performance stats bar */}
        <div className="leo-stats-bar flex flex-wrap justify-around mb-10 max-w-5xl mx-auto">
          <div className="leo-stat text-center p-4">
            <div className="stat-value text-3xl md:text-4xl font-bold text-brand-600">2,899.7%</div>
            <div className="stat-label text-sm md:text-base text-neutral-600">Leo BTC Returns<br/>(2020-Present)</div>
          </div>
          <div className="leo-stat text-center p-4">
            <div className="stat-value text-3xl md:text-4xl font-bold text-brand-600">9,683.4%</div>
            <div className="stat-label text-sm md:text-base text-neutral-600">Leo ETH Returns<br/>(2020-Present)</div>
          </div>
          <div className="leo-stat text-center p-4">
            <div className="stat-value text-3xl md:text-4xl font-bold text-brand-600">55,962.1%</div>
            <div className="stat-label text-sm md:text-base text-neutral-600">Leo SOL Returns<br/>(2021-Present)</div>
          </div>
        </div>

        {/* CTA callout */}
        <div className="cta-callout text-center mb-10 max-w-3xl mx-auto p-6 bg-brand-50 rounded-xl border border-brand-100">
          <h3 className="text-xl md:text-2xl font-headline font-semibold mb-4 text-brand-700">See The Difference Yourself</h3>
          <p className="text-lg leading-relaxed font-content text-neutral-700">
            Experience how our intelligent algorithms capture major upswings while protecting against devastating downturns. 
            Interact with the chart below to discover a smarter way to invest in crypto. <span className="italic">*Signals available to all memberships</span>
          </p>
        </div>

        {/* ─── full-width chart card ────────────────── */}
        <div className="relative group mx-auto w-full chart-container">
          <div className="absolute -inset-2 rounded-2xl blur-md opacity-75
                          bg-gradient-to-r from-brand-600/30 to-brand-400/30
                          group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-white p-6 rounded-2xl shadow-xl">
            <CryptoChart />
          </div>
        </div>

        {/* verified badge */}
        <div className="mt-6 text-center">
          <span className="inline-block bg-white text-brand-700 font-headline font-bold text-sm py-1 px-4 rounded-full shadow-lg border border-brand-100">
            Verified Performance Data
          </span>
        </div>

        {/* ─── benefits list + CTA ──────────────────── */}
        <div className="mt-20">
          {/* Benefits list with matching chart styling */}
          <div className="relative group mx-auto w-full mb-10">
            <div className="absolute -inset-2 rounded-2xl blur-md opacity-75
                          bg-gradient-to-r from-brand-600/30 to-brand-400/30
                          group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <ul className="space-y-6">
                {/* item 1 */}
                <li className="flex items-start bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-brand-500">
                  <div className="bg-brand-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-xl text-brand-600 font-subheadline font-semibold">Actionable&nbsp;Signals:</strong>
                    <p className="text-neutral-700 text-lg mt-1 font-content">
                      Get clear buy&nbsp;and&nbsp;sell notifications that tell you exactly when to make a&nbsp;move.
                    </p>
                  </div>
                </li>
                {/* item 2 */}
                <li className="flex items-start bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-brand-500">
                  <div className="bg-brand-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-xl text-brand-600 font-subheadline font-semibold">Outperform&nbsp;HODLing:</strong>
                    <p className="text-neutral-700 text-lg mt-1 font-content">
                      Our strategies consistently beat simple buy-and-hold approaches—even during market downturns.
                    </p>
                  </div>
                </li>
                {/* item 3 */}
                <li className="flex items-start bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-brand-500">
                  <div className="bg-brand-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-xl text-brand-600 font-subheadline font-semibold">Quick&nbsp;&amp;&nbsp;Simple:</strong>
                    <p className="text-neutral-700 text-lg mt-1 font-content">
                      Follow along with just minutes per week—perfect for busy professionals who want results without constant monitoring.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-300" />
              <Link
                to="/apply"
                className="relative inline-block bg-brand-600 text-white font-subheadline font-bold py-4 px-10 rounded-full shadow-lg
                           hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start&nbsp;Your&nbsp;Wealth&nbsp;Plan&nbsp;Today&nbsp;- Apply&nbsp;Here
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <p className="mt-4 text-neutral-500 text-sm font-content">
                Join thousands of investors already using our signals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
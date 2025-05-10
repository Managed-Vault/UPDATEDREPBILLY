import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => (
  <>
    {/* SECTION 2 - THE PROBLEM */}
    <section className="bg-gradient-to-b from-white to-neutral-100 py-24 px-4 relative overflow-hidden">
      {/* floating gradient blobs */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-red-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-red-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-8 md:gap-16 relative z-10">
        {/* ───────── centered thought bubble ───────── */}
        
        {/* ───────── headline + copy ───────── */}
        <div className="w-full text-center">
          <div className="inline-block bg-red-100 text-red-600 text-sm font-subheadline font-bold py-1 px-4 rounded-full mb-4">
            FINANCIAL WARNING
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-6 text-neutral-800">
            The Truth About Why You're{' '}
            <span className="text-red-600 relative">
              Falling Behind
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-red-200" />
            </span>{' '}
            Financially
          </h2>

          <p className="text-lg md:text-xl font-content text-neutral-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Over the past 5&nbsp;years, inflation has silently stolen more than{' '}
            <span className="font-bold text-red-600">22%</span> of your purchasing power.
            That means if you've kept your money in cash or low-yield accounts,
            you've actually <span className="font-bold">lost value</span> — just by doing nothing.
          </p>

          <Link
            to="/apply"
            className="inline-block bg-brand-600 text-white font-subheadline font-bold py-4 px-10 rounded-full shadow-md hover:bg-brand-700 hover:shadow-lg transition-all duration-300 text-lg mb-12"
          >
            Start Your Wealth Plan Today&nbsp;- Apply&nbsp;Here
          </Link>
        </div>

        {/* ───────── inflation image ───────── */}
        <div className="w-full max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-300 to-red-500 rounded-xl blur-sm opacity-50" />

            <div className="relative overflow-hidden rounded-xl shadow-xl border border-neutral-200">
              <img
                src={`${process.env.PUBLIC_URL}/images/inflation.jpg`}
                alt="Dollar Eroding"
                className="w-full transform transition-transform duration-500 ease-in-out hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-headline font-bold text-2xl md:text-3xl">
                    The Dollar Has Lost 97% of Its Value
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-red-600 text-white text-sm font-content font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
                Losing ground daily
              </div>
            </div>
          </div>
        </div>

        {/* ───────── key stat ───────── */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 mt-8 border border-neutral-200">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-tagline font-bold">
              <span className="text-red-600">$1,000</span> in 2020&nbsp;=&nbsp;
              <span className="text-red-600">$780</span> Today
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* COMBINED PROBLEM SECTIONS WITH IMAGES - VERTICAL LAYOUT */}
    <section className="bg-gradient-to-b from-white to-neutral-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
          {/* News Article 1 */}
          <div className="flex flex-col max-w-4xl mx-auto w-full">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={`${process.env.PUBLIC_URL}/images/wallstreet.jpg`}
                  alt="Americans Are Falling Behind on Their Bills"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <a
              href="https://www.wsj.com/finance/americans-credit-debt-spending-interest-rates-f3836f23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-content text-gray-600 hover:text-blue-600 transition-colors duration-200 mt-2"
            >
              Source: Wall Street Journal
            </a>
          </div>

          {/* News Article 2 */}
          <div className="flex flex-col max-w-4xl mx-auto w-full">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={`${process.env.PUBLIC_URL}/images/emergency.jpg`}
                  alt="Survey: 42% of Americans Don't Have an Emergency Fund"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <a
              href="https://www.usnews.com/banking/articles/2025-financial-wellness-survey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-content text-gray-600 hover:text-blue-600 transition-colors duration-200 mt-2"
            >
              Source: US News
            </a>
          </div>
        </div>

        {/* header underneath */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-6 text-brand-600">
            401(k)s Are Failing the Average American
          </h2>
          <p className="text-xl md:text-2xl font-content text-neutral-700 max-w-4xl mx-auto leading-relaxed">
            After fees and inflation, the average return is barely <span className="font-bold">4%</span>.{' '}
            Our Strategy: <span className="text-brand-600 font-bold">10× That</span>. The difference isn't luck.
            It's education.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default SectionTwo;
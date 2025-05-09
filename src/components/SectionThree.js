import React from 'react';
import { Link } from 'react-router-dom';


const SectionThree = () => { 
  return (
    /* SECTION 3: BAR CHART SECTION */
    <section className="bg-gradient-to-b from-white to-neutral-100 py-24 px-4 text-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-headline font-bold py-1 px-4 rounded-full mb-4">PERFORMANCE COMPARISON</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-brand-600">
            See the Difference for Yourself
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed font-content text-neutral-700">
            We've proven what traditional investing can't deliver.
          </p>
        </div>

        {/* Performance Bar Chart (IGOR PROVIDES) */}
        <div className="relative group mb-16">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-brand-700 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
          <div className="relative bg-white p-6 rounded-xl shadow-xl">
            {/* Placeholder for Igor's chart */}
            <div className="aspect-video bg-neutral-50 rounded-lg flex items-center justify-center">
              <p className="text-2xl text-neutral-400 font-content font-medium">Performance Bar Chart (IGOR PROVIDES)</p>
              <p className="text-lg text-neutral-400 font-content">Comparing: LEO BTC, BTC, GOLD, S&P 500, USD</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1: Massive Outperformance */}
          <div className="relative group mb-16">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-brand-700 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-brand-700 mb-6">Massive Outperformance</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/gHCY7hEUub8" 
                  title="LEO Strategies" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <p className="text-xl leading-relaxed font-content text-neutral-700 mt-6">
                Our strategies have outperformed traditional assets, including BTC, by a significant margin over the past 5 years.
              </p>
            </div>
          </div>

          {/* Section 2: Compound Your Gains */}
          <div className="relative group mb-16">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-brand-700 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-brand-700 mb-6">Compound Your Gains</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/asGuB2UzynU" 
                  title="DeFi Strategies" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <p className="text-xl leading-relaxed font-content text-neutral-700 mt-6">
                You can earn even more on your investments by putting it to work.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
            <Link
              to="/apply"
              className="relative inline-block bg-brand-600 text-white font-subheadline font-bold py-4 px-10 rounded-full shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Start Your Wealth Plan Today&nbsp;- Apply Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
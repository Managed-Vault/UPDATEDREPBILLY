import React from 'react';
import { Link } from 'react-router-dom';

const SectionSeven = () => { 
  return (
    /* SECTION 7: PRICING SECTION */
    <section className="bg-gradient-to-b from-neutral-50 to-white py-24 px-4 text-neutral-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="pricing-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>
      
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-brand-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-brand-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-headline font-bold py-1 px-4 rounded-full mb-4">INVESTMENT</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-brand-600">
            Courses Starting <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-brand-100/50"></span>
              <span className="relative">as low as $3,597/year</span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed font-content text-neutral-700">
            Flexible Payment Plans Available
          </p>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400/30 to-brand-600/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-10 border border-brand-100">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-neutral-100">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-brand-700 mb-2">Complete Wealth Building Program</h3>
                  <p className="text-lg font-content text-neutral-600">Everything you need to transform your financial future</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-tagline font-bold text-brand-600">$3,597<span className="text-neutral-500 text-lg font-normal">/year</span></div>
                  <p className="text-sm font-content text-neutral-500 mt-1">Flexible Payment Plans Available</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-subheadline font-semibold text-neutral-800">Full Access to Strategy Library</h4>
                    <p className="font-content text-neutral-600 text-sm">Over 6+ proven strategies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-subheadline font-semibold text-neutral-800">Weekly Live Training</h4>
                    <p className="font-content text-neutral-600 text-sm">8 classes per week</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-subheadline font-semibold text-neutral-800">Community Access</h4>
                    <p className="font-content text-neutral-600 text-sm">24/7 support and networking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-subheadline font-semibold text-neutral-800">Personalized Strategy Calls</h4>
                    <p className="font-content text-neutral-600 text-sm">1-on-1 guidance from experts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-50 p-6 rounded-xl mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-subheadline font-semibold text-neutral-800 mb-1">Payment Flexibility</h4>
                    <p className="font-content text-neutral-600">
                      We offer various payment options to fit your budget, including payment plans and financing options. Our goal is to make this investment accessible for serious investors.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-300"></div>

                  <Link
                    to="/apply"
                    className="relative inline-block bg-brand-600 text-white font-subheadline font-bold py-4 px-10 rounded-full shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
                  >
                    Start Your Wealth Plan Today&nbsp;- Apply Here
                  </Link>
                </div>

                <p className="mt-4 font-content text-neutral-500">
                  No obligation consultation to find the right plan for you
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-center">
                <div className="flex items-center text-neutral-500 text-sm font-content">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Satisfaction Guarantee • 30-Day Money Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
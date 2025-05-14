import React from 'react';
import { Link } from 'react-router-dom';

const SectionSix = () => { 
  return (
    /* SECTION 6: VISUAL & SOCIAL PROOF */
    <section className="bg-gradient-to-b from-neutral-50 to-white py-24 px-4 text-neutral-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="proof-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#proof-grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-headline font-bold py-1 px-4 rounded-full mb-4">COMMUNITY HIGHLIGHTS</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-brand-600">
            See What's Happening Inside
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed font-content text-neutral-700">
            Our thriving community of investors share wins, support each other, and meet up around the world.
          </p>
        </div>

        {/* Member Results Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-neutral-800 mb-8 text-center">Real Member Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stephen's Trade Profit Post */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 group">
              <div className="relative h-64 overflow-hidden bg-neutral-100 flex items-center justify-center">
                {/* Placeholder for screenshot */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                  <p className="text-center font-content px-4">Stephen's Trade Profit Post<br />(Screenshot pending)</p>
                </div>
                <img 
                  src={process.env.PUBLIC_URL + "/images/placeholder-stephen.jpg"} 
                  alt="Stephen's Trade Profit" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold mr-3">
                    S
                  </div>
                  <div>
                    <h4 className="font-content font-bold text-neutral-800">Stephen M.</h4>
                    <p className="text-sm font-content text-neutral-500">Trading since Jan 2023</p>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-tagline font-semibold">
                    +218% Gain
                  </div>
                </div>
                <p className="font-content text-neutral-700">"I never expected to see these kinds of returns, especially in this market. The strategy works even when everything else is down!"</p>
              </div>
            </div>

            {/* Michael's Profit + Airdrop */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 group">
              <div className="relative h-64 overflow-hidden bg-neutral-100 flex items-center justify-center">
                {/* Placeholder for screenshot */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                  <p className="text-center font-content px-4">Michael's Profit + Airdrop<br />(Screenshot pending)</p>
                </div>
                <img 
                  src={process.env.PUBLIC_URL + "/images/placeholder-michael.jpg"} 
                  alt="Michael's Profit and Airdrop" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold mr-3">
                    M
                  </div>
                  <div>
                    <h4 className="font-content font-bold text-neutral-800">Michael K.</h4>
                    <p className="text-sm font-content text-neutral-500">Trading since Mar 2022</p>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-tagline font-semibold">
                    +$23K Airdrop
                  </div>
                </div>
                <p className="font-content text-neutral-700">"Not only am I up on my trading, but I caught an insane airdrop thanks to the positioning strategy. Game changer!"</p>
              </div>
            </div>

            {/* Alexa's Profit During Market Downturn */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 group">
              <div className="relative h-64 overflow-hidden bg-neutral-100 flex items-center justify-center">
                {/* Placeholder for screenshot */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                  <p className="text-center font-content px-4">Alexa's Profit During Downturn<br />(Screenshot pending)</p>
                </div>
                <img 
                  src={process.env.PUBLIC_URL + "/images/placeholder-alexa.jpg"} 
                  alt="Alexa's Profit During Market Downturn" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold mr-3">
                    A
                  </div>
                  <div>
                    <h4 className="font-content font-bold text-neutral-800">Alexa R.</h4>
                    <p className="text-sm font-content text-neutral-500">Trading since Nov 2022</p>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-tagline font-semibold">
                    +42% in Bear Market
                  </div>
                </div>
                <p className="font-content text-neutral-700">"While everyone was panicking during the crash, I was actually making money. The hedging strategies are worth their weight in gold!"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Panama Meetups */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-neutral-800 mb-8 text-center">Panama Meetups</h3>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-600/20 to-brand-400/20 rounded-xl blur-md"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Panama Mastermind 2023 */}
                <div className="flex flex-col items-center">
                  <h4 className="font-headline font-bold text-brand-700 text-2xl mb-4">Panama Mastermind 2023</h4>
                  <div className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden shadow-lg border-8 border-neutral-800 bg-black">
                    {/* Phone frame with video placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">Panama 2023 Highlights</p>
                        <p className="text-xs text-white/60 mt-2">Tap to play video</p>
                      </div>
                    </div>
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-4">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-white text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </span>
                        <span className="text-white text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-white text-xs">100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panama Mastermind 2024 */}
                <div className="flex flex-col items-center">
                  <h4 className="font-headline font-bold text-brand-700 text-2xl mb-4">Panama Mastermind 2024</h4>
                  <div className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden shadow-lg border-8 border-neutral-800 bg-black">
                    {/* Phone frame with video placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">Panama 2024 Highlights</p>
                        <p className="text-xs text-white/60 mt-2">Tap to play video</p>
                      </div>
                    </div>
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-4">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-white text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </span>
                        <span className="text-white text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-white text-xs">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Testimonials Page */}
        <div className="flex flex-col items-center justify-center space-y-10 mt-10">
          {/* Testimonials Link */}
          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-600 font-subheadline font-bold rounded-full border-2 border-brand-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-lg group"
            >
              Hear More from Our Students
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          {/* Spacer */}
          <div className="h-10"></div>
          
          {/* CTA Button */}
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

            <p className="mt-4 text-neutral-500 font-content">
              Join a supportive community committed to mutual success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
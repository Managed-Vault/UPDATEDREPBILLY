import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-[#f0f0f0] text-gray-900 py-24 px-4" id="heroSection">
      <div id="mainContent" className="container mx-auto max-w-6xl relative z-10">
        {/* LOGO with enhanced style */}
        <div className="mb-12">
          <img
            src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
            alt="ARCrypto Logo"
            className="mx-auto h-16 md:h-20 w-auto filter drop-shadow-lg"
          />
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column: Hero heading and CTA */}
          <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
            {/* Hero heading with animation */}
            <div className="max-w-xl">
              {/* Members info */}
              <div className="flex items-center mb-6">
                <div className="flex -space-x-3 mr-4">
                  <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                      alt="Member Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + "/images/Larry.jpg"}
                      alt="Member Larry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + "/images/Thomas.jpg"}
                      alt="Member Thomas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/80 flex items-center justify-center text-xs font-bold text-white">+42</div>
                </div>
                <div className="text-sm md:text-base text-[#4db2d3] font-medium">2867 MEMBERS</div>
              </div>
 
              <div className="p-4 mb-8">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-subheadline leading-tight text-left">
                  <span className="text-[#4db2d3] font-black tracking-tight drop-shadow-sm">Discover How to </span>
                  <span className="text-[#4db2d3] font-thin">Build </span>
                  <span className="text-[#4db2d3] font-thin">Real</span>
                  <span className="text-[#4db2d3] font-thin"> Wealth With </span>
                  <span className="text-[#4db2d3] font-black tracking-tight drop-shadow-sm">Crypto</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed font-subheadline text-left text-gray-900">
                ARCrypto helps you escape inflation, grow your wealth, and master the new rules of money — 
                <span className="font-semibold"> even if you're just getting started.</span>
              </p>

              {/* CTA Button */}
              <div className="mb-8">
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4db2d3] via-[#4db2d3] to-[#4db2d3] rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Link
                    to="/apply"
                    className="relative inline-block w-full md:w-auto bg-[#4db2d3] text-white font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg md:text-xl"
                  >
                    <span className="flex items-center justify-center">
                      START YOUR WEALTH PLAN TODAY - APPLY HERE
                    </span>
                  </Link>
                </div>
              </div>

              {/* Security note */}
              <div className="flex items-center text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Secure • No Credit Card Required • 20-Minute Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="max-w-lg mx-auto relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/50 via-blue-500/30 to-indigo-400/50 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-xl overflow-hidden shadow-2xl border border-indigo-200 transition-all duration-500 transform">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100/10">
                  <img
                    src="https://i.imgur.com/YQjGxQE.png"
                    alt="ARCrypto Platform Preview"
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="max-w-4xl mx-auto mt-16 relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-accent-300/50 via-accent-400/30 to-brand-400/50 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-black/40 backdrop-blur-sm p-2 md:p-3 rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 transform">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/XDyb9RYbm8I"
                title="VSL Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="my-24"></div>
        
        {/* CTA Button & Social Proof */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#4db2d3] backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Ready to transform your financial future?</h3>
            
            <div className="flex justify-center mb-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white via-white to-white rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>

                <Link
                  to="/apply"
                  className="relative inline-block bg-white text-[#4db2d3] font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg md:text-xl"
                >
                  <span className="flex items-center justify-center">
                    Start Your Wealth Plan Today - Apply Here
                  </span>
                </Link>
              </div>
            </div>

            <p className="text-white text-lg mb-8 text-center">Limited spots available for new members this month</p>

            <div className="flex items-center justify-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                    alt="Member Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 overflow-hidden">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Larry.jpg"}
                    alt="Member Larry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 overflow-hidden">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Thomas.jpg"}
                    alt="Member Thomas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/30 flex items-center justify-center text-xs font-bold text-white">+42</div>
              </div>
              <div className="text-sm md:text-base text-white font-medium">Joined this week</div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center text-white text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Secure • No Credit Card Required • 20-Minute Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
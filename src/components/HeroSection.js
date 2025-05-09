import React,  {useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

// Direct import from src folder
import lottieimageheroData from '../animations/lottieimagehero.json';

const HeroSection = () => {
  // Use the directly imported animation data
  const animationData = lottieimageheroData;
  const videoWrapperRef = useRef(null);

 // Function to handle video hover effect
const handleVideoHover = (isHovering) => {
  // Elements outside the video should be darkened
  const heroSection = document.getElementById('heroSection');
  const mainContent = document.getElementById('mainContent');
  const videoRect = videoWrapperRef.current.getBoundingClientRect();
  
  // Add transition CSS to the elements - this will slow down the darkening effect
  heroSection.style.transition = 'background-color 1.8s ease'; // Slower transition
  mainContent.style.transition = 'all 1.8s ease'; // Slower transition
  videoWrapperRef.current.style.transition = 'all 1.8s ease'; // Slower transition for the video scaling
  
  if (isHovering) {
    // Darken the background areas
    heroSection.classList.add('bg-brand-950');
    // Apply the before and after pseudo-elements for darkening
    mainContent.classList.add('darken-except-video');
    // Set the custom properties for the video position and dimensions
    document.documentElement.style.setProperty('--video-top', `${videoRect.top}px`);
    document.documentElement.style.setProperty('--video-left', `${videoRect.left}px`);
    document.documentElement.style.setProperty('--video-width', `${videoRect.width}px`);
    document.documentElement.style.setProperty('--video-height', `${videoRect.height}px`);
    // Add highlighting to the video
    videoWrapperRef.current.classList.add('scale-105', 'z-50');
  } else {
    // Remove darkening
    heroSection.classList.remove('bg-brand-950');
    mainContent.classList.remove('darken-except-video');
    // Remove highlighting from video
    videoWrapperRef.current.classList.remove('scale-105', 'z-50');
  }
};

  return (
  <section className="bg-[#f0f0f0] text-gray-900 py-24 px-4" id="heroSection">      {/* Background Pattern Elements */}
           
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
            <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 flex items-center justify-center text-xs font-bold text-[#4db2d3]">JR</div>
            <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 flex items-center justify-center text-xs font-bold text-[#4db2d3]">KT</div>
            <div className="w-10 h-10 rounded-full ring-2 ring-[#4db2d3] bg-[#4db2d3]/20 flex items-center justify-center text-xs font-bold text-[#4db2d3]">MS</div>
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
    
    {/* Right Column: Lottie Animation */}
    <div className="w-full md:w-1/2">
      <div className="max-w-lg mx-auto relative group">
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/50 via-blue-500/30 to-indigo-400/50 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-xl overflow-hidden shadow-2xl border border-indigo-200 transition-all duration-500 transform">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100/10">
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Video section - below the two columns */}
        <div 
          className="max-w-4xl mx-auto mt-16 relative group cursor-pointer" 
          onMouseEnter={() => handleVideoHover(true)}
          onMouseLeave={() => handleVideoHover(false)}
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-accent-300/50 via-accent-400/30 to-brand-400/50 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
          <div 
            ref={videoWrapperRef} 
            id="videoWrapper" 
            className="relative bg-black/40 backdrop-blur-sm p-2 md:p-3 rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 transform"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/XDyb9RYbm8I"
                title="VSL Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Play overlay that fades on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="bg-brand-900/40 backdrop-blur-sm p-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="my-24"></div>
        
        {/* CTA Button & Social Proof - enhanced */}
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
                    Start Your Wealth Plan Today&nbsp;- Apply Here
                  </span>
                </Link>
              </div>
            </div>

            <p className="text-white text-lg mb-8 text-center">Limited spots available for new members this month</p>

            <div className="flex items-center justify-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 flex items-center justify-center text-xs font-bold text-white">JR</div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 flex items-center justify-center text-xs font-bold text-white">KT</div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-white/20 flex items-center justify-center text-xs font-bold text-white">MS</div>
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
        
        {/* CSS Animation and Hover Effect Styles */}
        <style jsx>{`
          @keyframes float1 {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(6deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes float2 {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-6deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes float3 {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(8deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float1 {
            animation: float1 8s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 9s ease-in-out infinite;
          }
          .animate-float3 {
            animation: float3 10s ease-in-out infinite;
          }
          
          /* Darkening effect except for video */
          .darken-except-video::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.75);
            pointer-events: none;
            z-index: 40;
            transition: opacity 0.5s ease;
          }
          
          /* Create a "hole" in the overlay for the video */
          .darken-except-video::after {
            content: '';
            position: fixed;
            top: var(--video-top);
            left: var(--video-left);
            width: var(--video-width);
            height: var(--video-height);
            background-color: transparent;
            box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.75);
            pointer-events: none;
            z-index: 45;
            transition: all 0.5s ease;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
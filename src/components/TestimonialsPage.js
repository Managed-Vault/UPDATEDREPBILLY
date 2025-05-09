import React from 'react';
import { Link } from 'react-router-dom';
import DiscordScreenshotsSection from './DiscordScreenshotsSection';

const TestimonialsPage = () => {
  // Real testimonial data from the provided content
  const writtenTestimonials = [
    {
      name: "Tom Frederick",
      quote: "My BTC/ETH LP is cranking out 150% APR—wins are out there.",
      returns: "150% APR",
      initials: "TF",
      timePeriod: "3 months ago"
    },
    {
      name: "Alexa Adams",
      quote: "Sold half my SOL before the unlock—can't wait to buy back on sale.",
      returns: "40% Saved",
      initials: "AA",
      timePeriod: "2 months ago"
    },
    {
      name: "Michael & Michelle Gros",
      quote: "One wallet landed $10K in free Layer tokens from an airdrop!",
      returns: "$10K Airdrop",
      initials: "MG",
      timePeriod: "5 months ago"
    },
    {
      name: "Michael Chang",
      quote: "Closed my leverage trades early and dodged a major drawdown.",
      returns: "Risk Avoided",
      initials: "MC",
      timePeriod: "1 month ago"
    },
    {
      name: "Chris R.",
      quote: "Just received an airdrop of 4k PYTH thanks to the ARC family.",
      returns: "4k PYTH",
      initials: "CR",
      timePeriod: "2 months ago"
    },
    {
      name: "Coach Igor",
      quote: "Just banked $5.5k in the PYTH airdrop between 3 of my wallets.",
      returns: "$5.5K Airdrop",
      initials: "CI",
      timePeriod: "1 month ago"
    }
  ];

  

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Navigation/Logo Bar */}
      <div className="bg-brand-800 py-4 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <Link to="/" className="inline-block">
            <img
              src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
              alt="ARCrypto Logo"
              className="h-24 w-auto filter drop-shadow-lg"
            />
          </Link>
        </div>
      </div>
      
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-brand-700 to-brand-500 py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-bold py-1 px-4 rounded-full mb-4 backdrop-blur-sm">
            SUCCESS STORIES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 text-white">
            Our Students Speak <span className="block">Real Results, Real Lives Changed</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-white/90 leading-relaxed mb-8">
            Hear directly from our community members about how our strategies have
            transformed their investment results and financial futures.
          </p>
          
         
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold">3,000+</div>
              <div className="text-white/80 mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold">94%</div>
              <div className="text-white/80 mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold">147%</div>
              <div className="text-white/80 mt-1">Avg. Annual Return</div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Testimonial */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-brand-500 text-white py-2 px-4 text-sm font-bold uppercase rounded-bl-xl z-10">
              Featured Story
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed mb-6 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-100 absolute -top-6 -left-4 -z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  "Started with $2k, pulled $25k, and replaced my six-figure salary. The strategies and community support from ARC have completely transformed my financial reality in ways I never thought possible."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    LT
                  </div>
                  <div>
                    <div className="font-bold text-lg text-neutral-800">Lady Tina</div>
                    <div className="text-neutral-500">Member since 2022 • $25K from $2K</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-neutral-100 min-h-[300px] md:min-h-0">
                <div className="relative h-full">
                  {/* Replace with actual image when available */}
                  <img
                    src={process.env.PUBLIC_URL + "/images/Testimonials/Lady Tina Discord Testimonial.png"}
                    alt="Lady Tina Testimonial"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      document.getElementById('fallback-featured').style.display = 'flex';
                    }}
                  />
                  <div 
                    id="fallback-featured"
                    className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400"
                    style={{display: 'none'}}
                  >
                    <p className="text-center">Featured Testimonial<br />(Image pending)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Trading Results Showcase */}
      <section className="py-32 px-4 bg-brand-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 text-white text-sm font-bold py-1 px-4 rounded-full mb-4 backdrop-blur-sm">
              REAL TRADING RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white">
              Consistent Profits in Any Market
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
              Our members are making exceptional returns with our proven strategies.
            </p>
          </div>
          
          {/* Three-column profit showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
            
            {/* Michael's $915 Profit */}
            <div className="overflow-visible relative">
              {/* Post content area */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                
                  
                <div className="mt-3">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/Michael Trade.png"} 
                    alt="Michael's Trade Screenshot" 
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
              
              {/* Trading card */}
              <div className="bg-brand-300 rounded-lg overflow-hidden">
                <div className="bg-brand-300 py-3 px-4 text-center">
                  <h3 className="text-2xl font-bold text-white">$915 OF PROFIT</h3>
                </div>
                
                {/* Trading screenshot */}
                <div className="p-4">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/MichaelHyperliquid.png"} 
                    alt="Michael's $915 Profit Trading Result" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                {/* Profile footer */}
                <div className="bg-brand-300 p-4 flex items-center">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">MG</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Michael & Michelle Gros</p>
                    <p className="text-white/70 text-sm">Wins and Success Stories</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Igor's $5,000 Overnight */}
            <div className="overflow-visible relative">
              {/* Post content area */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                
                <div className="mt-3">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/Igor Trade.png"} 
                    alt="Igor's Trade Screenshot" 
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
              
              {/* Trading card */}
              <div className="bg-brand-300 rounded-lg overflow-hidden">
                <div className="bg-brand-300 py-3 px-4 text-center">
                  <h3 className="text-2xl font-bold text-white">$5,000 OVERNIGHT</h3>
                </div>
                
                {/* Trading screenshot */}
                <div className="p-4">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/IgorHyperliquid.png"} 
                    alt="Igor's $5,000 Overnight Trading Result" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                {/* Profile footer */}
                <div className="bg-brand-300 p-4 flex items-center">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">IS</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Igor Statsenko</p>
                    <p className="text-white/70 text-sm">Wins and Success Stories</p>
                  </div>
                </div>
              </div>
            </div>

                
            {/* Stephen's $1,091 Profit */}
            <div className="overflow-visible relative">
              {/* Post content area */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                
                <div className="mt-3">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/Stephen Trade.png"} 
                    alt="Stephen's Trade Screenshot" 
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
              
              {/* Trading card */}
              <div className="bg-brand-300 rounded-lg overflow-hidden">
                <div className="bg-brand-300 py-3 px-4 text-center">
                  <h3 className="text-2xl font-bold text-white">$1,091 OF PROFIT</h3>
                </div>
                
                {/* Trading screenshot */}
                <div className="p-4">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/Testimonials/StephenHyperliquid.png"} 
                    alt="Stephen's $1,091 Profit Trading Result" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                {/* Profile footer */}
                <div className="bg-brand-300 p-4 flex items-center">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">SL</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Stephen Long</p>
                    <p className="text-white/70 text-sm">Wins and Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section id="written-testimonials" className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-100 text-brand-700 text-sm font-bold py-1 px-4 rounded-full mb-4">
              WRITTEN TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-brand-600">
              What Our Members Are Saying
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700 leading-relaxed">
              Read stories from members who have transformed their financial future with our strategies.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {writtenTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="bg-brand-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-neutral-800">{testimonial.name}</div>
                      <div className="text-sm text-neutral-500">ARC Member</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-neutral-700 italic mb-4 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                  <div className="text-brand-600 font-semibold">{testimonial.returns}</div>
                  <div className="text-neutral-500 text-sm">{testimonial.timePeriod}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#more-testimonials"
              className="inline-block bg-brand-50 text-brand-600 font-bold py-3 px-8 rounded-full border border-brand-200
                        hover:bg-brand-100 transition-all duration-300 text-lg"
            >
              Read More Testimonials
            </a>
          </div>
        </div>
      </section>

      <DiscordScreenshotsSection></DiscordScreenshotsSection>

      {/* Join Community Section */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20 px-4 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <pattern id="join-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#join-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/80 leading-relaxed mb-10">
            Don't let inflation and market volatility erode your wealth any longer.
            Join thousands of successful investors who've transformed their financial future.
          </p>
          
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-white rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <Link
              to="/apply"
              className="relative inline-block bg-white text-brand-600 font-bold py-4 px-10 rounded-full shadow-lg
                        hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Start Your Wealth Plan Today - Apply Here
            </Link>
          </div>
          <p className="mt-4 text-white/70">
            Limited spots available. Application only takes 3 minutes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
import React from 'react';
import { Link } from 'react-router-dom';

const SectionFive = () => {
  return (
    /* SECTION 5: TESTIMONIALS + RESULTS */
    <section className="bg-gradient-to-b from-white to-neutral-50 py-24 px-4 text-neutral-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-headline font-bold py-1 px-4 rounded-full mb-4">SUCCESS STORIES</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-brand-600">
            Real People. Real Results.
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed font-content text-neutral-700">
            Hear from real community members who've already transformed
            their finances with ARCrypto's strategies.
          </p>
        </div>

        {/* Video Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/d1QkKhm-1-4"
                title="Video Testimonial 1"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "Thanks to ARCrypto, I finally understand DeFi so much more and have
                grown my savings so much faster than before!"
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">Mike Sariol</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2022</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+132% Returns</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/_8c6abk0Bps"
                title="Video Testimonial 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "It's hands-off and secure. I really am my own bank and the results are stunning!"
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    L
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">Leroy Davis</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2021</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+187% Returns</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/C3RCtwwzj5Q"
                title="Video Testimonial 3"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "I was skeptical at first, but now I'm a believer. The
                returns in every aspect of my live are unreal!"
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">Alexa Adams</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2023</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+162% Returns</div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Video Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 4 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/VIDEO_ID_4"
                title="Video Testimonial 4"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  {/* 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "Following the strategy has been life-changing. My portfolio has grown more in 6 months than it did in 5 years before."
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    J
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">James Wilson</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2021</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+205% Returns</div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/VIDEO_ID_5"
                title="Video Testimonial 5"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  {/* 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "The education alone was worth the investment. Now I understand crypto at a deeper level and can make intelligent decisions with confidence."
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">Sarah Johnson</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2022</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+178% Returns</div>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-100 group">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full h-64 group-hover:scale-105 transition-transform duration-500"
                src="https://www.youtube.com/embed/VIDEO_ID_6"
                title="Video Testimonial 6"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-neutral-50">
              <div className="flex mb-4">
                <div className="text-yellow-400">
                  {/* 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 italic font-content font-medium mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-100 absolute -top-4 -left-2 -z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "The community aspect is incredible. I've met so many like-minded investors and we help each other grow. Best investment decision I've ever made."
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-headline font-bold">
                    R
                  </div>
                  <div className="ml-3">
                    <span className="block text-neutral-800 font-content font-medium">Robert Chen</span>
                    <span className="text-sm font-content text-neutral-500">Investor since 2023</span>
                  </div>
                </div>
                <div className="text-brand-600 text-sm font-tagline font-semibold">+156% Returns</div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Additional Social Proof - Updated Stats */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-brand-600 text-4xl font-headline font-bold mb-2">3,000+</div>
              <div className="text-neutral-600 font-content">Active Members</div>
            </div>
            <div>
              <div className="text-brand-600 text-4xl font-headline font-bold mb-2">$4,000,000</div>
              <div className="text-neutral-600 font-content">Assets Managed</div>
            </div>
            <div>
              <div className="text-brand-600 text-4xl font-headline font-bold mb-2">8</div>
              <div className="text-neutral-600 font-content">Live Classes Per Week</div>
            </div>
          </div>
        </div>
          
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/apply"
            className="inline-block bg-brand-600 text-white font-subheadline font-bold py-4 px-10 rounded-full shadow-lg
                    hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Start Your Wealth Plan Today&nbsp;- Apply Here
          </Link>
          <p className="mt-4 text-neutral-500 font-content">
            Join thousands of investors already transforming their financial future
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="bg-neutral-50 min-h-screen flex flex-col">

      {/* Navigation / Logo Bar */}
      <header className="bg-brand-800 py-4 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <Link to="/" className="inline-block">
            <img
              src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
              alt="ARCrypto Logo"
              className="h-20 w-auto filter drop-shadow-lg"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-gradient-to-r from-brand-700 to-brand-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          {/* Success badge */}
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-brand-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 22a10 10 0 100-20 10 10 0 000 20zm4.707-11.293a1 1 0 00-1.414-1.414l-4.083 4.082-1.503-1.502a1 1 0 00-1.414 1.414l2.21 2.209a1 1 0 001.414 0l4.79-4.789z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            Your Application Has Been&nbsp;Received!
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
            We’ve emailed you a confirmation. Our team will review your answers and
            reach out within <span className="font-semibold">one business day</span> to schedule your
            no-obligation consultation.
          </p>

          <Link
            to="/"
            className="inline-block bg-white text-brand-600 font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Back&nbsp;to&nbsp;Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ThankYou;

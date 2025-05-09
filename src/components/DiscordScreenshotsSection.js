import React, { useState } from 'react';

const DiscordScreenshotsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  
  const discordTestimonials = [
    {
      name: "Chris R.",
      quote: "Just received an airdrop of 4k PYTH thanks to the ARC family.",
      image: "Chris R. Discord Testimonial.png",
      returns: "4k PYTH"
    },
    {
      name: "Coach Igor",
      quote: "Just banked $5.5k in the PYTH airdrop between 3 of my wallets.",
      image: "Coach Igor Discord Testimonial.png",
      returns: "$5.5k"
    },
    {
      name: "Haydn W.",
      quote: "That BIG $PAID bag has already done a 10×.",
      image: "Haydn W. Discord Testimonial.png",
      returns: "10× Returns"
    },
    {
      name: "Jack H.",
      quote: "I'm now earning $2-4k a month in passive income.",
      image: "Jack H. Discord Testimonial.png",
      returns: "$2-4k Monthly"
    },
    {
      name: "Jeordan",
      quote: "My first airdrop—4k PYTH worth $1,600!",
      image: "Jeordan Discord Testimonial 1.png", 
      returns: "$1,600"
    },
    {
      name: "Joe D.",
      quote: "Snagged $600 profit in 10 minutes with a single arbitrage trade.",
      image: "Joe D Discord Testimonial .png",
      returns: "$600 in 10min"
    },
    {
      name: "Joshua B.",
      quote: "The position is up 1,000% and I've already taken profits.",
      image: "Joshua B Discord Testimonial.png",
      returns: "1,000%"
    },
    {
      name: "Joshua B.",
      quote: "Bought at $0.83, now $0.97—up 36% this month.",
      image: "Joshua B Discord Testimonial 2.png",
      returns: "36%"
    },
    {
      name: "Karen C.",
      quote: "The ARC is exactly what I asked for—wealth without the overhead or expertise.",
      image: "Karen C. Discord Testimonial.png",
      returns: "Wealth Building"
    },
    {
      name: "Kyle W.",
      quote: "Market down 10%, I'm up 14%—that's $9k this week!",
      image: "Kyle W. Discord Testimonial.png",
      returns: "$9k Weekly"
    },
    {
      name: "Lady Tina",
      quote: "Started with $2k, pulled $25k, and replaced my six-figure salary.",
      image: "Lady Tina Discord Testimonial.png",
      returns: "$25k+ Returns"
    },
    {
      name: "Murray S.",
      quote: "ARC exceeded my expectations and put me on the path to financial freedom.",
      image: "Murray S. Discord Testimonial.png",
      returns: "Financial Freedom"
    },
    {
      name: "Peter E.",
      quote: "Just scored an $880 PYTH airdrop I never knew I qualified for!",
      image: "Peter E. Discord Testimonial.png",
      returns: "$880"
    },
    {
      name: "Ryan S.",
      quote: "I've come SO far since my re-education—100% ready for the next run!",
      image: "Ryan S. Discord Testimonial.png",
      returns: "100% Ready"
    }
  ];
  
  const openModal = (image) => {
    setSelectedImage(image); // Store just the image name
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Helper function to get the path to images in public folder
  const getImagePath = (imageName) => {
    return `${process.env.PUBLIC_URL}/images/Testimonials/${imageName}`;
  };
  
  // Helper function for modal image path
  const getModalImagePath = (imageName) => {
    return `${process.env.PUBLIC_URL}/images/Testimonials/${imageName}`;
  };
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-bold py-1 px-4 rounded-full mb-4">
            FROM OUR DISCORD
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-brand-600">
            Real Screenshots from Our Community
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-700 leading-relaxed">
            These are actual results shared by our members in our private community.
          </p>
        </div>

        {/* Discord Screenshots Grid */}
        {/* Show image loading errors if any occur */}
        {Object.keys(imageLoadErrors).length > 0 && (
          <div className="mb-10 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
            <h3 className="font-bold mb-2">Image Loading</h3>
            <p>Trying to load images from: <code>{process.env.PUBLIC_URL}/images/Testimonials/</code></p>
            <p className="mt-2 text-sm">Make sure your images are in the public/images/Testimonials folder</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discordTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 group"
            >
              <div 
                className="relative h-64 overflow-hidden bg-neutral-100 cursor-pointer"
                onClick={() => openModal(testimonial.image)}
              >
                {/* Discord screenshot image */}
                <img 
                  src={getImagePath(testimonial.image)} 
                  alt={`${testimonial.name} Discord Testimonial`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Track which images failed to load
                    setImageLoadErrors(prev => ({...prev, [testimonial.image]: true}));
                    console.error(`Failed to load image: ${testimonial.image}`);
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback for missing images */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400" style={{display: 'none'}}>
                  <p className="text-center">Discord Screenshot<br />(Image pending)</p>
                </div>
                
                {/* View full image overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-brand-600 px-4 py-2 rounded-md font-medium shadow-lg">
                    View Full Image
                  </span>
                </div>
                
                {/* Return tag */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg">
                  {testimonial.returns}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="bg-brand-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">ARC Community Member</p>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full-size image */}
            <div className="w-full h-full max-h-[80vh] overflow-auto">
              <img 
                src={getModalImagePath(selectedImage)} 
                alt="Discord Screenshot Full View" 
                className="w-full h-auto"
                onError={(e) => {
                  console.error(`Failed to load modal image: ${selectedImage}`);
                  e.target.parentElement.innerHTML = '<div class="p-16 text-center text-neutral-700"><p>Image could not be loaded</p></div>';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiscordScreenshotsSection;
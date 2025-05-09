import React from 'react';


const Footer = () => { 
  return (
    /* FOOTER SECTION */
    <footer className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23ffffff fill-opacity=1 fill-rule=evenodd%3E%3Ccircle cx=3 cy=3 r=1/%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand/About */}
          <div className="md:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl inline-block mb-6">
              <img
                src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
                alt="ARCrypto Logo"
                className="h-12 w-auto filter drop-shadow-lg"
              />
            </div>
            <p className="text-lg leading-relaxed text-white/90 font-content">
              ARCrypto helps everyday people harness the power of DeFi safely and effectively.
              From vault strategies to community support, we're here to make crypto work for you.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h4 className="font-headline font-bold text-lg mb-3">Stay Updated</h4>
              <p className="text-sm text-white/80 font-content mb-3">Get the latest crypto strategies and tips in your inbox</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-white/10 backdrop-blur-sm rounded-l-full py-2 px-4 text-white font-content placeholder:text-white/50 focus:outline-none border border-white/20"
                />
                <button className="bg-brand-300 hover:bg-brand-400 text-brand-900 font-subheadline font-bold py-2 px-4 rounded-r-full transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/3 flex flex-col gap-6 mt-6 md:mt-0">
            <h4 className="font-headline font-bold text-xl mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-4 text-lg font-content">
              <a href="#hero" className="hover:text-brand-300 transition-all duration-200 flex items-center group">
                <span className="inline-block w-0 group-hover:w-2 h-px bg-brand-300 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Home
              </a>
              <a href="#why-crypto" className="hover:text-brand-300 transition-all duration-200 flex items-center group">
                <span className="inline-block w-0 group-hover:w-2 h-px bg-brand-300 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Why Crypto?
              </a>
              <a href="#vaults" className="hover:text-brand-300 transition-all duration-200 flex items-center group">
                <span className="inline-block w-0 group-hover:w-2 h-px bg-brand-300 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Managed Vaults
              </a>
              <a href="#testimonials" className="hover:text-brand-300 transition-all duration-200 flex items-center group">
                <span className="inline-block w-0 group-hover:w-2 h-px bg-brand-300 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Testimonials
              </a>
              <a href="#team" className="hover:text-brand-300 transition-all duration-200 flex items-center group">
                <span className="inline-block w-0 group-hover:w-2 h-px bg-brand-300 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Our Team
              </a>
            </nav>
            
            {/* Contact Info */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h4 className="font-headline font-bold text-lg mb-3">Contact Us</h4>
              <a href="mailto:support@arcrypto.com" className="text-white/90 hover:text-brand-300 font-content transition-colors duration-200 flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@arcrypto.io
              </a>
              <a href="#book-call" className="text-white/90 hover:text-brand-300 font-content transition-colors duration-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
            <h4 className="font-headline font-bold text-xl mb-2">Connect with Us</h4>
            <p className="text-white/80 font-content mb-4">Join our growing community across these platforms</p>
            
            <div className="flex items-center gap-4 flex-wrap">
              {/* Social media icons with enhanced hover effects */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-300 text-white hover:text-brand-900 p-3 rounded-full transition-all hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-300 text-white hover:text-brand-900 p-3 rounded-full transition-all hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-300 text-white hover:text-brand-900 p-3 rounded-full transition-all hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-300 text-white hover:text-brand-900 p-3 rounded-full transition-all hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
            
            {/* Community Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mt-6 border border-white/20">
              <h4 className="font-headline font-bold text-lg mb-3">Our Community</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-tagline font-bold text-brand-300">400+</div>
                  <div className="text-sm font-content text-white/80">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-tagline font-bold text-brand-300">$4M+</div>
                  <div className="text-sm font-content text-white/80">Assets Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Disclaimer + Copyright */}
        <div className="border-t border-white/25 pt-8 text-center md:text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-6 border border-white/20">
            <p className="text-sm font-content text-white/90 leading-relaxed">
              <span className="font-bold text-white">Disclaimer:</span> The information provided on this site does not constitute investment advice, 
              financial advice, or trading advice. Always do your own research and never invest more than 
              you are willing to lose. ARCrypto is not responsible for any financial losses.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm font-content text-white/80">
              &copy; {new Date().getFullYear()} ARCrypto. All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#privacy" className="text-sm font-content text-white/80 hover:text-white hover:underline transition-colors duration-200">Privacy Policy</a>
              <a href="#terms" className="text-sm font-content text-white/80 hover:text-white hover:underline transition-colors duration-200">Terms of Service</a>
              <a href="#cookies" className="text-sm font-content text-white/80 hover:text-white hover:underline transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
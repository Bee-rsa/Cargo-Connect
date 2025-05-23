import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-4 w-full font-poppins">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-start">
        <div className="text-2xl text-white font-extrabold tracking-tight mb-4">
          <Link to="/" className="hover:text-custom-sage transition-colors duration-200">Cargo Connect</Link>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Products Section */}
          <div>
            <h2 className="font-bold mb-4 inline-block border-b border-white pb-2">Products</h2>
            <ul>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Cargo Insurance</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Customs Brokerage</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Less than Container</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Buyer&apos;s Consolidation</a></li>
            </ul>
          </div>

          {/* Business Hub Section */}
          <div>
            <h2 className="font-bold mb-4 inline-block border-b border-white pb-2">Business Hub</h2>
            <ul>
              <li><a href="/sign-in" className="hover:text-custom-sage transition-colors duration-200">Login in</a></li>
              <li><a href="/pricing" className="hover:text-custom-sage transition-colors duration-200">Pricing</a></li>
              <li><a href="/trucking-page" className="hover:text-custom-sage transition-colors duration-200">Trucking</a></li>
              <li><a href="/courier-services" className="hover:text-custom-sage transition-colors duration-200">Courier Services</a></li>
              <li><a href="/ocean-freight" className="hover:text-custom-sage transition-colors duration-200">Ocean Freight</a></li>
              <li><a href="/air-freight" className="hover:text-custom-sage transition-colors duration-200">Air Freight</a></li>
              <li><a href="/rail-freight" className="hover:text-custom-sage transition-colors duration-200">Rail Freight</a></li>
              <li><a href="/warehousing" className="hover:text-custom-sage transition-colors duration-200">Warehousing</a></li>
              <li><a href="/operations" className="hover:text-custom-sage transition-colors duration-200">Operations</a></li>
              <li><a href="/freight-forwarders" className="hover:text-custom-sage transition-colors duration-200">Freight Forwarders</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="font-bold mb-4 inline-block border-b border-white pb-2">Resources</h2>
            <ul>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Guides</a></li>
              <li><a href="/blog" className="hover:text-custom-sage transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Weight Calculator</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Market Updates</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Research</a></li>
              <li><a href="#" className="hover:text-custom-sage transition-colors duration-200">Case Study</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="font-bold mb-4 inline-block border-b border-white pb-2">Company</h2>
            <ul>
              <li><a href="/about-cargo-connect" className="hover:text-custom-sage transition-colors duration-200">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-custom-sage transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-custom-sage transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="contact-page" className="hover:text-custom-sage transition-colors duration-200">Talk To An Expert</a></li>
              <li><a href="/help-center" className="hover:text-custom-sage transition-colors duration-200">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-8">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" 
              alt="Facebook" 
              className="h-8 w-8 hover:opacity-80" 
            />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF" 
              alt="YouTube" 
              className="h-8 w-8 hover:opacity-80" 
            />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
              alt="LinkedIn" 
              className="h-8 w-8 hover:opacity-80" 
            />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" 
              alt="Instagram" 
              className="h-8 w-8 hover:opacity-80" 
            />
          </a>
        </div>

        {/* Copyright and Trademark Notice */}
        <p className="text-sm text-white mt-4 font-poppins">
          © {new Date().getFullYear()} Cargo Connect ™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
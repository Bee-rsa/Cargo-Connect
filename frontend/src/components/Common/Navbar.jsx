import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import TopBar from "../Layout/Topbar";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [expandedLink, setExpandedLink] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
    setExpandedLink(null);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const toggleSublinks = (link) => {
    setExpandedLink((prev) => (prev === link ? null : link));
  };

  const handleLinkClick = () => {
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  };


  return (
    <>
      <nav className="w-full bg-custom-blue flex justify-between items-center py-2 px-6">
        {/* Left - Logo */}
        <div className="text-3xl text-white font-extrabold tracking-tight">
          <Link to="/">Cargo Connect</Link>
        </div>

        {/* Right - Desktop Nav + Icons */}
        <div className="flex items-center gap-6">
          {/* Dropdowns and Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Products */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("products")}
                className="text-white text-xl sm:text-base font-medium hover:text-custom-sage transition duration-300 flex items-center font-poppins"
              >
                Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 10l6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen === "products" && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/products/item1">Product 1</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/products/item2">Product 2</Link>
                </div>
              )}
            </div>

            {/* Business Hub */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("business")}
                className="text-white text-xl sm:text-base font-medium hover:text-custom-sage transition duration-300 flex items-center font-poppins"
              >
                Business Hub
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 10l6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen === "business" && (
                <div className="absolute right-0 z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/operator-login">Business Login</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/trucking-page">Trucking</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/courier-services">Courier Services</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/ocean-freight">Ocean Freight</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/warehousing">Warehousing</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/freight-forwarders">Freight Forwarders</Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("resources")}
                className="text-white text-xl sm:text-base font-medium hover:text-custom-sage transition duration-300 flex items-center font-poppins"
              >
                Resources
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 10l6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen === "resources" && (
                <div className="absolute right-0 z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/resources/docs">User Guides</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/blog">Blog</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/resources/tutorials">Market Forecast</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/resources/tutorials">Case Study</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/weight-calculator">Weight Calculator</Link>
                </div>
              )}
            </div>

            {/* Company */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("company")}
                className="text-white text-xl sm:text-base font-medium hover:text-custom-sage transition duration-300 flex items-center font-poppins"
              >
                Company
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 10l6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen === "company" && (
                <div className="absolute right-0 z-10 mt-2 w-56 bg-white rounded-md shadow-lg">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/about-cargo-connect">About Us</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/contact-page">Talk To An Expert</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/privacy-policy">Privacy Policy</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/terms-and-conditions">Terms & Conditions</Link>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link to="/pricing" className="text-white text-xl sm:text-base font-medium hover:text-custom-sage transition duration-300 font-poppins">Pricing</Link>
          </div>

          {/* Icons and Search */}
          <div className="flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
            )}
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-custom-sage" />
            </Link>
            <div className="overflow-hidden text-white">
              <SearchBar />
            </div>
            <button onClick={toggleNavDrawer} className="md:hidden">
              {navDrawerOpen ? (
                <HiXMark className="h-6 w-6 text-white" />
              ) : (
                <HiBars3BottomRight className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen with smooth transition */}
      <div className={`md:hidden fixed inset-0 z-50 bg-custom-blue transform transition-transform duration-300 ease-in-out ${navDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <TopBar />
        {/* Header with logo, search and close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-900">
          <div className="text-3xl text-white font-extrabold tracking-tight">
            <Link to="/" onClick={handleLinkClick}>Cargo Connect</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white">
              <SearchBar />
            </div>
            <button 
              onClick={toggleNavDrawer}
              className="text-white focus:outline-none"
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* User section with Get Started button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-900">
          <div className="flex items-center">
            <HiOutlineUser className="h-6 w-6 text-custom-sage mr-2" />
            <span className="text-white text-lg">
              
            </span>
          </div>

        </div>

        {/* Menu items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          <div className="mb-2">
            <div 
              onClick={() => toggleSublinks("products")}
              className="flex justify-between items-center text-white text-lg py-3 border-b border-gray-900 cursor-pointer"
            >
              <span>Products</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${expandedLink === "products" ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {expandedLink === "products" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/products/item1" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Product 1</Link>
                <Link to="/products/item2" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Product 2</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <div 
              onClick={() => toggleSublinks("businessHub")}
              className="flex justify-between items-center text-white text-lg py-3 border-b border-gray-900 cursor-pointer"
            >
              <span>Business Hub</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${expandedLink === "businessHub" ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {expandedLink === "businessHub" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/operator-login" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Business Login</Link>
                <Link to="/trucking-page" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Trucking</Link>
                <Link to="/courier-services" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Courier Services</Link>
                <Link to="/ocean-freight" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Ocean Freight</Link>
                <Link to="/warehousing" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Warehousing</Link>
                <Link to="/freight-forwarders" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Freight Forwarders</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <div 
              onClick={() => toggleSublinks("resources")}
              className="flex justify-between items-center text-white text-lg py-3 border-b border-gray-900 cursor-pointer"
            >
              <span>Resources</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${expandedLink === "resources" ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {expandedLink === "resources" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/resources/docs" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>User Guides</Link>
                <Link to="/blog" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Blog</Link>
                <Link to="/weight-calculator" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Weight Calculator</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <div 
              onClick={() => toggleSublinks("company")}
              className="flex justify-between items-center text-white text-lg py-3 border-b border-gray-900 cursor-pointer"
            >
              <span>Company</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${expandedLink === "company" ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {expandedLink === "company" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/about-cargo-connect" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>About Us</Link>
                <Link to="/contact-page" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Talk To An Expert</Link>
                <Link to="/privacy-policy" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="block text-custom-sage text-lg py-2" onClick={handleLinkClick}>Terms & Conditions</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <Link 
              to="/pricing" 
              className="block text-white text-lg py-3 border-b border-gray-900"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
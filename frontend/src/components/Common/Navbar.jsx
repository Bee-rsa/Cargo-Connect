import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { FaBox, FaBuilding, FaBook, FaInfoCircle, FaAngleRight, FaAngleDown, FaDollarSign } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuthStore } from "../../store/authStore";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [expandedLink, setExpandedLink] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const { isLoggedIn, logout } = useAuthStore();

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

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <nav className="w-full bg-custom-blue flex justify-between items-center py-2 px-6">
        {/* Left - Logo */}
        <div className="text-2xl text-white font-extrabold tracking-tight">
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

      {/* Mobile Menu Slide-in */}
      {navDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleNavDrawer}
          ></div>
          <div className="fixed inset-y-0 right-0 w-3/4 bg-custom-blue shadow-xl overflow-y-auto">
            <div className="flex flex-col p-6">
              {/* Close button at top right */}
              <button 
                onClick={toggleNavDrawer}
                className="absolute top-4 right-4 text-white focus:outline-none"
              >
                <HiXMark className="h-6 w-6" />
              </button>

              <div className="text-2xl text-white font-extrabold tracking-tight mb-6">
                <Link to="/" onClick={handleLinkClick}>Cargo Connect</Link>
              </div>

              {/* Products */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between space-x-2 text-white p-1 transition duration-300 font-poppins text-xl cursor-pointer border-b border-gray-600"
                  onClick={() => toggleSublinks("products")}
                >
                  <div className="flex items-center">
                    <FaBox className="text-custom-sage mr-4" />
                    <span>Products</span>
                  </div>
                  {expandedLink === "products" ? (
                    <FaAngleDown className="text-white" />
                  ) : (
                    <FaAngleRight className="text-white" />
                  )}
                </div>
                {expandedLink === "products" && (
                  <div className="ml-10 mt-2 space-y-2 flex flex-col">
                    <Link to="/products/item1" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Item 1</Link>
                    <Link to="/products/item2" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Item 2</Link>
                  </div>
                )}
              </div>

              {/* Business Hub */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between space-x-2 mt-2 text-white p-1 transition duration-300 font-poppins text-xl cursor-pointer border-b border-gray-600"
                  onClick={() => toggleSublinks("businessHub")}
                >
                  <div className="flex items-center">
                    <FaBuilding className="text-custom-sage mr-4" />
                    <span>Business Hub</span>
                  </div>
                  {expandedLink === "businessHub" ? (
                    <FaAngleDown className="text-white" />
                  ) : (
                    <FaAngleRight className="text-white" />
                  )}
                </div>
                {expandedLink === "businessHub" && (
                  <div className="ml-8 mt-2 space-y-2 flex flex-col">
                    <Link to="/operator-login" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Login in</Link>
                    <Link to="/trucking-page" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Trucking</Link>
                    <Link to="/courier-services" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Courier Services</Link>
                    <Link to="/ocean-freight" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Ocean Freight</Link>
                    <Link to="/warehousing" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Warehousing</Link>
                    <Link to="/freight-forwarders" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Freight Forwarders</Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between space-x-2 mt-2 text-white p-1 transition duration-300 font-poppins text-xl cursor-pointer border-b border-gray-600"
                  onClick={() => toggleSublinks("resources")}
                >
                  <div className="flex items-center">
                    <FaBook className="text-custom-sage mr-4" />
                    <span>Resources</span>
                  </div>
                  {expandedLink === "resources" ? (
                    <FaAngleDown className="text-white" />
                  ) : (
                    <FaAngleRight className="text-white" />
                  )}
                </div>
                {expandedLink === "resources" && (
                  <div className="ml-10 mt-2 space-y-2 flex flex-col">
                    <Link to="/resources/docs/doc1" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Guides</Link>
                    <Link to="/blog" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Blog</Link>
                    <Link to="/weight-calculator" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Weight Calculator</Link>
                  </div>
                )}
              </div>

              {/* Company */}
              <div className="">
                <div
                  className="flex items-center justify-between space-x-2 text-white p-2 transition duration-300 font-poppins text-xl cursor-pointer border-b border-gray-600"
                  onClick={() => toggleSublinks("company")}
                >
                  <div className="flex items-center">
                    <FaInfoCircle className="text-custom-sage mr-4" />
                    <span>Company</span>
                  </div>
                  {expandedLink === "company" ? (
                    <FaAngleDown className="text-white" />
                  ) : (
                    <FaAngleRight className="text-white" />
                  )}
                </div>
                {expandedLink === "company" && (
                  <div className="ml-10 mt-2 space-y-2 flex flex-col">
                    <Link to="/about-cargo-connect" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>About Us</Link>
                    <Link to="/contact-page" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Talk To An Expert</Link>
                    <Link to="/privacy-policy" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-2" onClick={handleLinkClick}>Terms & Conditions</Link>
                  </div>
                )}
              </div>

              {/* Pricing */}
<div className="mb-4">
  <Link 
    to="/pricing" 
    className="flex items-center justify-between space-x-2 text-white mt-4 p-1 transition duration-300 font-poppins text-xl cursor-pointer border-b border-gray-600" 
    onClick={handleLinkClick}
  >
    <div className="flex items-center">
      <FaDollarSign className="text-custom-sage mr-4" />
      <span>Pricing</span>
    </div>
  </Link>
</div>

              {/* Auth Links */}
              <div className="mt-4">
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout} 
                    className="w-full text-white hover:text-gray-400 transition duration-300 text-lg font-poppins py-3 text-left"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    className="w-full text-custom-sage hover:text-gray-400 transition duration-300 text-lg font-poppins py-3 text-left"
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
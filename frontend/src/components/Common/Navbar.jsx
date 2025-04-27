import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => (prev === menu ? null : menu));
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
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins" to="/resources/docs"> User Guides</Link>
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
              <HiBars3BottomRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </nav>
     
    </>
  );
};
export default Navbar;

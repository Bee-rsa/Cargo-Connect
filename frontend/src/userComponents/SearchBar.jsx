import { useState, useEffect, useRef } from 'react';
import {
  FaSearch,
  FaChevronDown,
  FaShippingFast,
  FaWarehouse,
  FaHome,
  FaBuilding,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const countries = [
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  { name: 'Lesotho', code: 'LS', flag: '🇱🇸' },
  { name: 'Namibia', code: 'NA', flag: '🇳🇦' },
  { name: 'Botswana', code: 'BW', flag: '🇧🇼' },
  { name: 'Zimbabwe', code: 'ZW', flag: '🇿🇼' },
  { name: 'Mozambique', code: 'MZ', flag: '🇲🇿' },
];


const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [type, setType] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsTypeDropdownOpen(false);
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOriginClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsTypeDropdownOpen(false);
    setIsCountryDropdownOpen(false);
  };

  const handleTypeClick = () => {
    setIsTypeDropdownOpen(!isTypeDropdownOpen);
    setIsCountryDropdownOpen(false);
  };

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    setIsTypeDropdownOpen(false);
  };

  const handleCountryClick = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
    setIsTypeDropdownOpen(false);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setIsCountryDropdownOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center bg-transparent text-white font-poppins">
      <div className="w-full max-w-7xl px-4 py-8 flex -mt-16 flex-col items-center">
        {/* Desktop Title/Subtitle - aligned */}
        <div className="hidden sm:block text-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-2">
            Where would you like to ship?
          </h1>
          <p className="text-sm sm:text-base text-custom-sage md:text-lg mb-8 max-w-lg">
            Start searching to compare, book, and manage your freight, all on one platform.
          </p>
        </div>

        {/* Mobile Title/Subtitle - subtitle in container */}
        <div className="sm:hidden mt-8 w-full text-center mb-4">
          <div className="p-2 rounded-lg shadow">
            <h1 className="text-xl text-custom-sage font-bold">
              Where would you like to ship?
            </h1>
            <p className="text-sm mt-1 text-white">
              Start searching to compare, book, and manage your freight, all on one platform.
            </p>
          </div>
        </div>

{/* Desktop Layout */}
<div className="hidden sm:flex w-full bg-white text-black rounded-lg shadow-md p-4 flex-wrap gap-4">
  {/* Origin Section */}
  <div className="relative flex-1 min-w-[200px]" ref={dropdownRef}>
    <div 
      className="w-full  bg-transparent text-black cursor-pointer rounded-lg"
      onClick={handleOriginClick}
    >
      <div className="font-medium">
        {type && country ? `${type} in ${country}` : 'Origin'}
      </div>
      <p 
        className="text-xs text-gray-500 mt-1 text-left cursor-pointer"
        onClick={handleOriginClick}
      >
        Where are you shipping from?
      </p>
    </div>

    {isDropdownOpen && (
      <div className="absolute top-full left-0 mt-5 -ml-4 w-[52rem] bg-white rounded-b-lg rounded-r-lg shadow-xl z-10 p-4 border-2 border-custom-blue">
        {/* Added H1 Heading */}
        <h1 className="text-xl font-bold mb-4">Where are you shipping from?</h1>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Type Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Type</label>
            <div 
              className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleTypeClick();
              }}
            >
              <span>{type || 'Select type'}</span>
              <FaChevronDown className="text-gray-400" />
            </div>
            {isTypeDropdownOpen && (
              <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {[
                  { label: 'Port/Airport', icon: <FaShippingFast /> },
                  { label: 'Factory/Warehouse', icon: <FaWarehouse /> },
                  { label: 'Business address', icon: <FaBuilding /> },
                  { label: 'Residential address', icon: <FaHome /> },
                ].map((option) => (
                  <div
                    key={option.label}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeSelect(option.label);
                    }}
                  >
                    <span className="text-gray-500">{option.icon}</span>
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Country</label>
            <div 
              className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleCountryClick();
              }}
            >
              <div className="flex items-center gap-2">
                {country && countries.find((c) => c.name === country)?.flag}
                <span>{country || 'Select country'}</span>
              </div>
              <FaChevronDown className="text-gray-400" />
            </div>
            {isCountryDropdownOpen && (
              <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {countries.map((c) => (
                  <div
                    key={c.code}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCountrySelect(c.name);
                    }}
                  >
                    <span className="text-xl">{c.flag}</span>
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Address Input */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    )}
  </div>

  {/* Vertical Divider */}
  <div className="w-px bg-gray-300 h-12 self-center mx-2"></div>

  {/* Destination Section */}
  <div className="flex-1 min-w-[200px]">
    <input
      type="text"
      placeholder="Destination"
      className="w-full text-black"
      value={type && country ? `${type} in ${country}` : 'Destination'}
    />
    <p className="text-xs text-gray-500 mt-1 text-left">Where are you shipping to?</p>
  </div>

  {/* Vertical Divider */}
  <div className="w-px bg-gray-300 h-12 self-center mx-2"></div>

  {/* Load and Goods Section */}
  <div className="flex items-start gap-4 flex-1">
    <div className="flex-1 min-w-[200px]">
      <input
        type="text"
        placeholder="Load"
        className="w-full text-black"
        value={type && country ? `${type} in ${country}` : 'Load'}
      />
      <p className="text-xs text-gray-500 mt-1 text-left">What are you shipping?</p>
    </div>

    {/* Vertical Divider */}
    <div className="w-px bg-gray-300 h-12 self-center mx-2"></div>

    <div className="flex-1 min-w-[200px]">
      <input
        type="text"
        placeholder="Goods"
        className="w-full text-black"
        value={type && country ? `${type} in ${country}` : 'Goods'}
      />
      <p className="text-xs text-gray-500 mt-1 text-left">Tell us about your goods?</p>
    </div>
  </div>


          <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md font-semibold flex items-center justify-center">
            <FaSearch className="mr-2" />
            <Link to="/search-results">Search</Link>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden w-full flex flex-col gap-4">
          <Link to="/origin">
          <div className="w-full px-4 py-3 bg-white text-black rounded-lg shadow cursor-pointer">
            <input
              type="text"
              placeholder="Origin"
              className="text-black w-full bg-white outline-none"
              value={type && country ? `${type} in ${country}` : 'Origin'}
              readOnly // prevents keyboard input
            />
            <p className="text-xs text-gray-500 mt-1 text-left">Where are you shipping from?</p>
          </div>
        </Link>

        <Link to="/destination">
          <div className="w-full px-4 py-3 bg-white text-black rounded-lg shadow cursor-pointer">
            <input
              type="text"
              placeholder="Destination"
              className="text-black w-full bg-white outline-none"
              value={type && country ? `${type} in ${country}` : 'Destination'}
              readOnly // prevents keyboard input
            />
            <p className="text-xs text-gray-500 mt-1 text-left">Where are you shipping to?</p>
          </div>
        </Link>

        <Link to="/load">
          <div className="w-full px-4 py-3 bg-white text-black rounded-lg shadow cursor-pointer">
            <input
              type="text"
              placeholder="Load"
              className="text-black w-full bg-white outline-none"
              value={type && country ? `${type} in ${country}` : 'Load'}
              readOnly // prevents keyboard input
            />
            <p className="text-xs text-gray-500 mt-1 text-left">What are you shipping?</p>
          </div>
        </Link>
          
          <Link to="/goods">
          <div className="w-full px-4 py-3 bg-white text-black rounded-lg shadow cursor-pointer">
            <input
              type="text"
              placeholder="Goods"
              className="text-black w-full bg-white outline-none"
              value={type && country ? `${type} in ${country}` : 'Goods'}
              readOnly // prevents keyboard input
            />
            <p className="text-xs text-gray-500 mt-1 text-left">Tell us about your goods?</p>
          </div>
        </Link>
          
          
          <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-md font-semibold flex items-center justify-center">
            <FaSearch className="mr-2" />
            <Link to="/search-results">Search</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
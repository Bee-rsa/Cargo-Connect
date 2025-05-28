import { useState } from "react";
import UserNavbar from "../../components/Common/userNavbar";
import Select from "react-select";
import AddressAutocompleted from '../../components/AutoCompleted';
import { FiCalendar, FiUploadCloud } from 'react-icons/fi';



// Country options with flag images
const countryOptions = [
  {
    value: "BW",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/bw.png" alt="BW" className="w-5 h-4" />
        Botswana
      </div>
    ),
  },
  {
    value: "LS",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/ls.png" alt="LS" className="w-5 h-4" />
        Lesotho
      </div>
    ),
  },
  {
    value: "MZ",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/mz.png" alt="MZ" className="w-5 h-4" />
        Mozambique
      </div>
    ),
  },
  {
    value: "NA",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/na.png" alt="NA" className="w-5 h-4" />
        Namibia
      </div>
    ),
  },
  {
    value: "ZA",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/za.png" alt="ZA" className="w-5 h-4" />
        South Africa
      </div>
    ),
  },
  {
    value: "ZW",
    label: (
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w40/zw.png" alt="ZW" className="w-5 h-4" />
        Zimbabwe
      </div>
    ),
  },
];


const Tenders = () => {
  const [deliveryLocations, setDeliveryLocations] = useState([""]);
  const [country, setCountry] = useState(null);

  const handleAddDelivery = () => setDeliveryLocations([...deliveryLocations, ""]);
  const handleRemoveDelivery = (index) => {
    const newLocations = [...deliveryLocations];
    newLocations.splice(index, 1);
    setDeliveryLocations(newLocations);
  };
  const handleDeliveryChange = (index, value) => {
    const newLocations = [...deliveryLocations];
    newLocations[index] = value;
    setDeliveryLocations(newLocations);
  };


  return (
    <form className="max-w-4xl mx-auto p-4 bg-white shadow-md mt-8 rounded-lg space-y-6">
      <UserNavbar />
      <h2 className="text-xl font-semibold">Transportation Tender Submission</h2>

      {/* 1. Company Information */}
<section className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">1</span>
    Company Information
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Country Selector */}
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">Country of Business</label>
      <Select
        options={countryOptions}
        value={country}
        onChange={setCountry}
        placeholder="Select country..."
        className="react-select-container"
        classNamePrefix="react-select"
        formatOptionLabel={(countryOption) => (
          <div className="flex items-center gap-3">
            <span className={`fi fi-${countryOption.value.toLowerCase()} rounded-sm`}></span>
            {countryOption.label}
          </div>
        )}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '44px',
            borderColor: '#d1d5db',
            '&:hover': { borderColor: '#9ca3af' },
            boxShadow: 'none',
          }),
        }}
      />
    </div>

    {/* Company Name */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Registered Company Name</label>
      <input 
        type="text" 
        placeholder="Acme Corporation Ltd" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>

    {/* Registration Number */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Company Registration Number</label>
      <input 
        type="text" 
        placeholder="e.g. 2024/123456/07" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>

    {/* VAT Number */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">VAT Number</label>
      <div className="relative">
        <input 
          type="text" 
          placeholder="e.g. 4734/567/892" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>

    {/* Business Address */}
    <div className="md:col-span-2 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Head Office</label>
      <AddressAutocompleted 
        placeholder="Enter full address..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>

    {/* Years in Operation */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Number of Years in Operation</label>
      <div className="relative">
        <input 
          type="number" 
          placeholder="5" 
          min="0"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          required
        />
      </div>
    </div>

    {/* Company Website */}
<div className="space-y-1">
  <label className="block text-sm font-medium text-gray-700">Company Website</label>
  <div className="flex w-full max-w-full overflow-hidden">
    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shrink-0">
      https://
    </span>
    <input
      type="url"
      placeholder="yourcompany.com"
      className="min-w-0 w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
</div>
  </div>
</section>

      {/* 2. Contact Information */}
<section className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-custom-blue mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">2</span>
    Contact Information
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Contact Person Name */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Contact Person Name</label>
      <input 
        type="text" 
        placeholder="John Doe" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>
    
    {/* Job Title */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Job Title / Department</label>
      <input 
        type="text" 
        placeholder="e.g. General Manager" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
    
    {/* Email */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Business Email Address</label>
      <input 
        type="email" 
        placeholder="john.doe@company.com" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>
    
    {/* Primary Phone */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Business Telephone Number</label>
      <input 
        type="tel" 
        placeholder="+27 78 123 4567" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>
    
    {/* Secondary Phone */}
    <div className="space-y-1 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700">Alternative Contact Number</label>
      <span className="absolute right-3 top-2 text-xs text-gray-500">Optional</span>
      <div className="relative">
        <input 
          type="tel" 
          placeholder="Optional secondary contact number" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  </div>
</section>

{/* 3. Pick-Up and Delivery Details */}
<section className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">3</span>
    Locations
  </h3>
  
  <div className="space-y-4">
    {/* Pick-Up Location */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Location</label>
      <AddressAutocompleted 
        placeholder="Enter full address..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
    
    {/* Delivery Locations */}
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Delivery Locations</label>
      {deliveryLocations.map((loc, index) => (
        <div key={index} className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-10 sm:col-span-11">
            <input
              type="text"
              placeholder={`Delivery Location ${index + 1}`}
              value={loc}
              onChange={(e) => handleDeliveryChange(index, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <button 
              type="button" 
              onClick={() => handleRemoveDelivery(index)} 
              className="w-full px-3 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition flex items-center justify-center gap-1 whitespace-nowrap"
              title="Remove location"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="sr-only sm:not-sr-only">Remove</span>
            </button>
          </div>
        </div>
      ))}
      <button 
        type="button" 
        onClick={handleAddDelivery} 
        className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Delivery Location
      </button>
    </div>
    
    {/* Special Instructions */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Site Access Restrictions or Special Instructions</label>
      <textarea 
        placeholder="Enter any special requirements or instructions..." 
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
      />
    </div>
  </div>
</section>



      {/* 4. Cargo Description */}
<section className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">4</span>
    Cargo Description
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* Type of Goods */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Type of Goods</label>
      <input 
        type="text" 
        placeholder="e.g. Electronics, Machinery" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>

    {/* Quantity */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Quantity</label>
      <input 
        type="number" 
        placeholder="Number of units/pallets" 
        min="1"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>

    {/* Weight */}
<div className="space-y-1 overflow-x-auto">
  <label className="block text-sm font-medium text-gray-700 whitespace-nowrap">Weight</label>
  <div className="flex flex-row gap-2 flex-nowrap min-w-max">
    <input 
      type="text" 
      placeholder="Per unit (kgs)" 
      className="w-40 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
    <input 
      type="text" 
      placeholder="Total (kgs)" 
      className="w-40 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
</div>

{/* Dimensions */}
<div className="space-y-1 overflow-x-auto">
  <label className="block text-sm font-medium text-gray-700 whitespace-nowrap">Dimensions</label>
  <div className="flex flex-row items-center gap-2 flex-nowrap min-w-max">
    <input 
      type="text" 
      placeholder="L" 
      className="w-24 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-center"
    />
    <span className="text-gray-400 select-none">×</span>
    <input 
      type="text" 
      placeholder="W" 
      className="w-24 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-center"
    />
    <span className="text-gray-400 select-none">×</span>
    <input 
      type="text" 
      placeholder="H" 
      className="w-24 flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-center"
    />
  </div>
</div>



    {/* Packaging Type */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Packaging Type</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
        <option value="">Select packaging</option>
        <option>Pallets</option>
        <option>Cartons</option>
        <option>Crates</option>
        <option>Drums</option>
        <option>Loose</option>
      </select>
    </div>

    {/* Hazmat */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Hazmat Classification</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
        <option value="">Not hazardous</option>
        <option>Class 1: Explosives</option>
        <option>Class 2: Gases</option>
        <option>Class 3: Flammable Liquids</option>
        <option>Class 4: Flammable Solids</option>
      </select>
    </div>

    {/* Special Instructions */}
    <div className="md:col-span-2 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Special Handling Instructions</label>
      <textarea 
        placeholder="Fragile items, temperature control, stacking restrictions..." 
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  </div>
</section>

{/* 5. Preferred Mode of Transport */}
<section className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">5</span>
   Mode of Transport
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* Primary Transport Mode */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Primary Mode</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white">
        <option value="">Select transport mode</option>
        <option>Road (Truck)</option>
        <option>Rail</option>
        <option>Air</option>
        <option>Sea (FCL)</option>
        <option>Sea (LCL)</option>
        <option>Multimodal</option>
      </select>
    </div>

    {/* Secondary Transport Mode */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Secondary Mode</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white">
        <option value="">None</option>
        <option>Road (Truck)</option>
        <option>Rail</option>
        <option>Air</option>
        <option>Sea</option>
      </select>
    </div>

    {/* Flexibility */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Flexible on Mode?</label>
      <div className="flex gap-4 pt-2">
        <label className="inline-flex items-center">
          <input type="radio" name="flexibility" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="flexibility" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
    </div>

    {/* Vehicle Type */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Vehicle Type Required</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white">
        <option value="">Any suitable vehicle</option>
        <option>Flatbed Trailer</option>
        <option>Refrigerated Truck</option>
        <option>Container Truck</option>
        <option>Tanker</option>
        <option>Curtainsider</option>
      </select>
    </div>

    {/* Special Requirements */}
    <div className="md:col-span-2 space-y-1">
      <label className="block text-sm font-medium text-gray-700">Special Transport Requirements</label>
      <textarea 
        placeholder="Permits needed, escort vehicles, time restrictions..." 
        rows={2}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  </div>
</section>

      {/* 6. Service Requirements */}
<section className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">6</span>
    Service Requirements
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type of Service</label>
        <input 
          type="text" 
          placeholder="e.g. Express Delivery, FTL, LTL" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Frequency</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>One-off</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Project-based</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Required Transit Time</label>
        <input 
          type="text" 
          placeholder="e.g. 48 hours, 5 days" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Temperature Control</label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input type="radio" id="temp-yes" name="temperature" className="h-4 w-4 text-blue-600" />
            <label htmlFor="temp-yes" className="ml-2 text-gray-700">Yes</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="temp-no" name="temperature" className="h-4 w-4 text-blue-600" />
            <label htmlFor="temp-no" className="ml-2 text-gray-700">No</label>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Temperature range (if applicable)" 
          className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tracking & Visibility Requirements</label>
        <textarea 
          placeholder="Real-time tracking, daily reports, etc." 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Loading/Unloading Equipment</label>
        <input 
          type="text" 
          placeholder="e.g. Forklift, Crane, Pallet Jack" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Level Required</label>
        <input 
          type="text" 
          placeholder="e.g. All-risk, Total value coverage" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Customs Brokerage Needed?</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>
  </div>
</section>

{/* 7. Additional Information */}
<section className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">7</span>
    Additional Information
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bid Submission Deadline</label>
        <div className="relative">
          <input 
            type="date" 
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
          <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Quote Validity Period</label>
        <input 
          type="text" 
          placeholder="e.g. 30 days, 60 days" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Incoterms</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>Select Incoterm</option>
          <option>EXW (Ex Works)</option>
          <option>FOB (Free On Board)</option>
          <option>CIF (Cost, Insurance & Freight)</option>
          <option>DDP (Delivered Duty Paid)</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range (Optional)</label>
        <div className="flex space-x-3">
          <input 
            type="text" 
            placeholder="Min" 
            className="w-1/2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
          <input 
            type="text" 
            placeholder="Max" 
            className="w-1/2 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Contract Duration if Awarded</label>
        <input 
          type="text" 
          placeholder="e.g. 1 year, 6 months" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Evaluation Criteria</label>
        <textarea 
          placeholder="Price, Speed, Reliability, Experience, etc." 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes for Suppliers</label>
        <textarea 
          placeholder="Special requirements or instructions" 
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]" 
        />
      </div>
    </div>
  </div>
</section>

{/* 8. Upload Supporting Documents */}
<section className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">8</span>
    Upload Supporting Documents
  </h3>
  
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50">
    <div className="flex flex-col items-center justify-center">
      <FiUploadCloud className="h-12 w-12 text-gray-400 mb-3" />
      <p className="text-gray-600 mb-1">Drag & drop files here or click to browse</p>
      <p className="text-sm text-gray-500 mb-4">Supports PDF, DOC, XLS up to 20MB</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
        Select Files
      </button>
    </div>
    <input 
      type="file" 
      multiple 
      className="hidden" 
    />
  </div>
  
  <div className="mt-4 text-sm text-gray-500">
    <p>Required documents:</p>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li>Product specifications sheet</li>
      <li>Packaging requirements</li>
      <li>Previous shipping documents (if any)</li>
    </ul>
  </div>
</section>

      <button type="submit" className="btn btn-green">Submit Tender</button>
    </form>
  );
};

export default Tenders;

// Helper styles (for simplicity)
// You can replace these with Tailwind utility classes
const styles = `
.input { display: block; width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 0.375rem; }
.btn { padding: 0.5rem 1rem; border-radius: 0.375rem; }
.btn-blue { background-color: #3b82f6; color: white; }
.btn-red { background-color: #ef4444; color: white; }
.btn-green { background-color: #10b981; color: white; }
`;

// Add style tag directly if not using Tailwind
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = styles;
  document.head.appendChild(style);
}

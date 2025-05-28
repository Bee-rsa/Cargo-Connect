import { useState } from "react";
import UserNavbar from "../../components/Common/userNavbar";
import Select from "react-select";
import AddressAutocompleted from '../../components/AutoCompleted';


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
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg space-y-6">
      <UserNavbar />
      <h2 className="text-xl font-semibold">Transportation Tender Submission</h2>

      {/* 1. Company Information */}
<section className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
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
        placeholder="12345678" 
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
          placeholder="GB123 4567 89" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <span className="absolute right-3 top-3 text-gray-500">Optional</span>
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
        <span className="absolute right-3 top-3 text-gray-500">years</span>
      </div>
    </div>

    {/* Company Website */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Company Website</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          https://
        </span>
        <input
          type="url"

          placeholder="yourcompany.com"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  </div>
</section>

      {/* 2. Contact Information */}
<section className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-custom-blue mb-6 pb-3 border-b border-gray-200 flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg">2</span>
    Contact Information
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Contact Person Name */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Contact Person Name*</label>
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
        placeholder="e.g. Logistics Manager" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
    
    {/* Email */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Business Email Address*</label>
      <input 
        type="email" 
        placeholder="john.doe@company.com" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>
    
    {/* Primary Phone */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Business Telephone Number*</label>
      <input 
        type="tel" 
        placeholder="+1 (555) 123-4567" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>
    
    {/* Secondary Phone */}
    <div className="space-y-1 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700">Alternative Contact Number</label>
      <div className="relative">
        <input 
          type="tel" 
          placeholder="Optional secondary contact number" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <span className="absolute right-3 top-2 text-xs text-gray-500">Optional</span>
      </div>
    </div>
  </div>
</section>

{/* 3. Pick-Up and Delivery Details */}
<section className="bg-white p-6 rounded-lg shadow-md mb-6">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
    3. Pick-Up and Delivery Details
  </h3>
  
  <div className="space-y-4">
    {/* Pick-Up Location */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Location</label>
      <input 
        type="text" 
        placeholder="Address + Postal Code + Country" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
      />
    </div>
    
    {/* Delivery Locations */}
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Delivery Locations</label>
      {deliveryLocations.map((loc, index) => (
        <div key={index} className="flex items-center gap-3">
          <input
            type="text"
            placeholder={`Delivery Location ${index + 1}`}
            value={loc}
            onChange={(e) => handleDeliveryChange(index, e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button 
            type="button" 
            onClick={() => handleRemoveDelivery(index)} 
            className="px-3 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={handleAddDelivery} 
        className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition flex items-center gap-2"
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
      <section>
        <h3 className="text-xl font-medium mb-2">4. Cargo Description</h3>
        <input type="text" placeholder="Type of Goods" className="input" />
        <input type="number" placeholder="Quantity" className="input" />
        <input type="text" placeholder="Weight (Per Unit / Total)" className="input" />
        <input type="text" placeholder="Dimensions (L x W x H)" className="input" />
        <input type="text" placeholder="Packaging Type" className="input" />
        <textarea placeholder="Special Handling Instructions" className="input" />
        <input type="text" placeholder="Hazmat Classification (if applicable)" className="input" />
      </section>

      {/* 5. Preferred Mode of Transport */}
      <section>
        <h3 className="text-xl font-medium mb-2">5. Preferred Mode of Transport</h3>
        <select className="input">
          <option>Road</option>
          <option>Rail</option>
          <option>Air</option>
          <option>Sea</option>
          <option>Multimodal</option>
        </select>
        <input type="text" placeholder="Optional Secondary Mode" className="input" />
        <select className="input">
          <option value="">Flexibility on Transport Mode?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type="text" placeholder="Vehicle Type Required" className="input" />
      </section>

      {/* 6. Service Requirements */}
      <section>
        <h3 className="text-xl font-medium mb-2">6. Service Requirements</h3>
        <input type="text" placeholder="Type of Service" className="input" />
        <select className="input">
          <option>One-off</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Project-based</option>
        </select>
        <input type="text" placeholder="Required Transit Time" className="input" />
        <textarea placeholder="Tracking & Visibility Requirements" className="input" />
        <input type="text" placeholder="Loading/Unloading Equipment Needed" className="input" />
        <input type="text" placeholder="Insurance Level Required" className="input" />
        <input type="text" placeholder="Temperature Control (Yes/No + Range)" className="input" />
        <select className="input">
          <option value="">Customs Brokerage Needed?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </section>

      {/* 7. Additional Information */}
      <section>
        <h3 className="text-xl font-medium mb-2">7. Additional Information</h3>
        <input type="date" placeholder="Bid Submission Deadline" className="input" />
        <input type="text" placeholder="Preferred Quote Validity Period" className="input" />
        <input type="text" placeholder="Incoterms (e.g., FOB, CIF)" className="input" />
        <input type="text" placeholder="Budget Range (Optional)" className="input" />
        <input type="text" placeholder="Contract Duration if Awarded" className="input" />
        <textarea placeholder="Evaluation Criteria (e.g., Price, Speed, Reliability)" className="input" />
        <textarea placeholder="Notes for Suppliers" className="input" />
      </section>

      {/* 8. Upload Supporting Documents */}
      <section>
        <h3 className="text-xl font-medium mb-2">8. Upload Supporting Documents</h3>
        <input type="file" multiple className="input" />
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

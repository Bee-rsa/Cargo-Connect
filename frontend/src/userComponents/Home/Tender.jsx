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
  const [website, setWebsite] = useState('https://');

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
  const handleChange = (e) => {
  const value = e.target.value;
  if (!value.startsWith('https://')) return;
  setWebsite(value);
};

  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg space-y-6">
      <UserNavbar />
      <h2 className="text-xl font-semibold">Transportation Tender Submission</h2>

      {/* 1. Company Information */}
      <section>
        <h3 className="text-xl font-medium mb-2">1. Company Information</h3>
        {/* Country of Business Dropdown */}
        <div className="mt-4 mb-4">
          <Select
            options={countryOptions}
            value={country}
            onChange={setCountry}
            placeholder="Select country of Business"
            className="text-m"
            formatOptionLabel={(countryOption) => (
              <div className="flex items-center gap-2">{countryOption.label}</div>
            )}
          />
        </div>
        <input type="text" placeholder="Registered Company Name" className="input" />
        <input type="text" placeholder="Company Registration Number" className="input" />
        <input type="text" placeholder="VAT Number Optional" className="input" />
        <div className="mb-4">
        <AddressAutocompleted placeholder="Business Address (Head Office)" />
      </div>
        <input type="number" placeholder="Number of Years in Operation" className="input" />
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Company Website
      </label>
      <input
        type="url"
        className="input"
        value={website}
        onChange={handleChange}
        placeholder="Company Website"
      />
        <input type="text" placeholder="Insurance Coverage Details" className="input" />

      </section>

      {/* 2. Contact Information */}
      <section>
        <h3 className="text-xl font-medium mb-2">2. Contact Information</h3>
        <input type="text" placeholder="Contact Person Name" className="input" />
        <input type="text" placeholder="Job Title / Department" className="input" />
        <input type="email" placeholder="Business Email Address" className="input" />
        <input type="tel" placeholder="Business Telephone Number" className="input" />
        <input type="tel" placeholder="Alternative Contact Number" className="input" />
      </section>

      {/* 3. Pick-Up and Delivery Details */}
      <section>
        <h3 className="text-xl font-medium mb-2">3. Pick-Up and Delivery Details</h3>
        <input type="text" placeholder="Pick-Up Location (Address + Postal Code + Country)" className="input" />
        {deliveryLocations.map((loc, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              placeholder={`Delivery Location ${index + 1}`}
              value={loc}
              onChange={(e) => handleDeliveryChange(index, e.target.value)}
              className="input flex-1"
            />
            <button type="button" onClick={() => handleRemoveDelivery(index)} className="btn btn-red">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddDelivery} className="btn btn-blue">Add Delivery Location</button>
        <textarea placeholder="Site Access Restrictions or Special Instructions" className="input" />
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

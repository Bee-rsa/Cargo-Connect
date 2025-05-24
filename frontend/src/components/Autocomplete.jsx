import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const AddressSection = ({ onDone }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const API_KEY = 'pk.fbe44614aa16a14c9c3840516ddbd1a4';

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchAddresses = useCallback(
    debounce(async (searchText) => {
      if (!searchText) {
        setSuggestions([]);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${encodeURIComponent(searchText)}&limit=5&countrycodes=za,na,bw,zw,ls,sz,mz`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Autocomplete error:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    [API_KEY]
  );

  useEffect(() => {
    searchAddresses(query);
    return () => searchAddresses.cancel();
  }, [query, searchAddresses]);

  const handleSelect = (address) => {
    setQuery(address.display_name);
    setSelectedAddress({
      display: address.display_name,
      lat: address.lat,
      lon: address.lon,
      details: address.address
    });
    setSuggestions([]);
  };

  const handleDone = () => {
    if (selectedAddress) {
      onDone(selectedAddress);
    }
  };

  return (
    <div className="mt-4 text-gray-700">
      <h2 className="text-sm font-medium text-gray-700 mt-4 mb-2">Address</h2>
      <div className="flex items-center space-x-3 mb-3">
        <img
          src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000"
          alt="Address Icon"
          className="w-6 h-6"
        />
        <p className="text-sm text-gray-600">Enter address of collection:</p>
      </div>

      {/* Address Autocomplete Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 123 Main St, Johannesburg"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        
        {loading && <div className="absolute z-10 w-full p-2 bg-white">Loading...</div>}
        
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Show selected address if any */}
      {selectedAddress && (
        <div className="mt-2 p-2 bg-gray-50 rounded-md">
          <p className="text-sm font-medium">Selected Address:</p>
          <p className="text-sm">{selectedAddress.display}</p>
        </div>
      )}

      {/* Done Button - Only shows when address is selected */}
      {selectedAddress && (
        <button
          onClick={handleDone}
          className="mt-4 w-full bg-gradient-to-r from-blue-700 to-custom-blue text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Done
        </button>
      )}
    </div>
  );
};

AddressSection.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default AddressSection;
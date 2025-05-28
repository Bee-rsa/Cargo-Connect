import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const AddressSection = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = 'pk.fbe44614aa16a14c9c3840516ddbd1a4';

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
    setSuggestions([]);
  };

  return (
    <div className="mt-4 text-gray-700">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Business Address"
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
    </div>
  );
};

export default AddressSection;

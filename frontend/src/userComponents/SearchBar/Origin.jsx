import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const customBlue = '#2563EB'; // Tailwind custom blue

// Icon URLs
const icons = {
  world: 'https://img.icons8.com/?size=100&id=3685&format=png&color=000000',
  port: 'https://img.icons8.com/?size=100&id=WZJSvqLGKd2q&format=png&color=000000',
  warehouse: 'https://img.icons8.com/?size=100&id=20156&format=png&color=000000',
  business: 'https://img.icons8.com/?size=100&id=9166&format=png&color=000000',
  residential: 'https://img.icons8.com/?size=100&id=veP8TuXA23ip&format=png&color=000000',
};

const Origin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('originType');
  const [selectedOriginType, setSelectedOriginType] = useState(null);

  const options = [
    { label: 'Port/Airport', icon: icons.port },
    { label: 'Factory/Warehouse', icon: icons.warehouse },
    { label: 'Business Address', icon: icons.business },
    { label: 'Residential address', icon: icons.residential },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'originType':
        return (
          <>
            <p className="text-sm font-medium text-gray-700 mt-4 mb-2">Select type</p>
            <div className="flex flex-col space-y-3">
              {options.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setSelectedOriginType(label)}
                  className={`flex items-center space-x-3 py-3 px-4 rounded-md border transition-colors duration-200 text-left
                    ${
                      selectedOriginType === label
                        ? `border-[${customBlue}]`
                        : 'border-gray-300'
                    }
                    hover:border-[${customBlue}]
                  `}
                  style={{
                    borderColor: selectedOriginType === label ? customBlue : undefined,
                    cursor: 'pointer',
                    backgroundColor: 'white',
                  }}
                >
                  {/* Circle with small dot if selected */}
                  <span
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selectedOriginType === label ? customBlue : '#d1d5db', // gray-300
                    }}
                  >
                    {selectedOriginType === label && (
                      <span
                        className="rounded-full"
                        style={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: customBlue,
                        }}
                      />
                    )}
                  </span>
                  {/* Icon + Label */}
                  <span className="text-gray-700 flex gap-2 items-center space-x-2">
                    <img src={icon} alt={`${label} icon`} className="w-6 h-6" />
                    <span>{label}</span>
                  </span>
                </button>
              ))}
            </div>
            {selectedOriginType && (
              <p className="mt-3 text-sm text-gray-600">Selected: {selectedOriginType}</p>
            )}
          </>
        );
      case 'world':
        return (
          <div className="mt-4 text-gray-700 flex items-center space-x-2">
            <img
              src={icons.world}
              alt="World icon"
              className="w-6 h-6"
            />
            <p>World tab content goes here.</p>
          </div>
        );
      case 'address':
        return (
          <div className="mt-4 text-gray-700">
            <p>Please enter your address details here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen flex flex-col sm:hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-gray-800">Origin</h1>
        <button
          aria-label="Close"
          onClick={() => navigate('/user-home')}
          className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
      </div>

      {/* Subheading */}
      <p className="text-gray-600">Where are you shipping from?</p>

      {/* Breadcrumb tabs with underline */}
      <div className="relative mt-3">
        <div className="flex items-center space-x-2 pb-2">
          <button
            onClick={() => setActiveTab('originType')}
            style={{ color: activeTab === 'originType' ? customBlue : 'black' }}
            className="text-m"
          >
            Origin Type
          </button>

          <span className="text-gray-400">{'>'}</span>

          <button
            onClick={() => setActiveTab('world')}
            style={{ color: activeTab === 'world' ? customBlue : 'black' }}
            className="text-m font-medium"
            aria-label="World tab"
          >
            <img src={icons.world} alt="World icon" className="inline w-6 h-6" />
          </button>

          <span className="text-gray-400">{'>'}</span>

          <button
            onClick={() => setActiveTab('address')}
            style={{ color: activeTab === 'address' ? customBlue : 'black' }}
            className="text-m"
          >
            Address
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-auto">{renderContent()}</div>
    </div>
  );
};

Origin.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Origin;
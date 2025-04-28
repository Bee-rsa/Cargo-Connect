import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const WeightCalculator = () => {
  const [calculationType, setCalculationType] = useState('unit');
  const [packages, setPackages] = useState([
    { packageType: 'pallets', numUnits: 1, length: 0, width: 0, height: 0, weight: 0 }
  ]);
  const [selectedFreight, setSelectedFreight] = useState('air');
  const [chargeableWeight, setChargeableWeight] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [totalShipmentWeight, setTotalShipmentWeight] = useState(0);
  const [density, setDensity] = useState(0);
  const [dimWeight, setDimWeight] = useState(0);
  const [freightClass, setFreightClass] = useState('');
  const [isTotalShipment, setIsTotalShipment] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addPackage = () => {
    setPackages([...packages, { packageType: 'pallets', numUnits: 1, length: 0, width: 0, height: 0, weight: 0 }]);
  };

  const updatePackage = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value === '' ? 0 : parseFloat(value) || 0;
    setPackages(newPackages);
  };

  const deletePackage = (index) => {
    if (packages.length > 1) {
      const newPackages = packages.filter((_, i) => i !== index);
      setPackages(newPackages);
    }
  };

  const calculateChargeableWeight = () => {
    let totalWeight = 0;
    let totalVol = 0;

    packages.forEach(pkg => {
      const volumetricWeight = (pkg.length * pkg.width * pkg.height) / 
        (selectedFreight === 'ocean' ? 1000 : 
         selectedFreight === 'truck' ? 3000 : 
         selectedFreight === 'express' ? 5000 : 6000);
      const weight = parseFloat(pkg.weight);
      const chargeableWeight = Math.max(weight, volumetricWeight) * parseFloat(pkg.numUnits);
      totalWeight += chargeableWeight;

      const volume = (pkg.length * pkg.width * pkg.height) / 1000000;
      totalVol += volume * pkg.numUnits;
    });

    setChargeableWeight(totalWeight);
    setTotalVolume(totalVol);
    setTotalShipmentWeight(totalWeight);
    const calculatedDensity = totalVol > 0 ? (totalWeight / totalVol) * 1000 : 0;
    setDensity(calculatedDensity.toFixed(2));
    const dimWeightCalc = totalVol * 1000 * 1.6;
    setDimWeight(dimWeightCalc.toFixed(2));
    calculateFreightClass(calculatedDensity);
  };

  const calculateFreightClass = (density) => {
    if (density < 1) {
      setFreightClass('Class 500 (Lowest)');
    } else if (density >= 1 && density < 1.5) {
      setFreightClass('Class 400');
    } else if (density >= 1.5 && density < 2.5) {
      setFreightClass('Class 300');
    } else if (density >= 2.5 && density < 4) {
      setFreightClass('Class 200');
    } else {
      setFreightClass('Class 100 (Highest)');
    }
  };

  const calculateTotalShipment = () => {
    const calculatedDensity = totalVolume > 0 ? (totalShipmentWeight / totalVolume) * 1000 : 0;
    setDensity(calculatedDensity.toFixed(2));
    const dimWeightCalc = totalVolume * 1000 * 1.6;
    setDimWeight(dimWeightCalc.toFixed(2));
    calculateFreightClass(calculatedDensity);
  };

  const TotalShipmentCalculation = () => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="font-semibold text-lg text-gray-800 mb-4">Total Shipment Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Number of Units</label>
          <input
            type="number"
            min="1"
            value={packages[0].numUnits}
            onChange={(e) => updatePackage(0, 'numUnits', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Total Volume (CBM)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={totalVolume}
            onChange={(e) => setTotalVolume(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Total Weight (KG)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={totalShipmentWeight}
            onChange={(e) => setTotalShipmentWeight(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const PackageInputGroup = ({ index, pkg, updatePackage, deletePackage }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-800">Package {index + 1}</h3>
        {packages.length > 1 && (
          <button
            onClick={() => deletePackage(index)}
            className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-2">Package Type</label>
          <div className="grid grid-cols-2 gap-3">
            {['pallets', 'crates'].map((type) => (
              <button
                key={type}
                onClick={() => updatePackage(index, 'packageType', type)}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  pkg.packageType === type
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Units</label>
          <input
            type="number"
            min="1"
            value={pkg.numUnits}
            onChange={(e) => updatePackage(index, 'numUnits', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Weight (kg)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={pkg.weight}
            onChange={(e) => updatePackage(index, 'weight', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">Dimensions (cm)</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="number"
                min="0"
                placeholder="Length"
                value={pkg.length}
                onChange={(e) => updatePackage(index, 'length', e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                min="0"
                placeholder="Width"
                value={pkg.width}
                onChange={(e) => updatePackage(index, 'width', e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                min="0"
                placeholder="Height"
                value={pkg.height}
                onChange={(e) => updatePackage(index, 'height', e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CalculationResults = () => (
    <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-100">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Calculation Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Volume</div>
          <div className="text-2xl font-bold text-blue-600">{totalVolume.toFixed(2)} <span className="text-sm font-normal">CBM</span></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Weight</div>
          <div className="text-2xl font-bold text-blue-600">{totalShipmentWeight.toFixed(2)} <span className="text-sm font-normal">KG</span></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm font-medium text-gray-500">Density</div>
          <div className="text-2xl font-bold text-blue-600">{density} <span className="text-sm font-normal">PCF</span></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm font-medium text-gray-500">DIM Weight</div>
          <div className="text-2xl font-bold text-blue-600">{dimWeight} <span className="text-sm font-normal">KG</span></div>
        </div>
        <div className="col-span-full bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm font-medium text-gray-500">Freight Class</div>
          <div className="text-2xl font-bold text-blue-700">{freightClass}</div>
        </div>
      </div>
    </div>
  );

  const FreightInformation = () => (
    <div className="space-y-6 text-gray-700">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-2">Freight Calculation Guide</h2>
        <p className="opacity-90">Understand how shipping costs are calculated and optimize your shipments</p>
      </div>
      
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Why Use Our Calculator?
        </h3>
        <p className="text-gray-600">
          Shipping companies charge based on either actual weight or dimensional (volumetric) weight, whichever is greater. 
          Our calculator helps you determine the chargeable weight to avoid unexpected costs.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          How to Calculate Chargeable Weight
        </h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600">
          <li>Input your shipment details (dimensions and weight)</li>
          <li>Select calculation method (by unit or total shipment)</li>
          <li>Choose your freight type (air, ocean, truck, or courier)</li>
          <li>Review the calculated chargeable weight and freight class</li>
        </ol>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Understanding Volumetric Weight
        </h3>
        <p className="text-gray-600 mb-3">
          Dimensional Weight is calculated by dividing the volume of your shipment by a predefined dimensional factor:
        </p>
        <div className="bg-blue-50 p-3 rounded-lg mb-3">
          <code className="text-sm font-mono text-blue-800">
            Volumetric Weight = (Length × Width × Height) / Dimensional Factor
          </code>
        </div>
        <p className="text-gray-600">
          Chargeable Weight is the higher of the actual weight and dimensional weight.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Cost-Saving Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Avoid over-packaging lightweight freight</li>
          <li>Use the smallest possible carton sizes that safely contain your products</li>
          <li>Compress products when possible to minimize space</li>
          <li>Consider negotiating the dimensional factor with your carrier</li>
          <li>Consolidate multiple small packages into larger shipments</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 mt-0 mb-8 font-poppins">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-8">
        {/* Calculator Form Column */}
        <div className="w-full p-6 border border-gray-200 rounded-2xl bg-white shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Chargeable Weight Calculator
            </h1>
            <p className="text-gray-500">Calculate your shipment&apos;s volumetric weight and freight class</p>
          </div>

          {/* Calculation Type Selection */}
          <div className="mb-6 bg-gray-50 p-5 rounded-xl border border-gray-100">
            <label className="block mb-3 font-semibold text-gray-700">Calculation Method:</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'byUnitType', label: 'By Unit Type', value: 'unit', icon: '📦' },
                { id: 'byShipment', label: 'Total Shipment', value: 'shipment', icon: '🚚' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setCalculationType(option.value);
                    setIsTotalShipment(option.value === 'shipment');
                  }}
                  className={`p-3 rounded-xl border transition-all ${
                    calculationType === option.value
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <span className="text-lg mr-2">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Package Inputs */}
          {isTotalShipment ? (
            <TotalShipmentCalculation />
          ) : (
            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <PackageInputGroup
                  key={index}
                  index={index}
                  pkg={pkg}
                  updatePackage={updatePackage}
                  deletePackage={deletePackage}
                />
              ))}
              <button
                onClick={addPackage}
                className="w-full py-3 text-blue-600 hover:text-blue-800 font-medium border-2 border-dashed border-blue-300 rounded-xl hover:border-blue-400 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Another Package
              </button>
            </div>
          )}

          {/* Freight Type Selection */}
          <div className="mt-6 bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Freight Type</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Ocean LCL', value: 'ocean', ratio: '1:1000', icon: '🛳️' },
                { label: 'Truck LTL', value: 'truck', ratio: '1:3000', icon: '🚛' },
                { label: 'Courier', value: 'express', ratio: '1:5000', icon: '📦' },
                { label: 'Air Freight', value: 'air', ratio: '1:6000', icon: '✈️' }
              ].map((freight) => (
                <button
                  key={freight.value}
                  onClick={() => setSelectedFreight(freight.value)}
                  className={`p-3 rounded-xl border transition-all ${
                    selectedFreight === freight.value
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <div className="text-lg mb-1">{freight.icon}</div>
                  <div className="text-sm font-medium">{freight.label}</div>
                  <div className="text-xs opacity-80">{freight.ratio}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={isTotalShipment ? calculateTotalShipment : calculateChargeableWeight}
            className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 font-semibold shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {isTotalShipment ? 'Calculate Shipment' : 'Calculate Chargeable Weight'}
          </button>

          {/* Results Display */}
          {chargeableWeight > 0 && <CalculationResults />}
        </div>

        {/* Information Column */}
        <div className="w-full">
          <FreightInformation />
        </div>
      </div>
    </div>
  );
};

  // Add propTypes validation
  WeightCalculator.propTypes = {
    index: PropTypes.number.isRequired,
    pkg: PropTypes.shape({
      packageType: PropTypes.oneOf(['pallets', 'crates']).isRequired,
      numUnits: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
    updatePackage: PropTypes.func.isRequired,
    deletePackage: PropTypes.func.isRequired
  };

export default WeightCalculator;
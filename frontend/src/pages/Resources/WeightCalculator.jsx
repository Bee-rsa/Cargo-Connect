import { useEffect, useState } from 'react';

const WeightCalculator = () => {
  const [calculationType, setCalculationType] = useState('unit');
  const [packages, setPackages] = useState([
    { packageType: 'pallets', numUnits: 0, length: 0, width: 0, height: 0, weight: 0 }
  ]);
  const [selectedFreight, setSelectedFreight] = useState('');
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
    setPackages([...packages, { packageType: 'pallets', numUnits: 0, length: 0, width: 0, height: 0, weight: 0 }]);
  };

  const updatePackage = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value;
    setPackages(newPackages);
  };

  const deletePackage = (index) => {
    const newPackages = packages.filter((_, i) => i !== index);
    setPackages(newPackages);
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
    const calculatedDensity = (totalWeight / totalVol) * 1000;
    setDensity(calculatedDensity.toFixed(2));
    const dimWeightCalc = totalVol * 1000 * 1.6;
    setDimWeight(dimWeightCalc.toFixed(2));
    calculateFreightClass(calculatedDensity);

    alert(`Total Chargeable Weight: ${totalWeight.toFixed(2)} kg`);
  };

  const calculateFreightClass = (density) => {
    if (density < 1) {
      setFreightClass('Class 1');
    } else if (density >= 1 && density < 1.5) {
      setFreightClass('Class 2');
    } else if (density >= 1.5 && density < 2.5) {
      setFreightClass('Class 3');
    } else if (density >= 2.5 && density < 4) {
      setFreightClass('Class 4');
    } else {
      setFreightClass('Class 5');
    }
  };

  const calculateTotalShipment = () => {
    const calculatedDensity = (totalShipmentWeight / totalVolume) * 1000;
    setDensity(calculatedDensity.toFixed(2));
    const dimWeightCalc = totalVolume * 1000 * 1.6;
    setDimWeight(dimWeightCalc.toFixed(2));
    calculateFreightClass(calculatedDensity);
  };

  const TotalShipmentCalculation = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-medium text-gray-700 mb-4">Total Shipment Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
          <input
            type="number"
            value={packages[0].numUnits}
            onChange={(e) => updatePackage(0, 'numUnits', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Volume (CBM)</label>
          <input
            type="number"
            value={totalVolume}
            onChange={(e) => setTotalVolume(parseFloat(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Weight (KG)</label>
          <input
            type="number"
            value={totalShipmentWeight}
            onChange={(e) => setTotalShipmentWeight(parseFloat(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );

  const PackageInputGroup = ({ index, pkg, updatePackage, deletePackage }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium text-gray-700">Package {index + 1}</h3>
        <button
          onClick={() => deletePackage(index)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
          <div className="grid grid-cols-2 gap-2">
            {['pallets', 'crates'].map((type) => (
              <button
                key={type}
                onClick={() => updatePackage(index, 'packageType', type)}
                className={`p-2 rounded-md text-sm ${
                  pkg.packageType === type
                    ? 'bg-custom-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
          <input
            type="number"
            value={pkg.numUnits}
            onChange={(e) => updatePackage(index, 'numUnits', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={pkg.weight}
            onChange={(e) => updatePackage(index, 'weight', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (cm)</label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              placeholder="Length"
              value={pkg.length}
              onChange={(e) => updatePackage(index, 'length', e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Width"
              value={pkg.width}
              onChange={(e) => updatePackage(index, 'width', e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Height"
              value={pkg.height}
              onChange={(e) => updatePackage(index, 'height', e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const CalculationResults = () => (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-blue-200">
      <h2 className="text-xl font-semibold mb-4 text-custom-blue">Calculation Results</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Total Volume (CBM):</div>
          <div className="text-lg font-semibold">{totalVolume.toFixed(2)}</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Total Weight (KG):</div>
          <div className="text-lg font-semibold">{totalShipmentWeight.toFixed(2)}</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Density (PCF):</div>
          <div className="text-lg font-semibold">{density}</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">DIM Weight:</div>
          <div className="text-lg font-semibold">{dimWeight}</div>
        </div>
        <div className="col-span-2">
          <div className="text-sm font-medium">Freight Class:</div>
          <div className="text-lg font-semibold text-blue-700">{freightClass}</div>
        </div>
      </div>
    </div>
  );

  const FreightInformation = () => (
    <div className="space-y-6 text-gray-700">
      <h2 className="text-2xl font-bold">Freight Calculation Guide</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Why Use Our Calculator?</h3>
        <p className="mb-4">
          Shipping companies often charge based on the greater of either actual weight or dimensional (volumetric) weight.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">How to Calculate Chargeable Weight</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Input Shipment Volume and Weight</li>
          <li>Select calculation method (by unit or total shipment)</li>
          <li>Choose your freight type</li>
          <li>Review Chargeable Weight results</li>
        </ol>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Understanding Volumetric Weight</h3>
        <p className="mb-2">
          Dimensional Weight is calculated by dividing the volume of your shipment by a predefined dim factor.
        </p>
        <p>
          Chargeable Weight is the higher of the actual weight and dimensional weight.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Cost-Saving Tips</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Avoid over-packaging lightweight freight</li>
          <li>Use the smallest possible carton sizes</li>
          <li>Compress products to minimize space</li>
          <li>Consider negotiating the dim factor with your carrier</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Example Calculation</h3>
        <p className="mb-2">
          Package: 50cm × 40cm × 30cm, weight: 10kg
        </p>
        <p className="mb-2">
          Volumetric Weight = (50 × 40 × 30) / 6000 = 10kg
        </p>
        <p>
          Chargeable Weight = max(10, 10) = 10kg
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center bg-white mt-8 mb-8 font-poppins">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-8">
        {/* Calculator Form Column */}
        <div className="w-full p-4 sm:p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Chargeable Weight Calculator</h1>

          {/* Calculation Type Selection */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
            <label className="block mb-3 font-semibold text-gray-700">Calculation Method:</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'byUnitType', label: 'By Unit Type', value: 'unit' },
                { id: 'byShipment', label: 'Total Shipment', value: 'shipment' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setCalculationType(option.value);
                    setIsTotalShipment(option.value === 'shipment');
                  }}
                  className={`p-2 rounded-md border ${
                    calculationType === option.value
                      ? 'bg-custom-blue text-white border-custom-blue'
                      : 'bg-white border-gray-300 hover:border-custom-blue'
                  }`}
                >
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
                className="w-full py-2 text-custom-blue hover:text-custom-blue font-medium border border-dashed border-custom-blue rounded-lg"
              >
                + Add Another Package
              </button>
            </div>
          )}

          {/* Freight Type Selection */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-black">Freight Type</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Ocean LCL', value: 'ocean', ratio: '1:1000' },
                { label: 'Truck LTL', value: 'truck', ratio: '1:3000' },
                { label: 'Courier', value: 'express', ratio: '1:5000' },
                { label: 'Air Freight', value: 'air', ratio: '1:6000' }
              ].map((freight) => (
                <button
                  key={freight.value}
                  onClick={() => setSelectedFreight(freight.value)}
                  className={`p-2 rounded-md border ${
                    selectedFreight === freight.value
                      ? 'bg-custom-blue text-white border-custom-blue'
                      : 'bg-white border-white hover:border-custom-blue'
                  }`}
                >
                  <div className="text-m font-medium">{freight.label}</div>
                  <div className="text-sm text-black">{freight.ratio}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={isTotalShipment ? calculateTotalShipment : calculateChargeableWeight}
            className="w-full mt-6 px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-custom-blue font-semibold shadow-md"
          >
            {isTotalShipment ? 'Calculate Shipment' : 'Calculate Chargeable Weight'}
          </button>

          {/* Results Display */}
          {chargeableWeight > 0 && <CalculationResults />}
        </div>

        {/* Information Column */}
        <div className="w-full p-4 sm:p-6 bg-gray-50 rounded-lg">
          <FreightInformation />
        </div>
      </div>
    </div>
  );
};

export default WeightCalculator;
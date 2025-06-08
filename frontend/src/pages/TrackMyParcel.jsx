import { useState } from 'react';
import Header from '../components/Common/userNavbar';

const TrackMyOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackOrder = async () => {
    setIsTracking(true);
    if (orderNumber === 'S25') {
      setOrderStatus({
        status: 'Active',
        departure: 'Durban',
        destination: 'Los Angeles',
        commodities: 'Box, 0.15 ㎥, 40.0 kg',
        logisticsProvider: 'Primorus Worldwide',
        email: 'jkadish@primorusworldwide.com',
        shipmentNumber: '#S241114004868',
        bookingPlaced: 'Nov 14, 2025 6:19 PM',
      });
    } else {
      setOrderStatus(null);
    }
    setIsTracking(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <Header />
      <div className="container mx-auto p-4 pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center font-poppins text-gray-800 mb-6">Track My Order</h1>

        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Enter Shipment Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="p-4 w-full sm:w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleTrackOrder}
            disabled={isTracking}
            className={`px-6 py-4 ${isTracking ? 'bg-blue-950' : 'bg-custom-blue'} text-white rounded-md transition-all duration-200 transform hover:scale-105 ${isTracking ? 'cursor-not-allowed' : 'hover:bg-custom-blue'}`}
          >
            {isTracking ? 'Tracking...' : 'Track'}
          </button>
        </div>

        {orderStatus && (
          <div className="bg-white border border-gray-300 p-6 sm:p-10 rounded-xl shadow-md max-w-4xl mx-auto mt-8 font-mono">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">Order Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
              <div><span className="font-semibold">Status:</span> {orderStatus.status}</div>
              <div><span className="font-semibold">Port Departure:</span> {orderStatus.departure}</div>
              <div><span className="font-semibold">Destination:</span> {orderStatus.destination}</div>
              <div><span className="font-semibold">Commodities:</span> {orderStatus.commodities}</div>
              <div><span className="font-semibold">Logistics Provider:</span> {orderStatus.logisticsProvider}</div>
              <div className="break-words overflow-auto">
                <span className="font-semibold">Seller Email:</span> {orderStatus.email}
              </div>
              <div><span className="font-semibold">Booking Placed:</span> {orderStatus.bookingPlaced}</div>
            </div>

            <div className="mt-6 text-sm sm:text-base">
              <span className="font-semibold">Shipment Number:</span> {orderStatus.shipmentNumber}
            </div>
          </div>
        )}

        {!orderStatus && orderNumber && (
          <div className="text-center text-red-600 mt-4 font-semibold">
            Order not found. Please check your shipment number.
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackMyOrder;

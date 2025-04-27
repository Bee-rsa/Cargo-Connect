import { Link } from 'react-router-dom';
import rightImage from '../../assets/705-removebg-preview.png';

const Hero = () => {
  return (
    <div className="bg-custom-blue text-white font-poppins -mt-8 min-h-screen px-4 pt-12 flex flex-col">
      {/* Main Header */}
      <div className="text-left md:text-center mb-8">
        <h1 className="text-3xl md:text-6xl mt-16 text-custom-sage font-bold">
          Re-imagine How You Move Your Cargo!
        </h1>
      </div>

      {/* Content Below Header: Split in Two Halves */}
      <div className="max-w-screen-xl -mt-12 w-full mx-auto flex flex-col md:flex-row items-center flex-1 justify-between gap-4">
        {/* Text Section */}
        <div className="flex-1 text-left px-4 -mt-24 md:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 whitespace-nowrap">
        Need To Make A Delivery? Think Cargo Connect.
      </h2>


          <p className="text-base md:text-xl text-white mb-8 max-w-xl">
            Get instant quotes, book easily, and track shipments in real time — all in one place. 
            Reliable carriers, competitive rates, and a
            smooth experience every step of the way.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#">
              <button className="bg-white text-custom-blue py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition w-full sm:w-auto">
                Compare Instant Rates
              </button>
            </Link>
            <Link to="#">
              <button className="bg-custom-sage text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition w-full sm:w-auto">
                Business Solutions
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0 px-0 pr-12 hidden md:block">
          <img
            src={rightImage}
            alt="Freight Solutions"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { Link } from 'react-router-dom';
import rightImage from '../../assets/705-removebg-preview.png';

const Hero = () => {
  return (
    <div className="bg-custom-blue text-white font-poppins -mt-8 min-h-[120vh] md:min-h-screen px-4 pt-12 pb-16 flex flex-col overflow-x-hidden">
      {/* Main Header */}
      <div className="text-left md:text-center mb-4 md:mb-8">
        <h1 className="text-3xl md:text-6xl mt-8 md:mt-16 text-custom-sage font-bold px-2">
          Re-imagine How You Move Your Cargo!
        </h1>
      </div>

      {/* Mobile Image - Half in/half out effect */}
      <div className="md:hidden w-full -mt-8 relative -mx-4 mb-6">
      <div className="w-[100%] -translate-x-1/4">
          <img
            src={rightImage}
            alt="Freight Solutions"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row items-center flex-1 justify-between gap-4">
        {/* Text Section */}
        <div className="flex-1 text-left px-4 md:-mt-24 md:px-12 sm:-mt-24">
        <h2 className="text-2xl md:text-3xl sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
  Need To Make A Delivery? <span className="text-custom-sage">Think Cargo Connect.</span>
</h2>


          <p className="text-white text-base md:text-xl mb-6 sm:mb-8 max-w-xl">
  Get instant quotes, book easily, and track shipments in real time — all in one place. 
  Reliable carriers, competitive rates, and a smooth experience every step of the way.
</p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
            <Link to="Login" className="w-full">
              <button className="bg-white text-custom-blue py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition w-full">
                Compare Instant Rates
              </button>
            </Link>
            <Link to="/operator-login-page" className="w-full">
              <button className="bg-custom-sage text-white py-3 px-6 rounded-lg shadow hover:bg-yellow-600 transition w-full">
                Business Solutions
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Image Section */}
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
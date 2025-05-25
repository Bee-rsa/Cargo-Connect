import { Link } from "react-router-dom";
import UserNavbar from "../../components/Common/userNavbar";
import { FiCheckCircle, FiClipboard, FiDollarSign, FiUsers, FiCalendar, FiPackage } from "react-icons/fi";

const TenderPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000042] to-[#163C5E] text-white pb-20">
      <UserNavbar />

      <div className="max-w-6xl mx-auto px-4 pt-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              Smart Freight Tendering
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your logistics procurement with competitive, AI-optimized bids from our verified network of 850+ carriers
          </p>
          
          <Link to="/submit-tender">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 flex items-center mx-auto">
              <FiClipboard className="mr-3 w-6 h-6" />
              Create New Tender
            </button>
          </Link>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <FiDollarSign className="w-12 h-12 text-blue-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Cost Efficiency</h3>
            <p className="text-blue-100 leading-relaxed">
              Receive competitive quotes from pre-vetted logistics partners, ensuring best market rates
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <FiUsers className="w-12 h-12 text-blue-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Trusted Network</h3>
            <p className="text-blue-100 leading-relaxed">
              Access 850+ verified carriers with performance ratings and service history
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <FiCalendar className="w-12 h-12 text-blue-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Time Savings</h3>
            <p className="text-blue-100 leading-relaxed">
              Automated bid management and comparison tools to accelerate decision making
            </p>
          </div>
        </div>

        {/* Process Section */}
        <section className="bg-white rounded-2xl shadow-2xl p-10 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {['1. Submit Tender', '2. Receive Bids', '3. Compare Offers', '4. Select Partner'].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{step}</h3>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <FiCheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Tender Details</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Multi-modal transportation options</li>
                    <li>Real-time capacity availability</li>
                    <li>Customizable service level agreements</li>
                    <li>Automated compliance checks</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FiPackage className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Cargo Matching</h3>
                  <p className="text-gray-600">
                    Our AI-powered system analyzes your requirements and matches you with the most suitable carriers
                    based on equipment availability, historical performance, and cost efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">48h</div>
              <div className="text-blue-200">Average Response Time</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">15%</div>
              <div className="text-blue-200">Average Cost Savings</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">On-Time Delivery Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderPage;
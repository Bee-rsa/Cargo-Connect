import { Link } from 'react-router-dom';
import MessageNav from './MessageNav'; // adjust path if needed
import { FiSearch } from 'react-icons/fi'; // for search icon

const TextInformation = () => {
  return (
    <div className="fixed inset-0 bg-custom-blue -z-10 pb-16"> {/* padding bottom for nav */}
      {/* Top header with app name and close button */}
      <div className="flex justify-between items-center px-4 mt-4">
        <div className="text-3xl text-white font-extrabold tracking-tight">
          <Link to="/user-home">Cargo Connect</Link>
        </div>
        <Link
          to="/user-home"
          className="text-white text-2xl font-bold hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          ×
        </Link>
      </div>

      {/* Main content card */}
      <div className="max-w-md mt-12 mx-auto p-6 bg-white font-poppins rounded-lg shadow-lg relative z-10 mx-4 sm:mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Hi there. How can we help?
        </h1>

        <div className="space-y-4">
          {/* Send Message Section */}
          <div>
            <Link to="/message-chat" className="block">
              <button className="w-full bg-white text-gray-800 border border-gray-300 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block">Send us a message</span>
                    <p className="text-sm font-normal text-gray-500 mt-1">
                      We typically reply in a few minutes
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-custom-blue ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          {/* Help Center with Search Icon */}
          <div>
            <Link to="/help-center" className="block">
              <button className="w-full bg-white text-gray-800 border border-gray-300 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <FiSearch className="w-5 h-5 text-custom-blue" />
                  <span>Search for help</span>
                </span>
                <svg
                  className="w-5 h-5 text-custom-blue ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tasks container with custom-blue progress bar */}
      <div className="max-w-md mt-6 mx-auto p-6 bg-white font-poppins rounded-lg shadow-lg relative z-10 mx-4 sm:mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-custom-blue h-4 rounded-full"
            style={{ width: '65%' }} // example progress 65%
          ></div>
        </div>
        <p className="mt-2 text-gray-600 text-sm">65% tasks completed</p>
      </div>

      {/* Bottom mobile nav */}
      <MessageNav />
    </div>
  );
};

export default TextInformation;

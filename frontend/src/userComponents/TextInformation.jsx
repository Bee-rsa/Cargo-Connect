import { Link } from 'react-router-dom';
import MessageNav from './MessageNav'; // adjust path if needed
import { FiSearch } from 'react-icons/fi'; // for search icon

const TextInformation = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 -z-10 pb-2">
      {/* Top header with app name and close button */}
      <div className="flex justify-between items-center px-4 mt-4">
        <div className="text-3xl text-custom-blue font-extrabold tracking-tight">
          <Link to="/user-home">Cargo Connect</Link>
        </div>
        <Link
          to="/user-home"
          className="text-custom-blue text-2xl font-bold hover:text-custom-blue transition-colors"
          aria-label="Close"
        >
          ×
        </Link>
      </div>

      {/* Main content card */}
      <div className="max-w-md mt-4 mx-auto p-6 font-poppins relative z-10 sm:mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-left">
  Hi there. How can we help?
</h1>
<p className="text-sm text-gray-600 mb-8 text-left">
  You&apos;re on the Help Center page — reach out to us with any queries, questions, or concerns.
</p>


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

          {/* Help Center with Search Icon (no arrow) */}
          <div>
            <Link to="/help-center" className="block">
              <button className="w-full bg-white text-gray-800 border border-gray-300 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
  <div className="flex items-center justify-between w-full">
    <span>Search for help</span>
    <FiSearch className="w-5 h-5 text-custom-blue ml-2" />
  </div>
</button>

            </Link>
          </div>
        </div>
      </div>

      {/* Tasks button with progress bar */}
      <div className="max-w-md -mt-2 mx-auto p-6 font-poppins relative z-10 sm:mx-auto">
        <Link to="/tasks" className="block">
          <button className="w-full bg-white text-gray-800 border border-gray-300 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks Progress</h2>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-custom-blue h-4 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
              <p className="mt-2 text-gray-600 text-sm">65% tasks completed</p>
            </div>
          </button>
        </Link>
      </div>

      {/* Bottom mobile nav */}
      <MessageNav />
    </div>
  );
};

export default TextInformation;

import { Link } from 'react-router-dom';

const TextInformation = () => {
  return (
    <div className="fixed inset-0 bg-custom-blue -z-10">
      {/* Top header with app name and close button */}
      <div className="flex justify-between items-center px-8 mt-8">
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
     <div className="max-w-md mt-24 mx-auto p-6 bg-white font-poppins rounded-lg shadow-lg relative z-10 mx-4 sm:mx-auto">

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

          {/* Help Center Section */}
          <div>
            <Link to="/help-center" className="block">
              <button className="w-full bg-white text-gray-800 border border-gray-300 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
                <div className="flex items-center justify-between">
                  <span>Help Center</span>
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
        </div>
      </div>
    </div>
  );
};

export default TextInformation;
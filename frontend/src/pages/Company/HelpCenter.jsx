import React, { useState } from 'react';
import { 
  FaSearch, 
  FaShippingFast, 
  FaMoneyBillWave, 
  FaUserShield, 
  FaMobileAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaPhone,
  FaComments
} from 'react-icons/fa';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const toggleFaq = (index) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <FaShippingFast className="text-blue-500 text-2xl" />,
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click on "Sign Up" in the top right corner, fill in your details, verify your email, and you\'re ready to start using Cargo Connect.'
        },
        {
          question: 'What information do I need to register?',
          answer: 'You\'ll need your full name, email address, phone number, and business details if you\'re registering as a logistics provider.'
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes, Cargo Connect is available on both iOS and Android platforms. Download it from the App Store or Google Play Store.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Pricing',
      icon: <FaMoneyBillWave className="text-green-500 text-2xl" />,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and mobile payment solutions like M-Pesa and PayPal.'
        },
        {
          question: 'How are prices calculated?',
          answer: 'Prices are based on distance, cargo weight/dimensions, service type, and market rates. Our calculator provides instant estimates.'
        },
        {
          question: 'When will I get paid as a logistics provider?',
          answer: 'Payments are processed every Friday for completed shipments, with a 2-day clearing period.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Security',
      icon: <FaUserShield className="text-purple-500 text-2xl" />,
      questions: [
        {
          question: 'How do I reset my password?',
          answer: 'Go to the login page, click "Forgot Password", enter your email, and follow the instructions sent to your inbox.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely. We use bank-level encryption and never store your full payment details on our servers.'
        },
        {
          question: 'How do I update my profile information?',
          answer: 'Navigate to "My Account" > "Profile Settings" where you can edit your personal and business details.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <FaQuestionCircle className="text-orange-500 text-2xl" />,
      questions: [
        {
          question: 'What should I do if my shipment is delayed?',
          answer: 'First check real-time tracking. If issues persist, contact the logistics provider directly through the platform or our support team.'
        },
        {
          question: 'Why can\'t I see any available logistics providers?',
          answer: 'This could be due to your location, timing, or cargo requirements. Try adjusting your filters or contact support for assistance.'
        },
        {
          question: 'The app keeps crashing. What should I do?',
          answer: 'Try updating to the latest version, clearing cache, or reinstalling the app. If problems continue, report the issue to our tech team.'
        }
      ]
    }
  ];

  const allFaqs = categories.flatMap(category => 
    category.questions.map(q => ({
      ...q,
      category: category.title,
      categoryId: category.id
    }))
  );

  const filteredFaqs = searchQuery 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full py-4 px-6 pr-12 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-6 top-4 text-gray-400 text-xl" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {searchQuery ? (
          // Search Results View
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Search results for "{searchQuery}" ({filteredFaqs.length} found)
            </h2>
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-6 text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-2 text-gray-800">{faq.question}</h3>
                      </div>
                      {expandedFaqs.includes(index) ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>
                    {expandedFaqs.includes(index) && (
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-600 mb-4">
                    No results found for "{searchQuery}"
                  </h3>
                  <p className="text-gray-500">
                    Try different keywords or browse our categories below
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Category View
          <>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Browse by category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${activeCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3 text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {category.questions.length} articles about {category.title.toLowerCase()}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    View all
                    <FaChevronDown className="ml-2" />
                  </div>
                </div>
              ))}
            </div>

            {activeCategory && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  {categories.find(c => c.id === activeCategory)?.title} FAQs
                </h2>
                <div className="space-y-4">
                  {categories
                    .find(c => c.id === activeCategory)
                    ?.questions.map((faq, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center p-6 text-left"
                          onClick={() => toggleFaq(index)}
                        >
                          <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                          {expandedFaqs.includes(index) ? (
                            <FaChevronUp className="text-gray-500" />
                          ) : (
                            <FaChevronDown className="text-gray-500" />
                          )}
                        </button>
                        {expandedFaqs.includes(index) && (
                          <div className="px-6 pb-6 text-gray-600">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Popular articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'How to track my shipment in real-time',
              'Understanding pricing and additional fees',
              'Cancellation policy and refund process'
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-800 mb-3">{article}</h3>
                <p className="text-gray-600 mb-4">
                  {article.includes('track') 
                    ? 'Learn how to monitor your cargo every step of the way'
                    : article.includes('pricing')
                    ? 'Detailed breakdown of how we calculate shipping costs'
                    : 'Our policies for canceling shipments and getting refunds'}
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center">
                  Read article
                  <FaChevronDown className="ml-2 transform rotate-90" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-700 text-white p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="mb-6">
                Our support team is available 24/7 to assist you with any questions or issues you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email us</h3>
                    <p>support@cargoconnect.com</p>
                    <p className="text-sm text-blue-200">Typically responds within 1 hour</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Call us</h3>
                    <p>+27 12 345 6789</p>
                    <p className="text-sm text-blue-200">24/7 customer support line</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaComments className="text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Live chat</h3>
                    <p>Available in the mobile app</p>
                    <p className="text-sm text-blue-200">Instant messaging with our team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Select a topic</option>
                    <option>Account issues</option>
                    <option>Payment questions</option>
                    <option>Shipment problems</option>
                    <option>Technical support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your issue in detail..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
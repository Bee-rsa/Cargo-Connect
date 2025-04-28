import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Layout/Hero";
import LogisticsFuture from "../components/Products/LogisticsFuture";
import HowItWorks from "../components/Products/HowItWorks";

import image1 from "../assets/Screenshot_20241012_144049_Chrome.jpg";
import image2 from "../assets/Screenshot_20241012_144052_Chrome.jpg";
import image3 from "../assets/Screenshot_20241012_145904_Chrome.jpg";
import newsletterImage from '../assets/fun-delivery-concept-with-variety-elements.png'; // Newsletter image

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Freight: Trends to Watch",
      description:
        "Discover the latest trends shaping the future of freight logistics and how they can impact your business.",
      link: "/blog/future-of-freight",
      image: image1,
    },
    {
      id: 2,
      title: "How to Choose the Right Carrier for your business",
      description:
        "Learn how to select the best carrier for your shipping needs and optimize your logistics strategy.",
      link: "/blog/choose-the-right-carrier",
      image: image2,
    },
    {
      id: 3,
      title: "The Importance of Real-Time Tracking",
      description:
        "Explore the benefits of real-time tracking in freight shipping and how it enhances customer satisfaction.",
      link: "/blog/importance-of-real-time-tracking",
      image: image3,
    },
  ];

  const faqData = [
    {
      question: "What is Cargo Connect?",
      answer:
        "Cargo Connect is a platform designed to simplify your logistics needs by providing easy access to multiple carriers, instant quotes, and real-time shipment tracking.",
    },
    {
      question: "How will Cargo Connect help my business?",
      answer:
        "Cargo Connect helps streamline your shipping process by allowing you to compare rates, manage shipments, and track deliveries all in one place, making logistics hassle-free for your business.",
    },
    {
      question: "How do I register and sign up?",
      answer:
        'To sign up, click on "Sign In" in the top right corner and select "Register." Complete the required fields and create your account to start using Freight iT.',
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        'If you forgot your password, go to the "Sign In" page and click on "Forgot Password." Follow the instructions to reset it.',
    },
    {
      question: "How do I update my profile information?",
      answer:
        'To update your profile, sign in and go to "My Account." From there, you can update your contact details, preferences, and other account information.',
    },
    {
      question: "How can I access my booking history?",
      answer:
        'After signing in, go to "My Bookings" to view your past shipments, track current ones, and see details for each booking.',
    },
    {
      question: "Can I manage multiple users under one account?",
      answer:
        "Yes, Cargo Connect offers options for businesses to manage multiple users under one account. Please contact our support team for assistance in setting this up.",
    },
  ];

  return (
    <div>
      <Hero />
      <HowItWorks />
      <LogisticsFuture />

      {/* Blog Section */}
      <div className="px-6 py-10">
        <h2 className="text-4xl text-custom-blue font-bold mb-6 text-left p-4 font-poppins">
          Latest News & Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-poppins">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4 flex-grow font-poppins">
                {post.description}
              </p>
              <Link
                to={post.link}
                className="text-custom-sage font-semibold hover:underline font-poppins mt-auto"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 mb-16 px-6 md:px-12 py-6 md:py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Image (visible only on larger screens) */}
      <div className="flex-1 hidden md:block">
        <img
          src={newsletterImage}
          alt="Newsletter"
          className="max-w-[500px] max-h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Right Text and Form */}
<div className="w-full max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
  <h2 className="text-xl sm:text-2xl md:text-5xl font-poppins mb-4 sm:mb-6 text-gray-900 tracking-tight">
    Subscribe to Our Newsletter
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 font-poppins leading-relaxed">
    Get exclusive insights, industry trends, and Cargo Connect updates delivered straight to your inbox.
  </p>
  <form 
    onSubmit={handleSubscribe} 
    className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg"
  >
    <input
      type="email"
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-grow w-full sm:w-auto p-4 border border-gray-200 rounded-lg text-base font-poppins focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      required
    />
    <button
      type="submit"
      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-4 px-8 rounded-lg shadow-lg transition-colors duration-300"
    >
      Subscribe
    </button>
  </form>
  {isSubscribed && (
    <p className="mt-6 text-green-600 font-poppins font-medium flex items-center justify-center">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      Thank you for subscribing!
    </p>
  )}
</div>

      </div>

      {/* FAQ Section */}
      <section className="p-6 bg-gray-300 mt-8 w-full">
        <h2 className="text-4xl font-bold text-custom-blue mb-4 text-left font-poppins">
          Frequently Asked Questions
        </h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 pb-2">
            <h3
              className="font-poppins text-l text-black-800 cursor-pointer flex justify-between items-center py-2 hover:bg-gray-400 transition duration-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2 text-sm">
                {activeFAQ === index ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </span>
            </h3>
            {activeFAQ === index && (
              <p className="text-gray-700 mt-2 font-poppins">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

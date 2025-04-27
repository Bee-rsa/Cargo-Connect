import { useState, useEffect } from 'react';

// Import images
import postImage1 from '../../assets/blog/aerial-view-container-cargo-ship-sea_335224-719.jpg';
import postImage2 from '../../assets/blog/airplane-track-front-view-generative-ai_188544-7895.jpg';
import postImage3 from '../../assets/blog/dynamic-scene-cargo-plane-operation_980928-73445.jpg';
import postImage4 from '../../assets/blog/images (2).jpeg';
import postImage5 from '../../assets/blog/many-transport-trucks-parked-service-station-sunset-ai-generative_123827-23416.jpg';
import postImage6 from '../../assets/blog/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg';
import postImage7 from '../../assets/blog/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662911.jpg';
import postImage8 from '../../assets/blog/aerial-view-container-cargo-ship-sea_335224-720.jpg';
import newsletterImage from '../../assets/fun-delivery-concept-with-variety-elements.png';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Freight Transport",
    image: postImage1,
    excerpt: "Exploring the advancements in technology that are shaping the future of freight transport.",
    link: "/future-of-freight",
    category: "Technology",
    date: "May 15, 2023"
  },
  {
    id: 2,
    title: "5 Tips for Logistics Management",
    image: postImage2,
    excerpt: "Learn how to optimize your logistics management for better efficiency and cost savings.",
    link: "#",
    category: "Management",
    date: "April 28, 2023"
  },
  {
    id: 3,
    title: "Sustainable Practices in Freight Shipping",
    image: postImage3,
    excerpt: "Understanding the importance of sustainability in the freight industry and how to implement it.",
    link: "#",
    category: "Sustainability",
    date: "April 10, 2023"
  },
  {
    id: 4,
    title: "The Impact of AI on Logistics",
    image: postImage4,
    excerpt: "How artificial intelligence is transforming the logistics sector and enhancing operational efficiency.",
    link: "#",
    category: "Technology",
    date: "March 22, 2023"
  },
  {
    id: 5,
    title: "Blockchain in Freight: A Game Changer",
    image: postImage5,
    excerpt: "Examining the potential of blockchain technology to revolutionize freight and shipping.",
    link: "#",
    category: "Technology",
    date: "March 15, 2023"
  },
  {
    id: 6,
    title: "Maximizing Supply Chain Visibility",
    image: postImage6,
    excerpt: "Strategies for improving visibility across the supply chain for better decision-making.",
    link: "#",
    category: "Management",
    date: "February 28, 2023"
  },
  {
    id: 7,
    title: "Reducing Freight Costs: Best Practices",
    image: postImage7,
    excerpt: "Top strategies for businesses to reduce their freight costs while maintaining service quality.",
    link: "#",
    category: "Finance",
    date: "February 10, 2023"
  },
  {
    id: 8,
    title: "The Role of E-commerce in Freight",
    image: postImage8,
    excerpt: "How the rise of e-commerce is reshaping the logistics and freight landscape.",
    link: "#",
    category: "Trends",
    date: "January 25, 2023"
  },
];

const Blog = () => {
  const [ setWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins">
            Latest insights and updates from the world of freight and logistics.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 font-poppins mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 font-poppins mb-4">
                      {post.excerpt}
                    </p>
                    <a 
                      href={post.link} 
                      className="inline-flex items-center text-blue-600 font-medium font-poppins hover:text-blue-800 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Left Image (visible only on larger screens) */}
            <div className="flex-1 hidden md:block">
              <img
                src={newsletterImage}
                alt="Newsletter"
                className="max-w-[500px] max-h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Text and Form */}
            <div className="flex-2 text-center max-w-2xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-gray-900 tracking-tight">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-10 font-poppins leading-relaxed">
                Get exclusive insights, industry trends, and Freight iT updates delivered straight to your inbox.
              </p>
              <form 
                onSubmit={handleSubscribe} 
                className="flex flex-col md:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow p-4 border border-gray-200 rounded-lg text-base font-poppins focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-4 px-8 rounded-lg shadow-lg transition-colors duration-300"
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
        </div>
      </div>
    </div>
  );
};

export default Blog;
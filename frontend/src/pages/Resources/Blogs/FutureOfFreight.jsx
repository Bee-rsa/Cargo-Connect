import postImage1 from '../../../assets/blog/aerial-view-container-cargo-ship-sea_335224-719.jpg';
import postImage2 from '../../../assets/images.png';
import postImage3 from '../../../assets/images (4).jpeg';

const FutureOfFreight = () => {
  return (
    <div className="w-full flex flex-col font-poppins items-center bg-white">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 py-12 flex flex-col items-center">
        {/* Article Header */}
        <header className="w-full mb-8">
          <div className="mb-4">
            <span className="text-sm font-medium text-blue-600">Freight Technology</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500">November 28, 2024</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The Future of Freight Transport
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Exploring the advancements in technology that are shaping the future of freight transport.
          </p>
          <div className="w-full h-px bg-gray-200"></div>
        </header>

        {/* Introduction Section */}
        <article className="w-full mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                The freight transport industry is undergoing a profound transformation as technological advancements continue to reshape its landscape. With emerging innovations such as autonomous vehicles, artificial intelligence (AI), and blockchain technology, the logistics sector is becoming more efficient, transparent, and responsive to the growing demands of global trade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From increasing the speed of delivery to minimizing human error, technology is driving change in every corner of the industry. This article explores how these innovations are influencing key sectors within freight transport: shipping, trucking, courier services, and freight solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <figure className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={postImage1}
                  alt="Aerial view of a container cargo ship at sea"
                  className="w-full h-auto"
                />
                <figcaption className="text-xs text-gray-500 mt-2 text-right">
                  Image source: <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Freepik</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </article>

        {/* Section 1 */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            1. Autonomous Vehicles and Smart Trucks
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              The introduction of autonomous vehicles (AVs) promises to dramatically alter the trucking industry by improving safety, efficiency, and operational costs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong>Increased Safety:</strong> AVs are equipped with sensors, cameras, and machine learning algorithms that can detect obstacles and react faster than human drivers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong>Efficiency and Cost Reduction:</strong> By operating 24/7 without the need for rest breaks, autonomous trucks can significantly reduce delivery times and labor costs.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            2. Sustainable Freight Solutions
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-gray-700 mb-4">
                Environmental concerns are pushing the freight industry toward green alternatives that reduce carbon emissions while maintaining efficiency.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">Key Developments:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Electric trucks with 500+ mile ranges entering production</li>
                  <li>Hydrogen fuel cell technology for long-haul transport</li>
                  <li>AI-optimized routing to minimize fuel consumption</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <figure className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={postImage2}
                  alt="Sustainable freight solutions"
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            3. Digitalization and Blockchain
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Digital transformation is revolutionizing freight management through blockchain technology, providing secure, transparent tracking of shipments across global supply chains.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Reduced paperwork and processing times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Enhanced security against fraud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Real-time visibility for all stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                AI-powered logistics platforms are optimizing routes, predicting maintenance needs, and automating warehouse operations, leading to unprecedented efficiency gains.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">AI Applications:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Predictive analytics for demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Automated load optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Dynamic pricing models</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            4. Hyperloop and High-Speed Freight
          </h2>
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">The Next Frontier</h3>
            <p className="mb-4">
              Hyperloop technology represents a quantum leap in freight transport, with potential speeds exceeding 700 mph in low-pressure tubes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-200 mb-2">Advantages:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Near-instantaneous regional deliveries</li>
                  <li>Weather-independent operation</li>
                  <li>Minimal energy consumption per ton-mile</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-200 mb-2">Current Projects:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>European hyperloop cargo network (2026 target)</li>
                  <li>Middle East prototype testing</li>
                  <li>US coastal corridor feasibility studies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Conclusion
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                The freight transport industry stands at the brink of a technological revolution. From autonomous trucks navigating highways to hyperloop capsules whisking cargo between cities at airline speeds, the coming decade will redefine how goods move around the world.
              </p>
              <p className="text-gray-700">
                These innovations promise not just incremental improvements but fundamental transformations in efficiency, sustainability, and reliability. Companies that embrace these changes early will gain significant competitive advantages in the evolving logistics landscape.
              </p>
            </div>
            <div className="md:w-1/2">
              <figure className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={postImage3}
                  alt="Future freight technology"
                  className="w-full h-auto"
                />
                <figcaption className="text-xs text-gray-300 bg-gray-800 p-2 text-center">
                  The future of freight transport integrates cutting-edge technology with sustainable practices
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Author/Call to Action */}
        <div className="w-full mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">Share this article:</h3>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FutureOfFreight;
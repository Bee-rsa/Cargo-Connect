import step1Image from '../../assets/Freight iT_20240926_155145_0001.png';
import step2Image from '../../assets/Freight iT_20240926_154924_0001.png';
import step3Image from '../../assets/Freight iT_20240926_154659_0001.png';

const HowItWorks = () => {
  const steps = [
    {
      img: step1Image,
      title: 'Register',
      desc: 'Create an account with Freight iT by providing your email and creating a secure password. This account will allow you to manage your shipments efficiently and access all features of our platform.',
    },
    {
      img: step2Image,
      title: 'Get Instant Quotes',
      desc: 'Once registered, input your shipping details, including the dimensions and weight of your cargo. Our system will provide you with instant quotes from various carriers, ensuring you find the best price and service for your needs.',
    },
    {
      img: step3Image,
      title: 'Book & Track',
      desc: 'After selecting your preferred carrier based on the quotes, proceed to book your shipment. Make the payment securely and then track your shipment in real-time through our platform until it arrives at its destination.',
    },
  ];

  return (
    <div className="w-full p-6">
      <section className="bg-white p-6 mb-8 w-full">
        <h2 className="text-4xl font-bold text-custom-blue mb-6 text-left font-poppins">
          How To Transport Your Cargo With Freight iT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-6 border rounded-lg bg-gray-50 w-full h-full"
            >
              <img
                src={step.img}
                alt={`Step ${idx + 1}`}
                className="w-full h-60 object-cover mb-4"
              />
              <h3 className="font-semibold text-xl text-custom-blue font-poppins mb-2">
                Step {idx + 1}: {step.title}
              </h3>
              <p className="text-left font-poppins">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

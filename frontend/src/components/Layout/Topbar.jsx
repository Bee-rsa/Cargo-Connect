const Topbar = () => {
  return (
    <div className="bg-custom-sage text-white">
      <div className="container mx-auto flex font-poppins justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
        <a href="https://linkedin.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" className="h-5 w-5" alt="LinkedIn"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063795589745" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" className="h-5 w-5" alt="Facebook"/>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" className="h-5 w-5" alt="Instagram"/>
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Quick Quotes + Rapid Shipping = Worldwide Reach</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+27324593387" className="hover:text-gray-300">
            +27 (32) 459-3387
          </a>
        </div>
      </div>
    </div>
  );
};
export default Topbar;

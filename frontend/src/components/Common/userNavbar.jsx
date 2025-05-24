import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import chatIcon from '../../assets/icons8-chat-bubble-50.png';
import defaultProfilePic from '../../assets/download.png'; 


import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };


  const handleLinkClick = () => {
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  };


  return (
    <>
      <nav className="fixed top-0 font-poppins left-0 w-full bg-custom-blue flex justify-between items-center py-2 px-6">
        {/* Left - Logo */}
        <div className="text-3xl text-white font-extrabold tracking-tight">
          <Link to="/user-home">Cargo Connect</Link>
        </div>

        {/* Right - Desktop Nav + Icons */}
        <div className="flex items-center gap-6">
          {/* Dropdowns and Links */}
          <div className="hidden md:flex items-center space-x-4">



          </div>

          {/* Icons and Search */}
          <div className="flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
            )}
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-custom-sage" />
            </Link>
            <div className="overflow-hidden">
            <img src={chatIcon} alt="Chat Icon" className="h-6 w-6" />
            </div>

            <button onClick={toggleNavDrawer} className="md:hidden">
              {navDrawerOpen ? (
                <HiXMark className="h-6 w-6 text-white" />
              ) : (
                <HiBars3BottomRight className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen with smooth transition */}
      <div className={`md:hidden fixed inset-0 z-50 bg-custom-blue transform transition-transform duration-300 ease-in-out ${navDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Header with logo, search and close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-900">
          <div className="text-3xl text-white font-extrabold tracking-tight">
            <Link to="/user-home" onClick={handleLinkClick}>Cargo Connect</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white">
            </div>
            <button 
              onClick={toggleNavDrawer}
              className="text-white focus:outline-none"
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* User section with Get Started button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-900">
  {/* Left: Profile picture + name & email */}
  <div className="flex items-center space-x-4">
    <img
      src={user?.profilePicture || defaultProfilePic}
      alt="Profile"
      className="h-12 w-12 rounded-full object-cover"
    />
    <div>
      <h2 className="text-white text-lg font-semibold">{user?.name || 'HotlineUser'}</h2>
      <p className="text-custom-sage text-sm">{user?.email || 'user@example.com'}</p>
    </div>
  </div>

  {/* Right: Icon block */}
  <div className="flex items-center">
    <HiOutlineUser className="h-6 w-6 text-custom-sage mr-2" />
    <span className="text-white text-lg"> </span>
  </div>
</div>
      </div>
    </>
  );
};

export default Navbar;
import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaBoxOpen,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import chatIcon from '../../assets/icons8-chat-bubble-50.png';
import defaultProfilePic from '../../assets/download.png'; 
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const handleLinkClick = () => {
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  };

    const handleLogout = () => {
      dispatch(logout());
      dispatch(clearCart());
      navigate("/login");
    };

  return (
    <>
      <nav className="fixed top-0 font-poppins left-0 w-full bg-custom-blue flex justify-between items-center py-2 px-6 z-50">
        {/* Left - Logo */}
        <div className="text-3xl text-white font-extrabold tracking-tight">
          <Link to="/user-home">Cargo Connect</Link>
        </div>

        {/* Right - Desktop Nav + Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-4">
            {/* Future desktop links */}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">
                Admin
              </Link>
            )}
            {!navDrawerOpen && (
  <img src={chatIcon} alt="Chat Icon" className="h-6 w-6" />
)}

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

      {/* Mobile Menu - Full Screen */}
      <div className={`md:hidden fixed inset-0 z-40 bg-custom-blue transform transition-transform duration-300 ease-in-out ${navDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-900">
        </div>

        {/* User Info */}
        <div className="p-4 -mt-0.5 border-b border-gray-900">
          {/* User section with profile and icon */}
<div className="flex justify-between items-center p-2 border-b border-gray-900">
  {/* Left: Profile picture + name & email */}
  <div className="flex items-center space-x-4">
    <img
      src={user?.profilePicture || defaultProfilePic}
      alt="Profile"
      className="h-12 w-12 rounded-full object-cover"
    />
    <div>
      <h2 className="text-white text-lg font-semibold">
        {user?.name || 'HotlineUser'}
      </h2>
      <p className="text-custom-sage text-sm">
        {user?.email || 'user@example.com'}
      </p>
    </div>
  </div>

  {/* Right: Icon block */}
  <div className="flex items-center">
    <Link to="/profile" className="hover:text-black">
      <HiOutlineUser className="h-6 w-6 text-custom-sage" />
    </Link>
  </div>
</div>


          {/* Navigation Links */}
          <ul className="space-y-4 text-white">
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <FaShippingFast className="text-white -mt-0.5 w-8 h-8" />
              <Link to="/shipments" onClick={handleLinkClick}>Shipments</Link>
            </li>
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <FaMoneyBillWave className="text-white -mt-0.5 w-8 h-8" />
              <Link to="/billing" onClick={handleLinkClick}>Billing</Link>
            </li>
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <FaBoxOpen className="text-white -mt-0.5 w-8 h-8" />
              <Link to="/track" onClick={handleLinkClick}>Track My Parcel</Link>
            </li>
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <FaCog className="text-white -mt-0.5 w-8 h-8" />
              <Link to="/settings" onClick={handleLinkClick}>My Settings</Link>
            </li>
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <FaQuestionCircle className="text-white -mt-0.5 w-8 h-8" />
              <Link to="/help-center" onClick={handleLinkClick}>Help Center</Link>
            </li>
            <li className="flex text-xl items-center mt-6 p-3 space-x-3">
              <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

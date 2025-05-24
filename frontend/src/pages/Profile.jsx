import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";
import UserNavbar from "../components/Common/userNavbar";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-custom-blue -mt-0.5 flex flex-col">
        <div className="flex-grow container mx-auto p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="w-full mt-16 md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 bg-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {user?.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{user?.email}</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

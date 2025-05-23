import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { mergeCart } from "../redux/slices/cartSlice";
import PasswordStrengthBar from "../components/PasswordStrengthMeter"; 
import CargoCompanies from "../components/CargoCompanies";
import RegisterImage from "../assets/fun-delivery-concept-with-variety-elements-removebg-preview.png";
import { Eye, EyeOff } from 'react-feather'; 


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const [showPassword, setShowPassword] = useState(false);

  const redirect = new URLSearchParams(location.search).get("redirect") || "/user-home";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/user-home");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/user-home");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div
      className="min-h-screen w-full font-poppins -mt-0.5 flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(135deg, #000042 30%, #5185AB 100%)",
      }}
    >
      <style>
        {`
          @media only screen and (max-width: 768px) {
            .p-8 {
              padding: 20px;
            }

            .max-w-md {
              margin: 20px;
            }
          }
        `}
      </style>
      {/* Left: Form section */}
      <div className="w-full md:w-1/2 mt-16 mb-12 flex justify-center items-center px-3 sm:px-4 md:px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white p-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text">Create Account</h2>
          <p className="text-center text-sm mb-6 text-gray-300">
            Shipping your cargo has never been easier
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-100 text-black"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-100 text-black"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-2 relative">
  <label className="block text-sm mb-2 font-medium">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full p-2 pr-10 rounded bg-gray-100 text-black"
      placeholder="Password"
    />
    <button
      type="button"
      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>
  </div>
</div>
          <PasswordStrengthBar password={password} className="mb-8" />

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-gradient-to-r from-blue-700 to-custom-blue rounded-lg text-white font-semibold transition duration-200"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="mt-4 text-xs text-gray-300">
            <p className="mb-2">
              By signing up, I accept the Cargo Connect terms and conditions.
            </p>
            <p>
              I agree to receive freight-related updates, industry insights, and marketing 
              communications from the Cargo Connect Group. I know I can opt out of these at any time.
            </p>
          </div>

          <div className="relative my-6 w-full">
  <div className="flex items-center w-full">
    <div className="flex-grow border-t border-gray-600"></div>
    <span className="mx-4 text-white px-2 z-10 relative">
      Or Sign Up With
    </span>
    <div className="flex-grow border-t border-gray-600"></div>
  </div>
</div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full py-2 px-4 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 focus:outline-none transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button 
              type="button"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452h-3.555v-11.452h3.555v11.452z"/>
              </svg>
              <span className="mt-1">LinkedIn</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Image section */}
      <div className="hidden -ml-12 md:block w-1/2 bg-transparent">
        <div className="h-full p-16 -mt-20  flex justify-center items-center">
          <img
            src={RegisterImage}
            alt="Login"
            className="max-h-[500px] w-auto object-contain rounded-xl"
          />
        </div>

         
    <CargoCompanies />

      </div>
    </div>
  );
};

export default Register;
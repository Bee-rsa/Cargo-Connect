import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";
import loginImage from "../assets/rb_2147680890.png";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

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
    dispatch(loginUser({ email, password, rememberMe }));
  };

  return (
    <div
      className="min-h-screen w-full -mt-0.5 flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(135deg, #000042 50%, #5185AB 100%)",
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

      <div className="flex w-full max-w-6xl font-poppins justify-center items-center flex-col md:flex-row gap-4 px-6 mt-4 md:mt-16">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8"
        >
          <div className="p-2">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text">
              Welcome Back
            </h2>
            <p className="text-m mb-6 -mt- text-center text-white">Seamless Shipping Simplified.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-white">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-700 to-custom-blue text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-custom-blue focus:outline-none transition"
              >
                {loading ? "loading..." : "Log In"}
              </motion.button>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-white">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="text-blue-400 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="relative my-6 w-full">
  <div className="flex items-center w-full">
    <div className="flex-grow border-t border-gray-600"></div>
    <span className="mx-4 text-white px-2 z-10 relative">
      Or continue with
    </span>
    <div className="flex-grow border-t border-gray-600"></div>
  </div>
</div>




              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-2 px-4 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 focus:outline-none transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Google</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-2 px-4 bg-blue-800 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452h-3.555v-11.452h3.555v11.452z"/>
                  </svg>
                  <span className="mt-1">LinkedIn</span>
                </motion.button>
              </div>
            </form>
          </div>

          <div className="px-4 pt-4">
            <p className="text-sm text-center text-gray-300">
              Don&apos;t have an account?{" "}
              <Link
                to={`/register?redirect=${encodeURIComponent(redirect)}`}
                className="text-blue-400 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 bg-transparent">
          <div className="h-full ml-24 flex justify-center items-center">
            <img
              src={loginImage}
              alt="Login"
              className="max-h-[500px] w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
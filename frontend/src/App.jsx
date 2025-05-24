import { useState, useEffect } from "react"; // <-- import these
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ScrollToTop from './components/Layout/ScrollToTop';
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import Pricing from "./pages/Pricing";
import UserLoginPage from "./pages/Login";
import ForgotPassword from "./pages/ForgotPasswordPage";


/* User Login */
import UserHomePage from "./pages/userHome";
import Origin from "./userComponents/SearchBar/Origin";
import Destination from "./userComponents/SearchBar/Destination";
import Mode from "./userComponents/SearchBar/Mode";
import Load from "./userComponents/SearchBar/Load";

/* Company */
import AboutCargoConnect from "./pages/Company/AboutCargoConnect";
import TermsAndConditions from "./pages/Company/TermsAndConditions";
import PrivacyPolicy from "./pages/Company/PrivacyPolicy";
import HelpCenter from "./pages/Company/HelpCenter";

/* Resources */
import WeightCalculator from "./pages/Resources/WeightCalculator";

/* Blogs Folder */
import Blog from "./pages/Resources/Blog"; 
import FutureOfFreight from "./pages/Resources/Blogs/FutureOfFreight";

/* Redux store */
import store from "./redux/store";

/* Common Components */
import ProtectedRoute from "./components/Common/ProtectedRoute";
import LoadingSpinner from "./components/LoadSpinner"; // <-- Spinner

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // <-- start loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // <-- after 2 seconds, stop loading
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; // <-- while loading, show spinner
  }

  return (
    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/origin" element={<Origin />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/mode" element={<Mode />} />
            <Route path="/load" element={<Load />} />

            <Route path="/user-home" element={
  <ProtectedRoute role="customer">
    <UserHomePage />
  </ProtectedRoute>
} />


            {/* Company Pages */}
            <Route path="/about-cargo-connect" element={<AboutCargoConnect />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-center" element={<HelpCenter />} />

            {/* Resources */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/future-of-freight" element={<FutureOfFreight />} />
            <Route path="/weight-calculator" element={<WeightCalculator />} />

            {/* Products / Shopping */}
            <Route path="collections/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="my-orders" element={<MyOrdersPage />} />
          </Route>

          {/* Admin Area */}
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

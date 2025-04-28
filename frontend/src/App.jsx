import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
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
import OperatorLoginPage from "./pages/operatorLoginPage";
/* User Login */
import UserHomePage from "./pages/userHome";
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

/* Business Hub */
/* Products */


import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/Common/ProtectedRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/operator-login-page" element={<OperatorLoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path='/pricing' element={<Pricing />} />

            {/* User Login */}
            <Route
            path="/user-home"
            element={
              <ProtectedRoute role="customer">
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<UserHomePage />} />
          </Route>

            {/* Company */}
            <Route path='/about-cargo-connect' element={<AboutCargoConnect />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/help-center' element={<HelpCenter />} />
            {/* Resources */}
            <Route path='/blog' element={<Blog />} />
            <Route path='/future-of-freight' element={<FutureOfFreight />} />
            <Route path='/weight-calculator' element={<WeightCalculator />} /> 

            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="my-orders" element={<MyOrdersPage />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
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

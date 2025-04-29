import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/user-home"];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer: Hide on specific routes */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default UserLayout;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/user-home", "/origin", "/destination", "/mode", 
    "/profile", "/load", "/goods", "/tenders", "/terms-and-conditions-tenders", 
    "/track-my-parcel", "/text-information", "/message-chat"];
  const hideHeaderRoutes = ["/user-home","/origin", "/destination", "/mode", 
    "/profile", "/load", "/goods", "/tenders", "/terms-and-conditions-tenders", 
    "/track-my-parcel", "/text-information", "/message-chat"]; 

  return (
    <>
      {/* Conditionally render Header */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default UserLayout;

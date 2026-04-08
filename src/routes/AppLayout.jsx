import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useAppContext } from "../context/AppContext";

const AppLayout = () => {
  const location = useLocation();
  const { hiddenChromeRoutes } = useAppContext();

  const hideChrome = hiddenChromeRoutes.some((routePrefix) =>
    location.pathname.startsWith(routePrefix),
  );

  return (
    <>
      {!hideChrome && <Navbar />}
      <Outlet />
      {!hideChrome && <Footer />}
    </>
  );
};

export default AppLayout;

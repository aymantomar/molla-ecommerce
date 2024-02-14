import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import StickyNav from "../components/Sticky-nav/Sticky-nav";


function Layout() {
  return (
    <div>
      <Navbar />
      <StickyNav />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;

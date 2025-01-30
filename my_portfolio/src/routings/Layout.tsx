import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
/**
 * Default layout for complete application
 */
const Layout = () => {
  return (
    <>
      <div className="bg-[#282c33] min-h-screen">
        <div className="Laptop:py-10 Laptop:p-28 py-10 px-3">
          <NavigationBar></NavigationBar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;

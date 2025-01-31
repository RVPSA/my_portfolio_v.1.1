import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { dots, github, linkedin } from "../assets";
/**
 * Default layout for complete application
 */
const Layout = () => {
  return (
    <>
      {/* //<> Main viewport */}
      <div className="bg-[#282c33] min-h-screen relative">
        {/* //<> Only visible on the Laptop and the above screen , github and LinkedIn elements*/}
        <div className="hidden Laptop:flex absolute flex-col top-0 left-5 gap-3 items-center">
          <div className="w-[2px] h-52 bg-slate-400"></div>
          <a
            href="https://www.linkedin.com/in/akesh-ramasinghe"
            target="_blank"
          >
            <div className="w-[20px] h-[20px]">
              <img src={linkedin} className="w-full h-full object-fill" />
            </div>
          </a>
          <a href="https://github.com/RVPSA" target="_blank">
            {" "}
            <div className="w-[20px] h-[20px]">
              <img src={github} className="w-full h-full object-fill" />
            </div>
          </a>
        </div>
        {/* //<> Design section for dots and square */}
        <div className="hidden Laptop:flex fixed w-20 h-20 top-72 -left-10">
          <img src={dots} alt="dots" className="w-32 h-full object-fill" />
        </div>
        <div className="hidden Laptop:flex fixed w-20 h-20 overflow-hidden top-72 -right-6 border-2 border-slate-400"></div>
        {/* //<> Page component showing area */}
        <div className="Laptop:py-10 Laptop:p-28 py-10 px-3">
          <NavigationBar></NavigationBar>
          <Outlet></Outlet>
        </div>
        {/* //<> Footer section */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;

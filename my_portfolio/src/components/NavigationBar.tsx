import DropDown from "./DropDown";
import { menu, close } from "../assets";
import { useState } from "react";

/**
 * Navigation bar design and state handling component.
 * @param //TODO Need to implement
 */
const NavigationBar = () => {
  //<> menu icon changing state, true = show menu icon/ false= show close icon
  const [toggleMenuIcon, setMenuToggleIcon] = useState(true);

  //<> handle the visibility of menu list for mobile screen
  const handleShowMenuList = () => {
    setMenuToggleIcon(!toggleMenuIcon);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-white text-xl font-bold">Akesh</div>
        {/* //<> Show when screen size is STablet or up */}
        <div
          className="hidden
        STablet:flex STablet:flex-row STablet:justify-between STablet:gap-9"
        >
          <h1 className="text-white">#Home</h1>
          <h1 className="text-slate-400">#Works</h1>
          <h1 className="text-slate-400">#About-me</h1>
          <h1 className="text-slate-400">#Contacts</h1>
          <div>
            <DropDown></DropDown>
          </div>
        </div>

        {/* //<> Hide when screen size is STablet or up */}
        <div
          className="relative
        STablet:hidden"
        >
          <img
            src={toggleMenuIcon ? menu : close}
            alt="Menu Icon"
            className="w-[20px] h-[20px] object-contain cursor-pointer"
            onClick={handleShowMenuList}
          />
          <div
            className={`${
              !toggleMenuIcon ? "flex" : "hidden"
            } top-10 right-0 absolute bg-[#282c33]/50 w-screen min-h-screen
            flex-col p-10 gap-9`}
          >
            <h1 className="text-white">#Home</h1>
            <h1 className="text-slate-400">#Works</h1>
            <h1 className="text-slate-400">#About-me</h1>
            <h1 className="text-slate-400">#Contacts</h1>
            <div>
              <DropDown></DropDown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;

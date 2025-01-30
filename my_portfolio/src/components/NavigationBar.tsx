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
        {/* //<> Show when screen size is Laptop or up */}
        <div
          className="hidden
        Laptop:flex Laptop:flex-row Laptop:justify-between Laptop:gap-9"
        >
          <button className="text-white">#Home</button>
          <button className="text-slate-400">#Works</button>
          <button className="text-slate-400">#About-me</button>
          <button className="text-slate-400">#Contacts</button>
          <div>
            <DropDown></DropDown>
          </div>
        </div>

        {/* //<> Hide when screen size is Laptop or up */}
        <div
          className="relative
        Laptop:hidden"
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
            } top-10 right-0 absolute bg-[#282c33] w-screen min-h-screen
            flex-col p-10 gap-9 z-10 items-start`}
          >
            <button className="text-white">#Home</button>
            <button className="text-slate-400">#Works</button>
            <button className="text-slate-400">#About-me</button>
            <button className="text-slate-400">#Contacts</button>
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

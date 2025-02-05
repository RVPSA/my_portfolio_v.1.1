import DropDown from "./DropDown";
import { menu, close } from "../assets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

/**
 * Navigation bar design and state handling component.
 * @param //TODO Need to implement
 */
const NavigationBar = () => {
  //<> menu icon changing state, true = show menu icon/ false= show close icon
  const [toggleMenuIcon, setMenuToggleIcon] = useState(true);
  const [activeButton, setActiveButton] = useState("/");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [t] = useTranslation("navigation");

  //<> handle the visibility of menu list for mobile screen
  const handleShowMenuList = () => {
    setMenuToggleIcon(!toggleMenuIcon);
  };

  const handleActiveButton = () => {
    if (pathname === "/") {
      setActiveButton("/");
    } else if (pathname === "/work") {
      setActiveButton("/work");
    } else if (pathname === "/aboutme") {
      setActiveButton("/aboutme");
    } else if (pathname === "/contact") {
      setActiveButton("/contact");
    }
  };
  useEffect(() => {
    handleActiveButton();
  }, [pathname]);

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-white text-xl font-bold">Akesh</div>
        {/* //<> Show when screen size is Laptop or up */}
        <div
          className="hidden
        Laptop:flex Laptop:flex-row Laptop:justify-between Laptop:gap-9"
        >
          {/* <button
            className="text-white"
            onClick={() => {
              navigate("/home");
            }}
          >
            #Home
          </button> */}
          <Button
            text={t("navigation.home")}
            isborder={activeButton === "/" ? true : false}
            onClick={() => {
              navigate("/");
            }}
          ></Button>
          <Button
            text={t("navigation.work")}
            isborder={activeButton === "/work" ? true : false}
            onClick={() => {
              navigate("/work");
            }}
          ></Button>
          <Button
            text={t("navigation.aboutme")}
            isborder={activeButton === "/aboutme" ? true : false}
            onClick={() => {
              navigate("/aboutme");
            }}
          ></Button>
          <Button
            text={t("navigation.contact")}
            isborder={activeButton === "/contact" ? true : false}
            onClick={() => {
              navigate("/contact");
            }}
          ></Button>
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
            flex-col p-10 gap-9 z-40 items-start touch-none`}
          >
            <Button
              text={t("navigation.home")}
              isborder={activeButton === "/" ? true : false}
              onClick={() => {
                navigate("/");
                handleShowMenuList();
              }}
            ></Button>
            <Button
              text={t("navigation.work")}
              isborder={activeButton === "/work" ? true : false}
              onClick={() => {
                navigate("/work");
                handleShowMenuList();
              }}
            ></Button>
            <Button
              text={t("navigation.aboutme")}
              shortText="#me"
              isborder={activeButton === "/aboutme" ? true : false}
              onClick={() => {
                navigate("/aboutme");
                handleShowMenuList();
              }}
            ></Button>
            <Button
              text={t("navigation.contact")}
              isborder={activeButton === "/contact" ? true : false}
              onClick={() => {
                navigate("/contact");
                handleShowMenuList();
              }}
            ></Button>
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

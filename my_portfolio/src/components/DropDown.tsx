import { useState } from "react";

/**
 * Drop Down component
 * @param //TODO NeedToBuild
 */
const DropDown = () => {
  //<> State for handling dropdown list
  const [showList, setShowList] = useState(false);
  //<> State to change the name of dropdown
  const [name, setName] = useState("EN");

  //<> Hanlde visiblity of the list
  const handleVisibiliy = () => {
    setShowList(!showList);
  };

  //<> Handle the showing name of the dropdown, visibility of list
  const handleShowName = (name: string): void => {
    setName(name);
    setShowList(!showList);
  };
  return (
    <div className="text-slate-400 relative inline-block text-left">
      {/* //<> Upper part of the dropdown with arrow */}
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 text-sm font-semibold "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleVisibiliy}
        >
          {name}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* //<> Dropdown list 
      // //TODO Need to check origin issue, origin is not when changing the screen sizes
      // */}
      {showList && (
        <div
          className="STablet:right-0 STablet:origin-top-right absolute z-10 mt-2 w-56 rounded-md bg-[#282c33] shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              className={`${
                name == "IT" ? "text-white" : "text-slate-400"
              } block p-2 text-sm`}
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => {
                handleShowName("IT");
              }}
            >
              IT
            </button>
            <button
              className={`${
                name == "EN" ? "text-white" : "text-slate-400"
              } block p-2 text-sm`}
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={() => {
                handleShowName("EN");
              }}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

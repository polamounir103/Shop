import React, { useState } from "react";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function LeftNavMob() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };

  return (
    <div>
      <div className="flex gap-2 text-xl">
        <div onClick={toggleSideMenu}>
          <HiOutlineMenu />
        </div>
        <div onClick={toggleSearchMenu}>
          <HiOutlineSearch />
        </div>
      </div>
      <div
        className={`${
          isSideMenuOpen ? "show" : "hide"
        } left-side-menu absolute top-0 left-0 bg-white w-11/12 h-screen z-50 `}
      >
        <div className="w-full h-full bg-slate-100 relative p-5 flex flex-col gap-4 ">
          <div className="flex justify-between">
            <div className="top-5 right-5 text-3xl flex">
              <p>Menu</p>
            </div>
            <div
              className="top-5 right-5 text-3xl flex"
              onClick={toggleSideMenu}
            >
              <IoClose />
            </div>
          </div>
          <div>SIDE MENU BODY</div>
        </div>
      </div>

      <div
        className={`${
          isSearchMenuOpen ? "show" : "hide"
        } search-side-menu absolute top-0 left-0 bg-white w-11/12 h-screen z-50 `}
      >
        <div className="w-full h-full bg-slate-300 relative p-5 flex flex-col gap-4 ">
          <div className="flex justify-between">
            <div className="top-5 right-5 text-3xl flex">
              <p>Search</p>
            </div>
            <div
              className="top-5 right-5 text-3xl flex"
              onClick={toggleSearchMenu}
            >
              <IoClose />
            </div>
          </div>
          <div>Search MENU BODY</div>
        </div>
      </div>
    </div>
  );
}

export default LeftNavMob;

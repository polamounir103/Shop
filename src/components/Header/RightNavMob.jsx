import React, { useState } from "react";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function RightNavMob() {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };
  const toggleCartMenu = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  return (
    <div>
      <div className="flex gap-2 text-xl">
        <div onClick={toggleAccountMenu}>
          <HiOutlineUser />
        </div>
        <div onClick={toggleCartMenu}>
          <HiOutlineShoppingCart />
        </div>
      </div>
      <div
        className={`${
          isAccountMenuOpen ? "show" : "hide"
        } account-side-menu absolute top-0 right-0 bg-white w-11/12 h-screen z-50`}
      >
        <div className="w-full h-full bg-slate-100 relative p-5 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-3xl flex">
              <p>Account</p>
            </div>
            <div className="text-3xl flex" onClick={toggleAccountMenu}>
              <IoClose />
            </div>
          </div>
          <div>Account MENU BODY</div>
        </div>
      </div>

      <div
        className={`${
          isCartMenuOpen ? "show" : "hide"
        } cart-side-menu absolute top-0 right-0 bg-white w-11/12 h-screen z-50`}
      >
        <div className="w-full h-full bg-slate-300 relative p-5 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-3xl flex">
              <p>Cart</p>
            </div>
            <div className="text-3xl flex" onClick={toggleCartMenu}>
              <IoClose />
            </div>
          </div>
          <div>Cart MENU BODY</div>
        </div>
      </div>
    </div>
  );
}

export default RightNavMob;

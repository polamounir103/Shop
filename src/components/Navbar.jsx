// import React, { useEffect, useState } from "react";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import NavRight from "./Header/NavRight";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//       setIsSideMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleSideMenu = () => {
//     setIsSideMenuOpen(!isSideMenuOpen);
//   };

//   const isMobile = screenWidth <= 768.5;
//   const isTablet = screenWidth > 768 && screenWidth <= 1024;
//   const isDesktop = screenWidth >= 1024;

//   return (
//     <div className="app-header w-full p-5 md:px-32 shadow-md flex items-center text-md fixed top-0 left-0 z-10 bg-slate-50">
//       <nav className="flex justify-between w-full items-center">
//         <div>
//           <Link to="/">
//             <h2 className="text-2xl font-semibold">STORE</h2>

//           </Link>
//         </div>
//         <div className="flex items-center gap-9">
//           <button onClick={toggleSideMenu} className="lg:hidden">
//             <HiOutlineMenuAlt4 />
//           </button>
//           <div
//             className={`side-menu flex flex-col items-start gap-9 absolute z-20 top-0 left-0 p-5 bg-slate-200 h-screen w-64 max-w-full transition-transform duration-300 ${
//               isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <button className="self-start" onClick={toggleSideMenu}>
//               X
//             </button>
//             <div className="flex flex-col gap-6">
//               <Link to="/" onClick={toggleSideMenu}>
//                 Home
//               </Link>
//               <Link to="/categories" onClick={toggleSideMenu}>
//                 Categories
//               </Link>
//               <Link to="/offers" onClick={toggleSideMenu}>
//                 Offers
//               </Link>
//               <Link to="/sales" onClick={toggleSideMenu}>
//                 Sales
//               </Link>
//               {(isTablet || isMobile) && <NavRight />}
//             </div>
//           </div>
//           {isDesktop && (
//             <div className="flex items-center gap-9">
//               <Link to="/">Home</Link>
//               <Link to="/categories">Categories</Link>
//               <Link to="/offers">Offers</Link>
//               <Link to="/sales">Sales</Link>
//               <NavRight />
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
import NavRight from "./Header/NavRight";
import { Link } from "react-router-dom";
import NavMiddel from "./Header/NavMiddel";
import LeftNavMob from "./Header/LeftNavMob";
import RightNavMob from "./Header/RightNavMob";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const toggleSideMenu = () => {
  //   setIsSideMenuOpen(!isSideMenuOpen);
  // };

  const isMobile = screenWidth <= 767;
  // const isTablet = screenWidth > 768 && screenWidth <= 1024;
  // const isDesktop = screenWidth >= 1024;

  return (
    <div className="app-header w-full p-5 md:px-20 lg:px-32 shadow-md flex items-center text-md fixed top-0 left-0 z-10 bg-slate-50">
  {!isMobile && (
    <nav className="flex justify-between w-full items-center ">
      <div>
        <Link to="/">
          <h2 className="text-2xl font-semibold">STORE</h2>
        </Link>
      </div>
      <NavMiddel />
      <NavRight />
    </nav>
  )}
  {isMobile && (
    <nav className="flex justify-between w-full items-center">
    <LeftNavMob />
      <div>
        <Link to="/">
          <h2 className="text-2xl font-semibold">STORE</h2>
        </Link>
      </div>
      <RightNavMob />
    </nav>
  )}
</div>
    );
}

export default Navbar;

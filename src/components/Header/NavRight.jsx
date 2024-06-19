import React, {  useState } from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineSearch,
  HiOutlineUser,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


function NavRight() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);

  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
    setIsSearchResultOpen(false);
  };
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);

    // if (searchText !== "") {
    if (searchText !== null) {
      setIsSearchResultOpen(true);
    } else {
      setIsSearchResultOpen(false);
    }
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="flex items-center gap-5 text-xl ">
      <div className="flex gap-5 flex-row ">
        <div>
          <p className="flex items-center gap-5 cursor-pointer" onClick={toggleSearchMenu}>
            <HiOutlineSearch />
          </p>
          <div
            className={`${
              isSearchMenuOpen ? "search-menu-open shadow-xl" : "search-menu"
            } absolute top-0 left-0 bg-white w-full p-5 flex justify-center items-center `}
          >
            <div className="relative pt-10 w-2/3">
              <div
                className="absolute top-0 right-0 p-2 cursor-pointer"
                onClick={toggleSearchMenu}
              >
                <IoClose />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 relative">
                  <input
                    type="text"
                    placeholder="Search...."
                    className="border-b p-2 rounded-md col-span-11 grow"
                    onChange={handleSearchInput}
                  />
                  <div className=" absolute top-1 right-0">
                    <button className="bg-orange-400 text-white p-2 rounded-md">
                      <HiOutlineSearch />
                    </button>
                  </div>
                </div>
                {searchText && (
                  <div
                    className={`${
                      !isSearchResultOpen && "hidden"
                    } bg-red-5000 bg-white w-full absolute top-full p-2 shadow-xl`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className=" ">
                        <p className="text-lg">Search Result</p>
                        <hr />
                      </div>
                      <div>
                        <p className="text-lg">No Result Found</p>

                        <hr />
                      </div>
                      <div className="text-center pb-6">
                        <p className="text-lg">View All Results</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-5 cursor-pointer">
            <HiOutlineShoppingCart />
          </p>
        </div>
        <div>
          <Link to={"/login"} className="flex items-center gap-5 cursor-pointer">
            <HiOutlineUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavRight;

import React from "react";
import { Link } from "react-router-dom";

function NavMiddel() {
  const navListItems = [
    { title: "Home", navTo: "/" },
    { title: "Sales", navTo: "/sales" },
    { title: "Offers", navTo: "/offers" },
    { title: "Promotions", navTo: "/promotions" },
    { title: "Categories", navTo: "/categories" },
  ];
  return (
    <div>
      <div className="flex gap-5">
        {navListItems.map(({ title, navTo }) => (
          <Link to={navTo} key={title}>{title}</Link>
        ))}
      </div>
    </div>
  );
}

export default NavMiddel;

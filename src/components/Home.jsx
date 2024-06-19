import React from "react";

import Banner from "./Home/Banner";
import TodayOffer from "./Home/TodayOffer";

import AllProducts from "./Home/AllProducts";


function Home() {


  return (
    <div className="flex flex-col gap-4 -mt-12">
      <Banner />
      <TodayOffer />
      <AllProducts />

    </div>
  );
}

export default Home;

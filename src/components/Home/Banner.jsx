// import React from "react";
// import BannerImg from "../../assets/Banner.jpg";
// import SubBannerImg from "../../assets/offer.jpg";

// function Banner() {
//   return (
//     <div className="grid grid-cols-12 gap-1 lg:gap-2">
//       <div className="col-span-12 lg:col-span-10">
//         <img src={BannerImg} alt="Banner" className="w-full" />
//       </div>
//       <div className="bg-red-700 col-span-12 lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-1">
//         <img
//           src={SubBannerImg}
//           alt="SubBanner1"
//           className="w-full h-full object-cover"
//         />

//         <img
//           src={SubBannerImg}
//           alt="SubBanner2"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner;

// import React from "react";
// import BannerImg from "../../assets/Banner.jpg";
// import SubBannerImg from "../../assets/offer.jpg";

// function Banner() {
//   return (
//     <div className="banner-container flex flex-col gap-1 lg:flex-row">
//       <div className="w-full lg:w-10/12">
//         <img src={BannerImg} alt="Banner" className="banner w-full h-full" />
//       </div>
//       <div className="grid gap-1 grid-cols-2 lg:grid-cols-1 lg:w-2/12">
//         <img src={SubBannerImg} alt="SubBanner1" className="sub-banner w-full h-full object-cover" />
//         <img src={SubBannerImg} alt="SubBanner2" className="sub-banner w-full h-full object-cover" />
//       </div>
//     </div>
//   );
// }

// export default Banner;
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import BannerImg from "../../assets/Banner.jpg";


function Banner() {


  return (
    <div className="banner-container relative">
      <div className="relative h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="h-full">
            <img src={BannerImg} alt="" className="h-full"/>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src={BannerImg} alt="" className="h-full"/>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;

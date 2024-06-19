// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import BannerImg from "../../assets/Banner.jpg";
// // import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// function TodayOffer() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//       <div className="relative">
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           onAutoplayTimeLeft={onAutoplayTimeLeft}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={BannerImg} alt="" />
//           </SwiperSlide>
//           <div className="autoplay-progress" slot="container-end">
//             <svg viewBox="0 0 48 48" ref={progressCircle}>
//               <circle cx="24" cy="24" r="20"></circle>
//             </svg>
//             <span ref={progressContent}></span>
//           </div>
//         </Swiper>
//       </div>
//     </>
//   );
// }

// export default TodayOffer;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TodayOffer() {
  const todayOffersList = [
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
    {
      title: "Cloths",
      img: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199175_200x200_1X._CB604510486_.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="mt-5 lg:mt-16 bg-white py-5 rounded-sm">
      <div>
        <h2 className="px-5">
          Today Offers
          <span>
            <Link to="/todayOffers" className="text-xs  ms-2">see more</Link>
          </span>
        </h2>
        <div className="today-offer-box p-5">
          <Slider {...settings}>
            {todayOffersList.map(({ title, img }, index) => (
              <div key={index}>
                <div className="w-32 h:32 lg:w-44 lg:h-44 bg-orange-500  relative overflow-hidden mx-auto">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TodayOffer;

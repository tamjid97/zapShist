import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/brands/amazon.png";
import img2 from "../../../assets/brands/amazon_vector.png";
import img3 from "../../../assets/brands/casio.png";
import img4 from "../../../assets/brands/moonstar.png";
import img5 from "../../../assets/brands/randstad.png";
import img6 from "../../../assets/brands/star.png";
import img7 from "../../../assets/brands/start_people.png";

const allbaner = [img1, img2, img3, img4, img5, img6, img7];
const Company = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold">
          We've helped thousands of sales teams
        </h2>
      </div>
      <div className="mt-25">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          
        >
          {allbaner.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Company;

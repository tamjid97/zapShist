import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import baerimg1 from "../../../assets/banner/banner1.png";
import baerimg2 from "../../../assets/banner/banner2.png";
import baerimg3 from "../../../assets/banner/banner3.png";

const Bannner = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop
      >
        <div>
          <img src={baerimg1} />
        </div>
        <div>
          <img src={baerimg2} />
        </div>
        <div>
          <img src={baerimg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Bannner;

import { Carousel } from "antd";
import React from "react";
import "../HomeBanner/HomeBanner.scss";
import BookingForm from "../BookingForm";
const HeroBanner = (props) => {
  console.log(props.img);
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        className="BannerBackground"
        autoplay="true"
        dots="false"
        autoplaySpeed={3000}
      >
        {props.img?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt=""></img>
            </div>
          );
        })}
      </Carousel>
      <BookingForm />
    </div>
  );
};

export default HeroBanner;

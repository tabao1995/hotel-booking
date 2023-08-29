import React from "react";
import "../Banner/Banner.scss";
const Banner = (props) => {
  return (
    <div className="banner">
      <img alt="" src={props.img[0]} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Banner;

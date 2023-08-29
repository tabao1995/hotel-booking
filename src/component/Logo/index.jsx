import React from "react";
import LogoImage from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={LogoImage} alt="" />
      </Link>
    </div>
  );
};

export default Logo;

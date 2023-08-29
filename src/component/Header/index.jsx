import React from "react";
import Logo from "../Logo";
import HeaderInfomation from "../Header-infomation";
import "../Header/Header.scss";
import HeaderMenu from "../Menu";
const Header = () => {
  return (
    <div className="header">
      <div className="header__first">
        <Logo />
        <HeaderInfomation />
      </div>
      <div className="header__second">
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;

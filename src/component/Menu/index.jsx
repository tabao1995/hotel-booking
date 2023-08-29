import React from "react";
import "../Menu/Menu.scss";
import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../constain/route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const HeaderMenu = () => {
  const isLoggedIn = localStorage.getItem("userData") === null;
  console.log(isLoggedIn);
  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setDisplay("block");
  };
  const handleMouseLeave = () => {
    setDisplay("none");
  };
  const Logout = () => {
    // Xử lý đăng xuất ở đây
    localStorage.removeItem("userData"); // Xóa thông tin người dùng khỏi localStorage
    navigate("/");
  };
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (key) => {
    setActiveItem(key);
  };

  return (
    <div className="header_menu">
      <ul className="header_menu__menu">
        <li
          onClick={() => handleClick(1)}
          className={activeItem === 1 ? "active" : ""}
          key={1}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => handleClick(2)}
          className={activeItem === 2 ? "active" : ""}
          key={2}
        >
          <Link to={APP_ROUTE.ROOMS}>Rooms & Suites</Link>
        </li>
        <li
          onClick={() => handleClick(3)}
          className={activeItem === 3 ? "active" : ""}
          key={3}
        >
          Culinary
        </li>
        <li
          onClick={() => handleClick(4)}
          className={activeItem === 4 ? "active" : ""}
          key={4}
        >
          <Link to={"/meetingandevent"}>Meeting & Events</Link>
        </li>
        <li
          onClick={() => handleClick(5)}
          className={activeItem === 1 ? "active" : ""}
          key={5}
        >
          Spa & Fitness
        </li>
        {isLoggedIn ? (
          <li
            onClick={() => handleClick(6)}
            className={activeItem === 6 ? "active" : ""}
            key={6}
          >
            <Link to={APP_ROUTE.LOGIN}>Login/Register</Link>
          </li>
        ) : (
          <li
            className="header_menu__user"
            key={7}
            onClick={() => handleClick(7)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faUser} />
            <ul
              style={{ display: display }}
              className="header_menu__user__menu"
            >
              <li
                onClick={() => handleClick()}
                className={activeItem === 11 ? "active" : ""}
                key={11}
              >
                <Link to={APP_ROUTE.USERPAGE} content="User Page">
                  {" "}
                  UserPage
                </Link>
              </li>
              <li
                className={activeItem === 12 ? "active" : ""}
                key={12}
                onClick={() => Logout()}
              >
                {" "}
                Log Out{" "}
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HeaderMenu;

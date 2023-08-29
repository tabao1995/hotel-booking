import React from "react";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Header-infomation/Header-infomation.scss";

const HeaderInfomation = () => {
  return (
    <div className="header_information">
      <div id="TA_cdsratingsonlynarrow48" className="TA_cdsratingsonlynarrow">
        <ul id="ZJb4J0" className="TA_links 9Pv8FsBrs5">
          <li id="QOOHzwA" className="ljN2aY">
            <a href="https://www.tripadvisor.com.vn/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang.html">
              <img
                src="https://www.tripadvisor.com.vn/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="header_information__adress">
        <div className="header_information__adress__icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className="header_information__adress__content">
          103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
          Danang City, Vietnam 7,0 km from Danang Airport
        </div>
      </div>
      <div className="header_information__another">
        <div className="header_information__another__content">
          <div className="header_information__another__content__icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="header_information__another__content__content">
            <a href="tel:842363847333 "> 84-236-3847 333</a>
          </div>
        </div>
        <div className="header_information__another__content">
          <div className="header_information__another__content__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="header_information__another__content__content">
            <a href="mailto:reservation@furamavietnam.com">
              {" "}
              reservation@furamavietnam.com
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfomation;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomInfo } from "../../redux/features/slice/roomSlice";
import { Spin } from "antd";
import "../Roomslider/Roomslider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, generatePath, useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../constain/route";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Roomslider = (props) => {
  const { isLoading, roomState } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [selectedRoomIds, setSelectedRoomIds] = useState([]);
  useEffect(() => {
    dispatch(fetchRoomInfo());
    // eslint-disable-next-line
  }, []);

  const Navigate = useNavigate();

  const handleSendRoom = (id) => {
    Navigate(APP_ROUTE.BOOKINGPAGE, { state: { roomId: id } });
  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      {isLoading ? (
        <Spin></Spin>
      ) : (
        <Slider {...setting} className="roomslider">
          {roomState.map((item) => (
            <label
              className="room-item"
              key={item.id}
              htmlFor={`checkbox-${item.id}`}
            >
              {selectedRoomIds[0] === item.id ? (
                <div className="room-item__seclect">
                  <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </div>
              ) : null}
              <div className="room-item__img">
                <img alt="" src={item.img[1]}></img>

                <div
                  onClick={() => handleSendRoom(item.id)}
                  className="room-item__img__hover"
                >
                  <p>Booking Now</p>
                </div>
              </div>

              <div className="room-item__content">
                <div className="room-item__content__info">
                  {/* Tạo liên kết tới trang chi tiết phòng với id phòng làm tham số */}
                  <h3> {item.name} </h3>
                  <p>Room Quantity : {item.quantity}</p>
                  <p> Room Size : {item["Room Information"]["Room size"]}</p>
                </div>
                <div className="room-item__content__link">
                  <Link
                    to={generatePath(APP_ROUTE.ROOMDETAIL, { id: item.name })}
                  >
                    <div className="room-item__content__link__icon">
                      <FontAwesomeIcon icon={faCircleInfo} /> Know more
                    </div>
                    <div className="room-item__content__link__hoverinfo">
                      <ul>
                        <li>Access by private elevator</li>
                        <li>Stunning panoramic garden views</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>
            </label>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Roomslider;

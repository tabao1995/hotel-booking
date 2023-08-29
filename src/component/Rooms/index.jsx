import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomInfo } from "../../redux/features/slice/roomSlice";
import { Spin } from "antd";
import "./Room.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, generatePath, useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../constain/route";

const Rooms = (props) => {
  const { isLoading, roomState } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [selectedRoomIds, setSelectedRoomIds] = useState([]);
  useEffect(() => {
    dispatch(fetchRoomInfo());
    // eslint-disable-next-line
  }, []);
  const handleRoomCheckboxChange = (roomId) => {
    if (selectedRoomIds.includes(roomId)) {
      setSelectedRoomIds(selectedRoomIds.filter((id) => id !== roomId));
    } else {
      setSelectedRoomIds([...selectedRoomIds, roomId]);
    }
  };

  const localPath = useLocation().pathname;
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate(APP_ROUTE.SUBMIT, {
      state: { roomId: selectedRoomIds, data: props.data },
    });
  };
  const handleSendRoom = (id) => {
    Navigate(APP_ROUTE.BOOKINGPAGE, { state: { roomId: id } });
  };
  return (
    <div className="room">
      {localPath !== "/rooms" && props.data !== undefined ? (
        <div className="Btn-submit">
          <p>Quý Khách vui lòng chọn phòng mình ưng ý rồi Booking ở đây</p>
          <button onClick={() => handleSubmit()}>Booking</button>
        </div>
      ) : (
        <></>
      )}
      {selectedRoomIds === [] ? (
        <div>
          {" "}
          <p> Please Choose Room</p>{" "}
        </div>
      ) : (
        <></>
      )}
      {isLoading ? (
        <Spin></Spin>
      ) : (
        <div className="rooms">
          {roomState.map((item) => (
            <label
              className="room-item"
              key={item.id}
              htmlFor={`checkbox-${item.id}`}
            >
              {selectedRoomIds.includes(item.id) ? (
                <div className="room-item__seclect">
                  <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </div>
              ) : null}
              <div className="room-item__img">
                <img alt="" src={item.img[1]}></img>
                {localPath === "/rooms" && (
                  <div
                    onClick={() => handleSendRoom(item.id)}
                    className="room-item__img__hover"
                  >
                    <p>Booking Now</p>
                  </div>
                )}
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
              {localPath !== "/rooms" ? (
                <input
                  type="checkbox"
                  name="roomId"
                  checked={selectedRoomIds.includes(item.id)}
                  onChange={() => handleRoomCheckboxChange(item.id)}
                  id={`checkbox-${item.id}`}
                />
              ) : (
                <></>
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;

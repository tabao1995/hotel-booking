import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomInfoByName } from "../../redux/features/slice/roomSlice";
import { useLocation, useNavigate } from "react-router";
import "../RoomDetail/RoomDetail.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Comment from "../../component/Comment";
import { APP_ROUTE } from "../../constain/route";
const RoomDetails = () => {
  const dispatch = useDispatch();
  const localPath = useLocation().pathname.split("/")[2];
  const { currentRoomState, isRoomDetailLoading } = useSelector(
    (state) => state.room
  );
  console.log(isRoomDetailLoading);
  useEffect(() => {
    dispatch(fetchRoomInfoByName(localPath));
  }, [dispatch, localPath]);
  const roomDetails = currentRoomState[0];
  const [imgToShow, setImgToShow] = useState(roomDetails?.img[0]);
  const changeImaFunc = (img) => {
    setImgToShow(img);
  };
  const Navigate = useNavigate();
  const handleSendRoom = (id) => {
    Navigate(APP_ROUTE.BOOKINGPAGE, { state: { roomId: id } });
  };
  if (roomDetails === undefined) {
    return <Spin />;
  } else {
    return (
      <div className="roomDetail">
        <div className="roomDetail__title">
          <h2>{roomDetails.name}</h2>
        </div>
        <div className="roomDetail__imglist">
          <div className="roomDetail__imglist__preview">
            {imgToShow === undefined ? (
              <img src={roomDetails.img[1]} alt="" />
            ) : (
              <img src={imgToShow} alt="" />
            )}
          </div>
        </div>
        <div className="roomDetail__info">
          <div className="roomDetail__info__left">
            <div className="roomDetail__info__left__imgshow">
              {roomDetails["img"].map((item) => {
                return (
                  <img
                    onClick={() => changeImaFunc(item)}
                    src={item}
                    alt={roomDetails.name}
                    height={"80px"}
                  />
                );
              })}
            </div>
            <div className="roomDetail__info__left__roomInformation">
              <div>
                <h3>Room Size</h3>
                <div>
                  <p>{roomDetails["Room Information"]["Room size"]}</p>
                </div>
              </div>
              <div>
                <h3>Sleeps</h3>
                <div>
                  <p>{roomDetails["Room Information"]["Sleeps"] + " Guests"}</p>
                </div>
              </div>
              <div>
                <h3>Bed types</h3>
                <div>
                  <p>{roomDetails["Room Information"]["Bed types"]}</p>
                </div>
              </div>
              <div>
                <h3>Bathroom</h3>
                <div>
                  <p>{roomDetails["Room Information"]["Bathroom"]}</p>
                </div>
              </div>
            </div>
            <div className="roomDetail__info__left__roomDetail">
              <h2>Room Detail</h2>
              {roomDetails["Room detail"]}
            </div>
            <div className="roomDetail__info__left__Feature">
              <h2>Room Feature</h2>

              <div className="roomDetail__info__left__RoomFeature">
                <ul>
                  <li>
                    Breakfast:
                    <span>{roomDetails["Room Feature"]["Breakfast"]}</span>
                  </li>
                  <li>
                    Safe:
                    <span>{roomDetails["Room Feature"]["Safe"]}</span>
                  </li>
                  <li>
                    Lift:
                    <span>{roomDetails["Room Feature"]["Lift"]}</span>
                  </li>
                  <li>
                    TV:
                    <span>{roomDetails["Room Feature"]["TV"]}</span>
                  </li>
                  <li>
                    View:
                    <span>{roomDetails["Room Feature"]["View"]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="roomDetail__info__right">
            <div className="roomDetail__info__right__marker">
              <ul class="marker-list">
                <li>Check in: 02:00 PM</li>
                <li>Check out: 11:00 AM</li>
                <li>Transfer Service</li>
                <li>Facilities for the Disabled</li>
                <li>In-Room Dining</li>
              </ul>
              <button onClick={() => handleSendRoom(roomDetails.id)}>
                Book Now
              </button>
              <p>Best Choice - Low Price Guarantee</p>
            </div>
            <div className="roomDetail__info__right__contact">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone} /> 84-236-3847 333/888
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {"reservation@furamavietnam.com "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="roomDetail__title">
          <h2>Room Feedback</h2>
        </div>
        <Comment id={roomDetails["id"]} />
      </div>
    );
  }
};

export default RoomDetails;

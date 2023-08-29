import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRoomInfo } from "../../redux/features/slice/roomSlice";
import "../../component/Rooms/Room.scss";
import { useLocation } from "react-router";
import Rooms from "../../component/Rooms";
import BookingForm from "../../component/BookingForm";

const BoookingPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dataReceived = location.state?.data;
  const roomId = location.state?.roomId;
  console.log(roomId);
  useEffect(() => {
    dispatch(fetchRoomInfo());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {dataReceived === undefined ? (
        <>
          <BookingForm  roomId={roomId} />
        </>
      ) : (
        <div>
          {console.log(dataReceived)}
          <Rooms data={dataReceived} />
        </div>
      )}
    </>
  );
};

export default BoookingPage;

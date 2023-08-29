import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  cancelBooking,
  updateBookingConfirmation,
} from "../../redux/features/slice/bookingSlice"; // Thay thế đúng đường dẫn tới slice của bạn
import { Button } from "antd";

const ConfirmPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Gọi action để cập nhật xác nhận đặt phòng khi trang được tải
    dispatch(updateBookingConfirmation(id));
  }, [dispatch, id]);
  const cancel = (id) => {
    dispatch(cancelBooking(id));
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ textAlign: "center" }} className="Login">
      <p>Your Booking is confirm</p>
      <Button onClick={() => cancel(id)}>Cancel</Button>
    </div>
  );
};

export default ConfirmPage;

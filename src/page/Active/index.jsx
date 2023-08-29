import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { activeUser } from "../../redux/features/slice/AuthSlice";

const Active = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Gọi action để cập nhật xác nhận đặt phòng khi trang được tải
    dispatch(activeUser(id));
  }, [dispatch, id]);

  return (
    <div>
      <p>Confirmation page for booking</p>
    </div>
  );
};

export default Active;

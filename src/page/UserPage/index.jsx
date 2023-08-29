import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelBooking,
  fetchBooking,
  updateBookingConfirmation,
} from "../../redux/features/slice/bookingSlice";
import { Button } from "antd";
import "../UserPage/UserPage.scss";
const UserPage = () => {
  const { userInfo } = useSelector((state) => state.authem);
  const dispatch = useDispatch();

  const { bookingState, isLoading } = useSelector((state) => state.booking);
  useEffect(() => {
    dispatch(fetchBooking());
    // eslint-disable-next-line
  }, [dispatch]);
  const confirmBooking = (id) => {
    dispatch(updateBookingConfirmation(id));
    dispatch(fetchBooking());
  };

  const recentData = userInfo[0];
  const userBooking = bookingState?.filter(
    (item) => item.info.userName === recentData?.userName
  );
  const cancelBook = (id) => {
    dispatch(cancelBooking(id));
  };
  console.log(userBooking);
  return (
    <div className="section userpage">
      {recentData?.isConfirm === false ? (
        <div>Vui Lòng Kích Hoạt Tài Khoản</div>
      ) : (
        <div>
          <p>Tên người dùng: {recentData?.userName}</p>
          <p>Email: {recentData?.email}</p>
          <div>
            Các Phòng đã đặt
            <ul>
              
              {userBooking.map((item) => {
                return (
                  <li>
                    <div>Check-in : {item.CheckIn}</div>
                    <div>Check-out :{item.CheckOut}</div>
                    <div>Phòng: {item.roomID}</div>
                    <div>
                      {item.isConfirm ? (
                        <p> Đã Xác Nhận</p>
                      ) : (
                        <Button
                          onClick={() => confirmBooking(item.confirmCode)}
                        >
                          {" "}
                          Nhấn Để Xác Nhận{" "}
                        </Button>
                      )}
                    </div>
                    {item.isConfirm ? (
                      <div>
                        <Button onClick={() => cancelBook(item.confirmCode)}>
                          {" "}
                          Cancel Booking
                        </Button>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

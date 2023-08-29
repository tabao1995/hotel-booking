import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, InputNumber } from "antd";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import { APP_ROUTE } from "../../constain/route";
import moment from "moment/moment";
import "../BookingForm/BookingForm.scss";
import Rooms from "../Rooms";
const BookingForm = (props) => {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    dateRange: Yup.array()
      .of(Yup.date().required("Please select a date range"))
      .required("Please select a date range"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const localPath = useLocation().pathname;
  const onSubmit = (data) => {
    if (localPath === "/") {
      navigate(APP_ROUTE.BOOKINGPAGE, { state: { data: data } });
    } else {
      navigate(APP_ROUTE.SUBMIT, {
        state: { data: data, roomId: props?.roomId },
      });
    }
  };
  function disabledDate(current) {
    // Get today's date
    const today = moment().startOf("day");

    // Disable the date if it's before today
    return current <= today;
  }
  return (
    <form
      className={localPath === "/" ? "home_bookingForm" : "bookingForm Login"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="dateRange"
        control={control}
        defaultValue={[null, null]}
        render={({ field }) => (
          <div className="Booking-item">
            <label htmlFor="">Choose Date Check-in And Checkout</label>
            <DatePicker.RangePicker
              defaultValue={new Date()}
              value={field.value}
              disabledDate={disabledDate}
              onChange={(dates) => field.onChange(dates)}
            />
          </div>
        )}
      />
      {errors.dateRange && <p>{errors.dateRange.message}</p>}
      <Controller
        name="numberOfPeople"
        control={control}
        defaultValue={1}
        render={({ field }) => (
          <div className="Booking-item">
            <label htmlFor="">How many guest</label>
            <div className="Booking-item__inputNumber">
              <InputNumber
                value={field.value}
                onChange={(value) => field.onChange(value)}
                min={1}
                max={10} // Tùy chỉnh giá trị tối đa cho số người
              />
              <FontAwesomeIcon icon={faUser} /> {/* Icon số người */}
            </div>
          </div>
        )}
      />
      {localPath === "/booking" && props?.roomId === undefined ? (
        <Rooms />
      ) : (
        <></>
      )}
      <div className="Booking-item">
        <button type="submit">Booking</button>
      </div>
    </form>
  );
};

export default BookingForm;

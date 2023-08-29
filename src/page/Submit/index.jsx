import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewBooking } from "../../redux/features/slice/bookingSlice";
import moment from "moment";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";
import { EMAILJS } from "../../constain/emailjs";
import { sha512 } from "js-sha512";
import { useState } from "react";
import { useEffect } from "react";
import { getInfoByID } from "../../redux/features/slice/AuthSlice";

const SubmitPage = () => {
  const location = useLocation();
  const dataReceived = location.state;
  const navigate = useNavigate();

  const sendEmail = (email, name, link) => {
    const templateParams = {
      to_email: email,
      from_name: name,
      message:
        "Hello, this is a to confirm you Booking , Please click this link to confirm this " +
        link,
    };

    emailjs
      .send(
        EMAILJS.SERVICEID, // Replace with your Service ID
        EMAILJS.TEMPLATEID, // Replace with your Template ID
        templateParams,
        EMAILJS.PUBLICKKEY // Replace with your User ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };
  const { userInfo } = useSelector((state) => state.authem);
  // Define the schema validation using Yup
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must not exceed 10 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  // = JSON.parse(localStorage.getItem("userData"))?.username;
  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("userData"))?.username);
  }, [userId]);

  useEffect(() => {
    dispatch(getInfoByID(userId));
    console.log(userId);
  }, [userId, dispatch]);
  const data = {
    userName: userInfo[0]?.userName,
    email: userInfo[0]?.email,
  };

  const onUserSubmit = (data) => {
    dispatch(
      addNewBooking({
        CreatDate: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
        confirmCode: sha512(moment(new Date()).format("DD/MM/YYYY HH:mm:ss")),
        roomID: dataReceived?.roomId,
        CheckIn: moment(dataReceived?.data?.dateRange[0]).format("DD/MM/YYYY"),
        CheckOut: moment(dataReceived?.data?.dateRange[1]).format("DD/MM/YYYY"),
        info: data,
        isConfirm: false,
      })
    );
    navigate("/");
    window.scrollTo(0, 0);
  };
  const onSubmit = (formData) => {
    // Do something with the submitted data, for example, send it to a backend server.
    dispatch(
      addNewBooking({
        CreatDate: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
        confirmCode: sha512(moment(new Date()).format("DD/MM/YYYY HH:mm:ss")),
        roomID: dataReceived?.roomId,
        CheckIn: moment(dataReceived?.data?.dateRange[0]).format("DD/MM/YYYY"),
        CheckOut: moment(dataReceived?.data?.dateRange[1]).format("DD/MM/YYYY"),
        info: formData,
        isConfirm: false,
      })
    );
    const link =
      "http://localhost:3000/confirm/" +
      sha512(moment(new Date()).format("DD/MM/YYYY HH:mm:ss"));
    sendEmail(formData["email"], formData["name"], link);
    alert("Vui Lòng Check Email");
    navigate("/");
    window.scrollTo(0, 0);
  };
  console.log(userInfo);
  if (userInfo.length !== 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          style={{ padding: "10px 50px" }}
          onClick={() => onUserSubmit(data)}
        >
          {" "}
          Booking
        </button>
      </div>
    );
  } else {
    return (
      <form className="section Login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Booking Information</h2>
        <p>
          CheckIn:
          {moment(dataReceived?.data?.dateRange[0]).format("DD/MM/YYYY")}
        </p>
        <p>
          CheckOut:{" "}
          {moment(dataReceived?.data?.dateRange[1]).format("DD/MM/YYYY")},
        </p>
        <p>Number of People: {dataReceived?.data?.numberOfPeople}</p>

        <h2>Contact Information</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">Booking</button>
      </form>
    );
  }
};

export default SubmitPage;

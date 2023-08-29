import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/slice/AuthSlice";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { sha512 } from "js-sha512";
import emailjs from "emailjs-com";
import { EMAILJS } from "../../constain/emailjs";

const Register = () => {
  const sendEmail = (email, link) => {
    const templateParams = {
      to_email: email,
      from_name: "Hotel",
      message:
        "Hello, this is to active you user, Please click this link to confirm this link " +
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
  const schema = yup.object().shape({
    userName: yup.string().required("Username is required").matches(),
    email: yup.string().email().required("Email Is Required"),
    pwd: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
        "Password must be 6 to 20 characters long and include both letters and numbers"
      ),
    "re-pwd": yup
      .string()
      .oneOf([yup.ref("pwd"), null], "Passwords must match"),
  });
  const dispatch = useDispatch();
  const [isDuplicate, setIsDouplicate] = useState(false);

  const methods = useForm({
    defaultValues: {
      userName: "",
      pwd: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const { isRegister } = useSelector((state) => state.authem);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  //   const navigate = useNavigate();
  const onSubmit = async (formState) => {
    const data = {
      userName: formState.userName,
      pwd: sha512(formState.pwd),
      email: formState.email,
      role: "1",
      isConfirm: false,
    };
    try {
      const response = await dispatch(register(data));
      if (response.payload) {
        const link = "http://localhost:3000/active/" + sha512(formState.pwd);
        sendEmail(formState.email, link);
        setIsDouplicate(false);
      } else {
        setIsDouplicate(true);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form className="Login" onSubmit={handleSubmit(onSubmit)}>
      {isDuplicate ? <p>Tài khoản đã được đăng ký</p> : null}
      <div>
        <label htmlFor="">User Name</label>
        <Controller
          control={control}
          name="userName"
          render={({ field, fieldState }) => (
            <div>
              <input {...field} placeholder="Username" />
              {fieldState.invalid && <p>{fieldState.error?.message}</p>}{" "}
            </div>
          )}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <div>
              <input {...field} placeholder="Email" />
              {fieldState.invalid && <p>{fieldState.error?.message}</p>}{" "}
            </div>
          )}
        />
      </div>
      <div>
        <label htmlFor=""> Password</label>
        <Controller
          control={control}
          name="pwd"
          render={({ field, fieldState }) => (
            <div>
              <input type="password" {...field} placeholder="Password" />
              {fieldState.invalid && <p>{fieldState.error?.message}</p>}
            </div>
          )}
        />
      </div>
      <div>
        <label htmlFor="">Re-Password</label>
        <Controller
          control={control}
          name="re-pwd" // Use the same name as in the Yup schema
          render={({ field, fieldState }) => (
            <div>
              <input
                type="password"
                {...field}
                placeholder="Re-enter Password"
              />
              {fieldState.invalid && <p>{fieldState.error?.message}</p>}
            </div>
          )}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

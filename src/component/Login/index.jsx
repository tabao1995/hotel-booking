import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import { useDispatch, useSelector } from "react-redux";
import { checkAuthem } from "../../redux/features/slice/AuthSlice";
import { useNavigate } from "react-router";
import { Spin } from "antd";
import { sha512 } from "js-sha512";
const Login = () => {
  const schema = yup.object().shape({
    userName: yup.string().required("Username is required").matches(),
    pwd: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
        "Password must be 6 to 20 characters long and include both letters and numbers"
      ),
  });
  const dispatch = useDispatch();
  const { isLogin, data, isLoading, isConfirm } = useSelector(
    (state) => state.authem
  );
  const [isRightUser, setIsRightUser] = useState(false);
  const methods = useForm({
    defaultValues: {
      userName: "",
      pwd: "",
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const navigate = useNavigate();
  const onSubmit = async (formState) => {
    console.log(formState.userName, formState.pwd);
    dispatch(
      checkAuthem({
        userName: formState.userName,
        password: sha512(formState.pwd),
      })
    );
    if (isLogin) {
      const currentTime = new Date().getTime(); // Lấy thời gian hiện tại
      const userData = {
        username: formState.userName,
        time: currentTime,
        isConfirm,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      setIsRightUser(true);
    }
  };

  return (
    <form className="Login" onSubmit={handleSubmit(onSubmit)}>
      {isRightUser ? <p>UserName, PassWord is Wrong</p> : null}
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
        {isLoading ? <Spin /> : null}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

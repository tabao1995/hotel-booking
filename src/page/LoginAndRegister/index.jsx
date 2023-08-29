import React from "react";
import Login from "../../component/Login";
import "../LoginAndRegister/LoginAndRegister.scss";
import { Tabs } from "antd";
import Register from "../../component/Register";

const LoginAndResgister = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key); // You can implement logic based on the active tab
  };
  const isLogin = localStorage.getItem("userData");
  console.log(isLogin?.username);
  return (
    <div className="Login">
      {isLogin === null ? (
        <Tabs defaultActiveKey="login" onChange={callback}>
          <TabPane tab="Login" key="login">
            <Login></Login>
          </TabPane>
          <TabPane tab="Register" key="register">
            <Register />
          </TabPane>
        </Tabs>
      ) : (
        <p>Tài Khoản {isLogin?.username} đã được đăng nhập</p>
      )}
    </div>
  );
};

export default LoginAndResgister;

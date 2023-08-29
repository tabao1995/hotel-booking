import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/mainLayout";
import HomePage from "./page/Homepage";
import { APP_ROUTE } from "./constain/route";
import BoookingPage from "./page/Booking";
import ShowAllRooms from "./page/Rooms";
import "./app.scss";
import RoomDetails from "./page/RoomDetail";
import SubmitPage from "./page/Submit";
import LoginAndResgister from "./page/LoginAndRegister";
import ConfirmPage from "./page/ThankYouPage";
import UserPage from "./page/UserPage";
import Active from "./page/Active";
import { useEffect } from "react";
import { getInfoByID } from "./redux/features/slice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchBooking } from "./redux/features/slice/bookingSlice";
import MeetingAndEvent from "./page/MeetingAndEvent";
function App() {
  const [userId, setUserId] = useState("");
  // = JSON.parse(localStorage.getItem("userData"))?.username;
  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("userData"))?.username);
  }, [userId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoByID(userId));
    console.log(userId);
  }, [userId, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={APP_ROUTE.LOGIN} element={<LoginAndResgister />} />
            <Route path="/" element={<HomePage></HomePage>}></Route>

            <Route path={APP_ROUTE.ROOMS} element={<ShowAllRooms />} />
            <Route
              path={APP_ROUTE.BOOKINGPAGE}
              element={<BoookingPage></BoookingPage>}
            ></Route>
            <Route
              path={APP_ROUTE.ROOMDETAIL}
              element={<RoomDetails />}
            ></Route>
            <Route path={APP_ROUTE.SUBMIT} element={<SubmitPage />}></Route>
            <Route
              path={APP_ROUTE.CONFIRM}
              element={<ConfirmPage></ConfirmPage>}
            ></Route>
            <Route path={APP_ROUTE.USERPAGE} element={<UserPage />}></Route>
            <Route path={APP_ROUTE.ACTIVE} element={<Active />}></Route>
            <Route
              path="/meetingandevent"
              element={<MeetingAndEvent />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

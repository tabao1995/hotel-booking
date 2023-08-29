import React, { useEffect } from "react";
import Header from "../Header";
import { Outlet, useLocation } from "react-router";
import HeroBanner from "../HomeBanner";
import Banner from "../Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageInfo } from "../../redux/features/slice/pageSlice";
import Footer from "../Footer/Footer";
const MainLayout = () => {
  const localPath = useLocation().pathname;
  const anotherPage = localPath.split("/")[1];
  const dispatch = useDispatch();

  const { pageState } = useSelector((state) => state.page);
  useEffect(() => {
    if (localPath === "/") {
      dispatch(fetchPageInfo("home"));
    } else {
      dispatch(fetchPageInfo(anotherPage));
    }

    //eslint-disable-next-line
  }, [localPath]);
  return (
    <div>
      <Header></Header>
      {console.log(localPath)}
      {localPath === "/" ? (
        pageState && pageState.length > 0 ? (
          <HeroBanner title={pageState[0].title} img={pageState[0].banner} />
        ) : (
          <div>Loading...</div>
        )
      ) : pageState && pageState.length > 0 ? (
        <Banner title={pageState[0].title} img={pageState[0].banner} />
      ) : (
        <div>Loading...</div>
      )}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;

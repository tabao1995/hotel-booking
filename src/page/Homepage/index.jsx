import { Grid, Col, Row, Slider } from "antd";
import React from "react";
import "../Homepage/Homepage.scss";
import { APP_ROUTE } from "../../constain/route";
import { Link } from "react-router-dom";
import Roomslider from "../../component/Roomslider";
const HomePage = () => {
  return (
    <div className="Home  ">
      <div className="section">
        <Row>
          <Col span={8}>
            <h3>
              KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU
              NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.
            </h3>
          </Col>
          <Col span={8}>
            <img
              width={"100%"}
              src="/src/assets/image/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
              alt=""
            />
          </Col>
          <Col span={8}>
            <p>
              Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà
              Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20
              phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng
              với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều
              được trang trí trang nhã, theo phong cách thiết kế truyền thống
              của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành
              khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp
              nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện
              ảnh và các nhà lãnh đạo kinh doanh quốc tế.
            </p>
          </Col>
        </Row>
        <Row align={"center"}>
          <Col span={14}>
            <h3>CÁC LOẠI PHÒNG</h3>
            <p>
              Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền
              thống Việt Nam kết hợp với phong cách Pháp, 2 tòa nhà 4 tầng có
              hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những khu vườn
              nhiệt đới xanh tươi mát. Ngoài ra, khu nghỉ dưỡng Furama còn cung
              cấp các liệu pháp spa, phòng xông hơi ướt, phòng xông hơi khô,
              dịch vụ mát-xa cạnh hồ bơi, các dịch vụ thể thao dưới nước và các
              lớp tập yoga và Thái Cực Quyền trên bãi biển.
            </p>
          </Col>
        </Row>
        <Row align={"center"}>
          <Link to={APP_ROUTE.ROOMS}> VIEW ALL ROOM</Link>
        </Row>
        <div className="section">
          <Roomslider />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

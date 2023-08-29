import React from "react";
import { Col, Row } from "antd";
import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import { APP_ROUTE } from "../../constain/route";
const Footer = () => {
  return (
    <footer>
      <Row align={"center"} className="container section">
        <Col span={8}>
          <Row>
            <h2>Hướng Dẫn Di Chuyển</h2>

            <p>
              Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
              những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái
              xe ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công nhận:
            </p>
          </Row>
        </Col>
        <Col span={8}>
          <h2>Địa Điểm</h2>
          <table class="place-table">
            <tbody>
              <tr>
                <td>1.</td>
                <td>Cố đô Huế</td>
                <td class="text-right">
                  <span>2 tiếng</span>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Phố cổ Hội An</td>
                <td class="text-right">
                  <span>30 phút</span>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Thánh địa Mỹ Sơn</td>
                <td class="text-right">
                  <span>90 phút</span>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Động Phong Nha</td>
                <td class="text-right">
                  <span>3 tiếng</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col span={8}>
          <h2>Điều hướng</h2>
          <ul>
            <li>
              <Link to={APP_ROUTE.ROOMS}>Rooms</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Meeting</Link>
            </li>
            <li>
              <Link to={"/"}>Liên Hệ</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

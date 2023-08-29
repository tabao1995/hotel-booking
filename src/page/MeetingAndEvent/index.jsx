import { Button, Col, Row, Slider } from "antd";
import React from "react";
const MeetingAndEvent = () => {
  const seting = {
    slideToShow: 1,
    Infinity: true,
  };
  return (
    <div>
      <Row className="section" align={"center"}>
        <Col span={10}>
          <h3>
            ĐỊA ĐIỂM LÝ TƯỞNG CHO CÁC CHƯƠNG TRÌNH HỘI NGHỊ, HỘI THẢO VÀ SỰ KIỆN
          </h3>
          <p>
            Cung hội nghị Quốc tế International Convention Palace (ICP) với
            phòng Hội nghị lớn sức chứa lên tới 1000 khách cùng hơn 10 phòng
            chức năng phụ trợ quy mô từ 50 đến 300 khách được trang bị cơ sở vật
            chất, thiết bị hiện đại, là địa điểm lý tưởng dành cho các đoàn MICE
            tổ chức hội nghị, hội thảo và sự kiện. Không gian ngoài trời trên
            bãi biển hay bên hồ Lagoon giữa khu rừng nhiệt đới rậm rạp, ngập khí
            trời, nước và ánh sáng có thể bay cùng mọi ý tưởng sáng tạo những
            bữa tiệc theo chủ đề độc đáo hay hoạt động team-building truyền cảm
            hứng hay gắn kết cộng đồng. Sân bay trực thăng nằm ngay trên bãi
            biển, cùng hai sân Golf 18 lỗ gần kề, với các dịch vụ ẩm thực, spa,
            giải trí kết hợp nghỉ dưỡng đẳng cấp cung cấp thêm nhiều sự lựa chọn
            cho các nhà tổ chức, khách hàng doanh nghiệp khẳng định vị thế, để
            lại ấn tượng tốt đẹp trong lòng đối tác và khách hàng.
          </p>
          <Button> Đăng Ký</Button>
        </Col>
      </Row>
      <Row className="section">
        <Row>
          <Col span={10}>
            <h4>HỘI NGHỊ & SỰ KIỆN</h4>
            <p>
              Cung hội nghị Quốc tế International Convention Palace (ICP) được
              đưa vào hoạt động chính thức vào năm 2006 nhằm tổ chức Hội nghị
              Cấp cao APEC diễn ra cùng năm. Từ đó trở đi, ICP đã trở thành địa
              điểm của hàng nghìn những sự kiện và hội nghị Quốc tế để lại nhiều
              ấn tượng tốt đẹp cho các quan chức Chính phủ, đơn vị tổ chức sự
              kiện và các khách hàng trong nước và quốc tế. Cùng với đó, sự ra
              đời của Cung hội nghị Quốc tế Ariyana Convention Centre Đà Nẵng
              (ACC) với tổng diện tích xây dựng 5,500 m2 trên nền diện tích đất
              rộng 12,000 m2, sức chứa 2,500 khách, được đồng quản lý bởi đội
              ngũ nhân viên tổ chức sự kiện giàu kinh nghiệm của Furama Resort
              Đà Nẵng, gắn kết và tạo thành quần thể MICE lớn nhất Việt Nam, đã
              nâng tầm vị thế cho khu nghỉ mát biển ẩm thực Furama và để lại
              thêm một dấu ấn lịch sử đáng trân trọng khi tiếp tục tổ chức thành
              công sự kiện Hội nghị Cấp cao APEC 2017 ngay tại Cung hội nghị
              Quốc tế Ariyana (ACC) ngay khi vừa mới khai trương chỉ trong vòng
              một tháng.{" "}
            </p>
            <Button> Đăng Ký</Button>
          </Col>
          <Col span={10}>
            <img
              width={"100%"}
              alt=""
              src="/src/assets/image/Meetingandevent.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <img
              width={"100%"}
              alt=""
              src="/src/assets/image/Meetingandevent.jpg"
            />
          </Col>
          <Col span={10}>
            <h4>HỘI NGHỊ & SỰ KIỆN</h4>
            <p>
              Cung hội nghị Quốc tế International Convention Palace (ICP) được
              đưa vào hoạt động chính thức vào năm 2006 nhằm tổ chức Hội nghị
              Cấp cao APEC diễn ra cùng năm. Từ đó trở đi, ICP đã trở thành địa
              điểm của hàng nghìn những sự kiện và hội nghị Quốc tế để lại nhiều
              ấn tượng tốt đẹp cho các quan chức Chính phủ, đơn vị tổ chức sự
              kiện và các khách hàng trong nước và quốc tế. Cùng với đó, sự ra
              đời của Cung hội nghị Quốc tế Ariyana Convention Centre Đà Nẵng
              (ACC) với tổng diện tích xây dựng 5,500 m2 trên nền diện tích đất
              rộng 12,000 m2, sức chứa 2,500 khách, được đồng quản lý bởi đội
              ngũ nhân viên tổ chức sự kiện giàu kinh nghiệm của Furama Resort
              Đà Nẵng, gắn kết và tạo thành quần thể MICE lớn nhất Việt Nam, đã
              nâng tầm vị thế cho khu nghỉ mát biển ẩm thực Furama và để lại
              thêm một dấu ấn lịch sử đáng trân trọng khi tiếp tục tổ chức thành
              công sự kiện Hội nghị Cấp cao APEC 2017 ngay tại Cung hội nghị
              Quốc tế Ariyana (ACC) ngay khi vừa mới khai trương chỉ trong vòng
              một tháng.{" "}
            </p>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default MeetingAndEvent;

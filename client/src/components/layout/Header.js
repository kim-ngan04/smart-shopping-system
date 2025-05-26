import { Row, Col, Dropdown, Avatar, Menu } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { useData } from "../../context/AppContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { user, setUser } = useData();
  const { pathname } = useLocation(); // Lấy đường dẫn hiện tại

  // Hàm xác định tên trang dựa trên đường dẫn
  const namePage = (input) => {
    if (input === "nhom") return "Danh sách nhóm";
    if (input.includes("nhom/")) return "Chi tiết nhóm";
    if (input === "di-cho") return "Đi chợ";
    if (input === "nau-an") return "Nấu ăn";
    if (input === "kho") return "Kho";
    if (input === "cong-thuc") return "Công thức nấu ăn";
    if (input === "mon-do") return "Cài đặt món đồ";
    if (input === "quan-tri") return "Quản trị tài khoản";
    else return "Trang không xác định";
  };

  const handleLogout = () => {
    setUser(null);
    window.location.href = "/dang-nhap";
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Row gutter={[24, 0]} align="middle">
      <Col span={18}>
        <h2 style={{ margin: 0, fontWeight: "bold", color: "#000000" }}>
          {namePage(pathname.replace("/", ""))} 
        </h2>
      </Col>
      <Col span={6} style={{ textAlign: "right" }}>
      <span style={{ marginRight: "10px", fontWeight: "bold", color: "#1890ff" }}>
          {user?.[0]?.username || "Người dùng"} {/* Hiển thị tên người dùng */}
        </span>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ backgroundColor: "#1890ff", cursor: "pointer" }}
          />
        </Dropdown>
      </Col>
    </Row>
  );
}

export default Header;
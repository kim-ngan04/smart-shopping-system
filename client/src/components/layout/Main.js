import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Layout, Drawer } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import { useData } from "../../context/AppContext";

const { Content, Sider } = Layout;

function Main({ children }) {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");

  const { pathname } = useLocation();
  const { user } = useData();
  const history = useHistory();

  useEffect(() => {
    if (user === null) {
      history.push("/dang-nhap");
    }
  }, [user, history]);

  useEffect(() => {
    if (pathname === "rtl") {
      setPlacement("left");
    } else {
      setPlacement("right");
    }
  }, [pathname]);

  return (
    <Layout
      className="layout-dashboard"
      style={{
        minHeight: "100vh",
        background: "#f0f2f5", // Màu nền tổng thể
      }}
    >
      {/* Sidebar */}
      <Drawer
        title={false}
        placement={placement === "right" ? "left" : "right"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        width={250}
        className="drawer-sidebar"
      >
        <Sidenav color={sidenavColor} />
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={250}
        theme="light"
        style={{
          background: "#ffffff", // Sidebar màu trắng
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Hiệu ứng đổ bóng
        }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
  
      {/* Nội dung chính */}
      <Layout style={{ marginLeft: "40px" }}> {/* Đảm bảo nội dung sát với sidebar */}
        <Header />
        <Content
          style={{
            margin: "10px", // Giảm khoảng cách giữa nội dung và các thành phần khác
            padding: "15px", // Giảm padding bên trong nội dung
            background: "#ffffff", // Nền trắng cho nội dung
            borderRadius: "8px", // Bo góc
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Hiệu ứng đổ bóng
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
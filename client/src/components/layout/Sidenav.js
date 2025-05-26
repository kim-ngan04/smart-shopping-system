import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useData } from "../../context/AppContext";
import {
  TeamOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  TagsOutlined
} from "@ant-design/icons";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const { user } = useData();

  return (
    <>
      <div className="brand" style={{ textAlign: "center", padding: "20px 0" }}>
        <img src={logo} alt="Logo" style={{ width: "150px" }} />
        <h3 style={{ marginTop: "10px", fontWeight: "bold", color: "#000000" }}>
          Hệ thống đi chợ tiện lợi BKSTX
        </h3>
      </div>
      <hr />
      <Menu theme="light" mode="inline" style={{ fontSize: "16px" }}>
        <Menu.Item key="1" icon={<TeamOutlined style={{ fontSize: "18px" }} />}>
          <NavLink to="/nhom">Nhóm</NavLink>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<ShoppingCartOutlined style={{ fontSize: "18px" }} />}
        >
          <NavLink to="/di-cho">Đi chợ</NavLink>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<DatabaseOutlined style={{ fontSize: "18px" }} />}
        >
          <NavLink to="/kho">Kho</NavLink>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<FileTextOutlined style={{ fontSize: "18px" }} />}
        >
          <NavLink to="/cong-thuc">Công thức nấu ăn</NavLink>
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<AppstoreOutlined style={{ fontSize: "18px" }} />}
        >
          <NavLink to="/nau-an">Nấu ăn</NavLink>
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={<TagsOutlined style={{ fontSize: "18px" }} />}
        >
          <NavLink to="/mon-do">Món đồ</NavLink>
        </Menu.Item>
        {user && user[0] && user[0].role === 1 && (
          <Menu.Item
            key="7"
            icon={<SettingOutlined style={{ fontSize: "18px" }} />}
          >
            <NavLink to="/quan-tri">Quản trị</NavLink>
          </Menu.Item>
        )}
      </Menu>
    </>
  );
}

export default Sidenav;
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
} from "antd";
import { useData } from "../context/AppContext";
import logo from "../assets/images/logo.png"; // Import logo
import imagelogin from "../assets/images/imagelogin.jpg"; // Import hình ảnh bên trái

const { Title } = Typography;
const { Content } = Layout;

const SignIn = () => {
  const { handleLogin, handleSignup } = useData(); // Thêm hàm xử lý đăng ký
  const [isRegister, setIsRegister] = useState(false); // Trạng thái chuyển đổi giữa Đăng nhập và Đăng ký

  const onFinishLogin = (values) => {
    const { username, password } = values;
    handleLogin(username, password); // Gọi hàm handleLogin với giá trị từ form
  };

  const onFinishRegister = (values) => {
    const { username, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    handleSignup(username, password); // Gọi hàm handleSignup với giá trị từ form
  };

  return (
    <Layout
      className="layout-default layout-signin"
      style={{
        height: "100vh", // Đảm bảo chiều cao luôn bằng 100% viewport
        overflow: "hidden", // Ẩn nội dung vượt quá màn hình
        padding: 0,
        margin: 0,
      }}
    >
      <Content
        className="signin"
        style={{
          height: "100vh", // Đảm bảo chiều cao luôn bằng 100% viewport
          overflow: "hidden", // Ẩn nội dung vượt quá màn hình
          padding: 0,
          margin: 0,
        }}
      >
        <Row style={{ height: "100%" }}>
          {/* Cột bên trái: Hình ảnh */}
          <Col
            xs={0}
            sm={0}
            md={12}
            lg={14}
            style={{
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${imagelogin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Col>

          {/* Cột bên phải: Form đăng nhập/đăng ký */}
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: "20px",
            }}
          >
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "150px", marginBottom: "20px" }}
                />
                <Title level={3} style={{ marginBottom: "10px" }}>
                  BKSTX
                </Title>
                <Title level={5} className="font-regular text-muted">
                  {isRegister
                    ? "Tạo tài khoản mới để sử dụng hệ thống"
                    : "Hệ thống thông minh giúp quản lý đi chợ tiện lợi"}
                </Title>
              </div>
              {isRegister ? (
                <Form
                  layout="vertical"
                  className="row-col"
                  onFinish={onFinishRegister}
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Form.Item
                    className="username"
                    label="Tên người dùng"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập tên người dùng của bạn",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập tên người dùng" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Mật khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập mật khẩu của bạn",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Nhập mật khẩu" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Hãy xác nhận mật khẩu của bạn",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Xác nhận mật khẩu" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        backgroundColor: "#1890ff",
                        borderColor: "#1890ff",
                      }}
                    >
                      Đăng ký
                    </Button>
                  </Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="link"
                      onClick={() => setIsRegister(false)}
                    >
                      Đã có tài khoản? Đăng nhập
                    </Button>
                  </div>
                </Form>
              ) : (
                <Form
                  layout="vertical"
                  className="row-col"
                  onFinish={onFinishLogin}
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Form.Item
                    className="username"
                    label="Tên người dùng"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập tên đăng nhập của bạn",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập tên người dùng" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Mật khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập mật khẩu của bạn",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Nhập mật khẩu" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        backgroundColor: "#1890ff",
                        borderColor: "#1890ff",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="link"
                      onClick={() => setIsRegister(true)}
                    >
                      Chưa có tài khoản? Đăng ký
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SignIn;
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Space,
  Table,
  Button,
  Tag,
  Typography,
  message,
} from "antd";
import { useData } from "../../context/AppContext";
import AddUserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";
import { BACK_END_URL } from "../../context/const";

const { Title } = Typography;

const Admin = () => {
  const { userNormal, fetchUserNormal } = useData();

  useEffect(() => {
    fetchUserNormal();
  }, []);

  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
      key: "role",
      render: (item) => {
        if (item === 0) return <Tag color="blue">Dân thường</Tag>;
        return <Tag color="red">Admin</Tag>;
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Space>
          <Button
            onClick={() => handleUpdate(record)}
            size="small"
            type="primary"
            style={{ marginRight: 5 }}
          >
            Sửa
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            size="small"
            type="danger"
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const [addModalVisible, setAddModalVisible] = useState(false);
  const handleAdd = () => {
    setAddModalVisible(true);
  };

  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const handleUpdate = (data) => {
    setSelectedMarket(data);
    setUpdateModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}admin/account/delete/${id}`);
      const data = await res.json();
      if (data.success) {
        fetchUserNormal();
        message.success("Xóa thành công");
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="circlebox tablespace mb-24"
            title={
              <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                Danh sách tài khoản
              </Title>
            }
            extra={
              <Button type="primary" onClick={handleAdd}>
                Thêm tài khoản
              </Button>
            }
          >
            {userNormal.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={userNormal}
                className="ant-border-space"
                rowKey={(record) => record.id}
              />
            ) : (
              <Typography.Text type="secondary">
                Không có dữ liệu
              </Typography.Text>
            )}
          </Card>
        </Col>
        {addModalVisible && (
          <AddUserModal
            editModalVisible={addModalVisible}
            setEditModalVisible={setAddModalVisible}
          />
        )}
        {updateModalVisible && (
          <UpdateUserModal
            editModalVisible={updateModalVisible}
            setEditModalVisible={setUpdateModalVisible}
            selectedMarket={selectedMarket}
          />
        )}
      </Row>
    </div>
  );
};

export default Admin;
import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Row,
  Col,
  Button,
  Tag,
  Space,
  Typography,
  Empty,
} from "antd";
import { useData } from "../../context/AppContext";
import ThemNhomModal from "./ThemNhomModal";
import { Link, useHistory } from "react-router-dom";

const { Title } = Typography;

const Nhom = () => {
  const { user, group, fetchNhom } = useData();
  const history = useHistory();
  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleAdd = () => {
    setAddModalVisible(true);
  };

  useEffect(() => {
    fetchNhom();
  }, []);

  const columns = [
    {
      title: "Tên nhóm",
      dataIndex: "name",
      key: "name",
      width: "20%",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Mô tả",
      dataIndex: "desc",
      key: "desc",
      width: "30%",
      render: (text) => <span style={{ color: "#595959" }}>{text}</span>,
    },
    {
      title: "Số lượng thành viên",
      dataIndex: "members",
      key: "members",
      render: (item) => <span>{item.length}</span>,
    },
    {
      title: "Vai trò",
      dataIndex: "members",
      key: "members",
      render: (item) => {
        const userId = user[0].id;
        const result = item.filter((i) => i.id === userId && i.isLeader === 1);

        if (result.length === 1) return <Tag color="green">Trưởng nhóm</Tag>;
        return <Tag color="blue">Thành viên</Tag>;
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              history.push(`/nhom/${record.id}`);
            }}
          >
            Chi tiết
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="circlebox tablespace mb-24"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            title={
              <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                Danh sách các nhóm tham gia
              </Title>
            }
            extra={
              <Button type="primary" onClick={handleAdd}>
                Thêm nhóm
              </Button>
            }
          >
            {group.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={group}
                className="ant-border-space"
                rowKey={(record) => record.id}
              />
            ) : (
              <Empty
                description="Không có dữ liệu"
                style={{ padding: "20px 0" }}
              />
            )}
          </Card>
        </Col>
        {addModalVisible && (
          <ThemNhomModal
            editModalVisible={addModalVisible}
            setEditModalVisible={setAddModalVisible}
          />
        )}
      </Row>
    </div>
  );
};

export default Nhom;
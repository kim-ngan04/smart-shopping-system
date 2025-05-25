import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Space,
  Table,
  Button,
  Image,
  Tag,
  Typography,
  message,
  Empty
} from "antd";
import { useData } from "../../context/AppContext";
import ThemMonDoModal from "./ThemMonDoModal";
import { BACK_END_URL } from "../../context/const";

const { Title } = Typography;

const MonDo = () => {
  const { user, monDo, fetchMonDo } = useData();

  useEffect(() => {
    fetchMonDo(user[0].id);
  }, []);

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (item) => (
        <Image
          style={{ borderRadius: "50%" }}
          width={50}
          height={50}
          src={item}
        />
      ),
      width: "10%",
    },
    {
      title: "Tên món đồ",
      dataIndex: "name",
      key: "name",
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Loại",
      dataIndex: "type",
      key: "type",
      render: (item) => {
        if (item === 0) return <Tag color="purple">Thực phẩm</Tag>;
        return <Tag color="orange">Món ăn</Tag>;
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Button
          size="small"
          onClick={() => handleDelete(record.id)}
          type="danger"
        >
          Xóa
        </Button>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}food/delete/${id}`);
      const data = await res.json();
      if (data.success === true) {
        fetchMonDo(user[0].id);
        message.success("Xóa thành công");
      }
    } catch (error) {
      message.warning("Thất bại", error.message);
    }
  };

  const [addModalVisible, setAddModalVisible] = useState(false);
  const handleAdd = () => {
    setAddModalVisible(true);
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
                Danh sách các món đồ
              </Title>
            }
            extra={
              <Button type="primary" onClick={handleAdd}>
                Thêm món đồ
              </Button>
            }
          >
            {monDo.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={monDo}
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
          <ThemMonDoModal
            editModalVisible={addModalVisible}
            setEditModalVisible={setAddModalVisible}
          />
        )}
      </Row>
    </div>
  );
};

export default MonDo;
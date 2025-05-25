// 



import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Space,
  Table,
  Button,
  Avatar,
  Tag,
  Typography,
  message,
  Empty,
  Input,
} from "antd";
import { useData } from "../../context/AppContext";
import moment from "moment";
import { BACK_END_URL } from "../../context/const";

const { Title } = Typography;
const { Search } = Input;

const Kho = () => {
  const { kho, user, fetchKho } = useData();
  const [searchText, setSearchText] = useState("");
  const [filteredKho, setFilteredKho] = useState([]);

  useEffect(() => {
    if (user && user[0] && user[0].id) {
      fetchKho(user[0].id);
    }
  }, [user]);

  useEffect(() => {
    // Lọc dữ liệu dựa trên searchText
    const filteredData = kho.filter((item) =>
      item.food.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredKho(filteredData);
  }, [kho, searchText]);

  const columns = [
    {
      title: "Món đồ",
      dataIndex: "food",
      key: "food",
      render: (item) => (
        <Space>
          <Avatar src={item.image} />
          <span style={{ fontWeight: "bold" }}>{item.name}</span>
        </Space>
      ),
    },
    {
      title: "Loại",
      dataIndex: "food",
      key: "food",
      render: (item) => {
        if (item.type === 0) return <Tag color="purple">Thực phẩm</Tag>;
        return <Tag color="orange">Món ăn</Tag>;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "expire",
      key: "expire",
      render: (item) => {
        const daysLeft = moment(item).diff(moment(), "days");
        if (daysLeft < 3) {
          return (
            <>
              <Tag color="red">Còn {daysLeft} ngày</Tag> 🔥
            </>
          );
        }
        return `Còn ${daysLeft} ngày`;
      },
      sorter: (a, b) => moment(a.expire) - moment(b.expire),
    },
    {
      title: "Nơi để",
      dataIndex: "state",
      key: "state",
      render: (item) => {
        if (item === 0) return <Tag color="default">Để ngoài</Tag>;
        return <Tag color="blue">Để tủ lạnh</Tag>;
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Space>
          {user && user[0] && user[0].role === 1 && (
            <Button
              size="small"
              onClick={() => handleDelete(record.id)}
              type="danger"
            >
              Xóa
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}store/delete/${id}`);
      const data = await res.json();
      if (data.success === true) {
        fetchKho(user[0].id);
        message.success("Xóa thành công");
      }
    } catch (error) {
      message.warning("Thất bại", error.message);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
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
                Danh sách món đồ trong kho
              </Title>
            }
            extra={
              <Space>
                {user && user[0] && user[0].role === 1 && (
                  <Button type="primary" onClick={() => {}}>
                    Thêm món đồ
                  </Button>
                )}
                <Search
                  placeholder="Tìm kiếm món đồ"
                  onSearch={handleSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: 200 }}
                />
              </Space>
            }
          >
            {filteredKho.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={filteredKho}
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
      </Row>
    </div>
  );
};

export default Kho;
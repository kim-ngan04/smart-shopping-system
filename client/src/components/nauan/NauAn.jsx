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
  DatePicker,
  Empty,
  message,
} from "antd";
import { useData } from "../../context/AppContext";
import moment from "moment";
import { BACK_END_URL } from "../../context/const";

const { Title } = Typography;

const NauAn = () => {
  const { user, nauAn, congThuc, fetchNauAn, fetchCongThuc, fetchKho, kho } =
    useData();

  useEffect(() => {
    fetchNauAn(user[0].id);
    fetchCongThuc(user[0].id);
    fetchKho(user[0].id);
  }, []);

  const columns = [
    {
      title: "Món ăn",
      dataIndex: "idRecipe",
      key: "idRecipe",
      render: (item) => {
        if (congThuc.length !== 0) {
          const food = congThuc.find((i) => i.id === item).food;
          return (
            <Space>
              <Avatar src={food.image} />
              <span style={{ fontWeight: "bold" }}>{food.name}</span>
            </Space>
          );
        } else return "";
      },
    },
    {
      title: "Nguyên liệu",
      dataIndex: "idRecipe",
      key: "idRecipe",
      render: (item) => {
        if (congThuc.length !== 0) {
          const materials = congThuc.find((i) => i.id === item).materials;
          return (
            <Space direction="vertical">
              {materials.map((material) => {
                const numOfMaterialInKho = searchInKho(material.name);
                const isThieu = numOfMaterialInKho < material.quantity;

                return (
                  <Space key={material.name}>
                    <Avatar src={material.image} />
                    <span>{material.name}</span>
                    <Tag color="blue">
                      x{material.quantity} {material.unit}
                    </Tag>
                    {isThieu && (
                      <Tag color="red">
                        Thiếu {material.quantity - numOfMaterialInKho}{" "}
                        {material.unit}
                      </Tag>
                    )}
                  </Space>
                );
              })}
            </Space>
          );
        } else return "";
      },
    },
    {
      title: "Ngày nấu",
      dataIndex: "date",
      key: "date",
      render: (item) => moment(item).format("YYYY-MM-DD"),
    },
    {
      title: "Bữa nấu",
      dataIndex: "state",
      key: "state",
      render: (item) => {
        if (item === 0) return <Tag color="orange">Bữa sáng</Tag>;
        if (item === 1) return <Tag color="blue">Bữa trưa</Tag>;
        if (item === 2) return <Tag color="green">Bữa tối</Tag>;
        return "";
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Space>
          <Button
            size="small"
            type="danger"
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => handleUpdateStatus(record.id)}
          >
            Đã nấu
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}cook/delete/${id}`);
      const data = await res.json();
      if (data.success === true) {
        fetchNauAn(user[0].id);
        message.success("Xóa thành công");
      }
    } catch (error) {
      message.warning("Thất bại", error.message);
    }
  };

  const handleUpdateStatus = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}cook/update/${id}`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.success === true) {
        fetchNauAn(user[0].id);
        message.success("Cập nhật trạng thái thành công!");
      } else {
        message.error("Cập nhật trạng thái thất bại!");
      }
    } catch (error) {
      message.error("Lỗi: " + error.message);
    }
  };

  const searchInKho = (name) => {
    const result = kho.filter(
      (item) =>
        item.food.name === name && diffInDays(item.expire, moment()) >= 0
    );
    return result.reduce((init, item) => init + item.quantity, 0);
  };

  function diffInDays(timeString1, timeString2) {
    const time1 = moment(timeString1);
    const time2 = moment(timeString2);
    return time1.diff(time2, "days");
  }

  const [selectedDate, setSelectedDate] = useState(moment());
  const filteredData = nauAn.filter((item) => {
    const itemDate = moment(item.date);
    return selectedDate ? itemDate.isSame(selectedDate, "day") : true;
  });

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="circlebox tablespace mb-24"
            title={
              <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                Danh sách món dự định nấu
              </Title>
            }
            extra={
              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            }
          >
            {filteredData.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={filteredData}
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

export default NauAn;
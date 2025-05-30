import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Space,
  Table,
  Button,
  Avatar,
  DatePicker,
  Typography,
  Empty,
  Tag,
  message,
} from "antd";
import { useData } from "../../context/AppContext";
import moment from "moment";
import ThemDiChoModal from "./ThemDiChoModal";
import MuaDiChoModal from "./MuaDiChoModal";
import ShareModal from "./ShareModal";

const { Title } = Typography;

const DiCho = () => {
  const { user, diCho, fetchDiCho, fetchMonDo } = useData();

  useEffect(() => {
    fetchDiCho(user[0].id);
    fetchMonDo(user[0].id);
  }, []);

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
      title: "Ngày phải mua",
      dataIndex: "dateToBuy",
      key: "dateToBuy",
      render: (item) => moment(item).format("YYYY-MM-DD"),
    },
    {
      title: "Ngày mua",
      dataIndex: "dateBought",
      key: "dateBought",
      render: (item) =>
        item ? (
          moment(item).format("YYYY-MM-DD")
        ) : (
          <Tag color="default">Chưa có</Tag>
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "state",
      key: "state",
      render: (item) => {
        if (item === 0) return <Tag color="orange">Chưa mua</Tag>;
        if (item === 1) return <Tag color="green">Đã mua</Tag>;
        return "";
      },
    },
    {
      title: "Người mua",
      dataIndex: "userBought",
      key: "userBought",
      render: (item) => {
        if (item.id === null) return <Tag color="default">Chưa có</Tag>;
        if (item.id === user[0]?.id) return "Tôi";
        return item.username;
      },
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <Space>
          <Button
            onClick={() => handleMua(record.id)}
            size="small"
            type="primary"
            disabled={record.state === 1}
          >
            Mua
          </Button>
          <Button
            onClick={() => handleShare(record.id)}
            size="small"
            type="primary"
            style={{
              background: record.state === 1 ? "#d9d9d9" : "green",
              borderColor: record.state === 1 ? "#d9d9d9" : "green",
            }}
            disabled={record.state === 1}
          >
            Chia sẻ
          </Button>
        </Space>
      ),
    },
  ];

  const [selectedDate, setSelectedDate] = useState(moment());
  const filteredData = diCho.filter((item) => {
    const itemDate = moment(item.dateToBuy);
    return selectedDate ? itemDate.isSame(selectedDate, "day") : true;
  });

  const [addModalVisible, setAddModalVisible] = useState(false);
  const handleAdd = () => {
    setAddModalVisible(true);
  };

  const [muaModalVisible, setMuaModalVisible] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const handleMua = (idMarket) => {
    setSelectedMarket(idMarket);
    setMuaModalVisible(true);
  };

  const [shareModalVisible, setShareModalVisible] = useState(false);
  const handleShare = async (id) => {
    setSelectedMarket(id);
    setShareModalVisible(true);
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
                Danh sách các món đồ cần mua
              </Title>
            }
            extra={
              <Space>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
                <Button type="primary" onClick={handleAdd}>
                  Thêm món đồ
                </Button>
              </Space>
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
        {addModalVisible && (
          <ThemDiChoModal
            editModalVisible={addModalVisible}
            setEditModalVisible={setAddModalVisible}
          />
        )}
        {muaModalVisible && (
          <MuaDiChoModal
            editModalVisible={muaModalVisible}
            setEditModalVisible={setMuaModalVisible}
            selectedMarket={selectedMarket}
          />
        )}
        {shareModalVisible && (
          <ShareModal
            editModalVisible={shareModalVisible}
            setEditModalVisible={setShareModalVisible}
            selectedMarket={selectedMarket}
          />
        )}
      </Row>
    </div>
  );
};

export default DiCho;
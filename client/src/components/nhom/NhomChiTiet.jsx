import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Row,
  Col,
  Button,
  Input,
  Modal,
  Descriptions,
  Tag,
  Space,
  message,
  Popconfirm,
  Avatar,
  DatePicker,
  Typography,
  Empty,
} from "antd";
import { useData } from "../../context/AppContext";
import ThemThanhVienModal from "./ThemThanhVienModal";
import MuaDiChoModal from "../dicho/MuaDiChoModal";
import moment from "moment";
import { BACK_END_URL } from '../../context/const';

const { Title } = Typography;

const NhomChiTiet = (props) => {
  const { id } = props.match.params;
  const { user, group, fetchNhom, diChoShare, fetchDiChoShare } = useData();
  const members = group.find((i) => i.id == id)?.members;

  const columnMembers = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "42%", // Tăng chiều rộng để hiển thị tên đầy đủ
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>, // Làm nổi bật tên
    },
    {
      title: "Vai trò",
      key: "role",
      width: "43%", // Đảm bảo đủ không gian cho tag
      render: (item) => {
        if (item.isLeader) return <Tag color="green">Trưởng nhóm</Tag>;
        return <Tag color="blue">Thành viên</Tag>;
      },
    },
    {
      title: "Thao tác",
      key: "actions",
      width: "15%", // Đảm bảo nút "Xóa" không bị tràn
      render: (text, record) => {
        const idLeader = members.filter((item) => item.isLeader)[0]?.id;
        if (idLeader === user[0]?.id && record.id !== idLeader) {
          return (
            <Popconfirm
              title="Xóa thành viên"
              description="Bạn có chắc chắn muốn xóa?"
              okText="OK"
              cancelText="Hủy"
              onConfirm={() => handleDeleteThanhVien(record.id, parseInt(id))}
            >
              <Button size="small" type="danger">
                Xóa
              </Button>
            </Popconfirm>
          );
        }
        return null;
      },
    },
  ];

  const handleDeleteThanhVien = async (idUser, idGroup) => {
    try {
      const options = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUser, idGroup }),
      };
      const res = await fetch(`${BACK_END_URL}member/delete`, options);
      const data = await res.json();
      if (data.success === true) {
        fetchNhom();
        message.success("Xóa thành công");
      } else {
        message.warning("Xóa thất bại");
      }
    } catch (error) {
      message.warning("Lỗi: " + error.message);
    }
  };

  const columnsShare = [
    {
      title: "Món đồ",
      dataIndex: "food",
      key: "food",
      render: (item) => (
        <Space direction="horizontal">
          <Avatar src={item.image}></Avatar>
          <span>{item.name}</span>
        </Space>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      width: "8%",
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
        item ? moment(item).format("YYYY-MM-DD") : <Tag color="default">Chưa có</Tag>,
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
      render: (text, record) => {
        if (record.state === 0)
          return (
            <div onClick={(e) => e.stopPropagation()}>
              <Button
                onClick={() => handleMua(record.id)}
                size="small"
                style={{ marginLeft: 5 }}
                type="primary"
              >
                Mua
              </Button>
            </div>
          );
        return (
          <div onClick={(e) => e.stopPropagation()}>
            <Button
              disabled
              onClick={() => handleMua(record.id)}
              size="small"
              style={{ marginLeft: 5 }}
              type="primary"
            >
              Mua
            </Button>
          </div>
        );
      },
    },
  ];

  const [addThanhVienModalVisible, setAddThanhVienModalVisible] = useState(false);
  const handleAddThanhVien = () => {
    setAddThanhVienModalVisible(true);
  };

  const [muaModalVisible, setMuaModalVisible] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const handleMua = (idMarket) => {
    setSelectedMarket(idMarket);
    setMuaModalVisible(true);
  };

  useEffect(() => {
    fetchDiChoShare(parseInt(id));
  }, []);

  const [selectedDate, setSelectedDate] = useState(moment());
  const filteredData = diChoShare.filter((item) => {
    const itemDate = moment(item.dateToBuy);
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
              <>
                <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                  Danh sách chia sẻ các món đồ cần mua
                  <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  style={{ marginLeft: "460px" }}
                />
                </Title>
                
              </>
            }
          >
            {filteredData.length > 0 ? (
              <Table
                pagination={false}
                columns={columnsShare}
                dataSource={filteredData}
                className="ant-border-space"
              />
            ) : (
              <Empty description="Không có dữ liệu" style={{ padding: "20px 0" }} />
            )}
          </Card>
        </Col>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="circlebox tablespace mb-24"
            title={
              <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                Thành viên
              </Title>
            }
            extra={
              <Button type="primary" onClick={handleAddThanhVien}>
                Thêm thành viên
              </Button>
            }
          >
            {members?.length > 0 ? (
              <Table
                pagination={false}
                columns={columnMembers}
                dataSource={members}
                className="ant-border-space"
              />
            ) : (
              <Empty description="Không có thành viên" style={{ padding: "20px 0" }} />
            )}
          </Card>
        </Col>
      </Row>
      {addThanhVienModalVisible && (
        <ThemThanhVienModal
          editModalVisible={addThanhVienModalVisible}
          setEditModalVisible={setAddThanhVienModalVisible}
          idGroup={id}
        />
      )}
      {muaModalVisible && (
        <MuaDiChoModal
          editModalVisible={muaModalVisible}
          setEditModalVisible={setMuaModalVisible}
          selectedMarket={selectedMarket}
        />
      )}
    </div>
  );
};

export default NhomChiTiet;
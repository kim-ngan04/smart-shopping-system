import React, { useEffect, useState } from "react";
import { useData } from "../../context/AppContext";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Space,
  Table,
  Button,
  Avatar,
  Modal,
  Select,
  Input,
  InputNumber,
  Form,
  Tag,
  Typography,
  Empty,
  message,
  Tooltip,
} from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import NauModal from "./NauModal";
import { BACK_END_URL } from '../../context/const';

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const CongThuc = () => {
  const { user, congThuc, fetchCongThuc, monDo, topRecipes, fetchTopRecipes } = useData();

  useEffect(() => {
    fetchCongThuc(user[0]?.id);
    fetchTopRecipes(user[0]?.id);
  }, []);

  const monAn = monDo.filter((item) => item.type === 1);
  const thucPham = monDo.filter((item) => item.type === 0);

  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    desc: "",
    food: "",
    materials: [],
  });
  const [materialValues, setMaterialValues] = useState([]);

  const handleOk = async () => {
    try {
      const values = {
        name: formValues.name,
        desc: formValues.desc,
        idUser: user[0].id,
        idFood: formValues.food,
        materials: materialValues,
      };
      const res = await fetch(`${BACK_END_URL}recipe/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success) {
        await fetchCongThuc(user[0].id);
        message.success("Tạo công thức thành công!");
        setModalVisible(false);
        setFormValues({ name: "", desc: "", food: "", materials: [] });
        setMaterialValues([]);
      }
    } catch (error) {
      message.error("Lỗi: " + error.message);
    }
  };
  
  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFoodChange = (value) => {
    setFormValues({ ...formValues, food: value });
  };

  const handleMaterialChange = (value, index) => {
    const newMaterialValues = [...materialValues];
    newMaterialValues[index] = { ...newMaterialValues[index], id: value };
    setMaterialValues(newMaterialValues);
  };

  const handleQuantityChange = (value, index) => {
    const newMaterialValues = [...materialValues];
    newMaterialValues[index] = { ...newMaterialValues[index], quantity: value };
    setMaterialValues(newMaterialValues);
  };

  const handleAddMaterial = () => {
    setMaterialValues([...materialValues, { id: "", quantity: 0 }]);
  };

  const handleRemoveMaterial = (index) => {
    const newMaterialValues = [...materialValues];
    newMaterialValues.splice(index, 1);
    setMaterialValues(newMaterialValues);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACK_END_URL}recipe/delete/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      if (data.success) {
        message.success("Xóa công thức thành công!");
        await fetchCongThuc(user[0].id); 
      } else {
        message.error("Lỗi: " + data.message);
      }
    } catch (error) {
      message.error("Lỗi: " + error.message);
    }
  };

  const columns = [
    {
      title: "Tên công thức",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Mô tả",
      dataIndex: "desc",
      key: "desc",
      ellipsis: true,
    },
    {
      title: "Món nấu",
      dataIndex: "food",
      key: "food",
      render: (item) => (
        <Space>
          <Avatar src={item.image} />
          <span>{item.name}</span>
        </Space>
      ),
    },
    {
      title: "Nguyên liệu",
      dataIndex: "materials",
      key: "materials",
      render: (items) => (
        <div>
          {items && items.map((item) => (
            <Tooltip
              key={item.id}
              title={`${item.name} x${item.quantity} ${item.unit}`}
            >
              <Tag color="blue" style={{ marginBottom: "5px" }}>
                {item.name}
              </Tag>
            </Tooltip>
          ))}
        </div>
      ),
    },
    {
      title: "Thao tác",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => handleNau(record.id)}
          >
            Tạo dự định nấu
          </Button>
          <Button
            size="small"
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const [nauModalVisible, setNauModalVisible] = useState(false);
  const [idRecipe, setIdRecipe] = useState(null);
  const handleNau = (id) => {
    setIdRecipe(id);
    setNauModalVisible(true);
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
                Danh sách các công thức
              </Title>
            }
            extra={
              <Button type="primary" onClick={() => setModalVisible(true)}>
                Thêm công thức
              </Button>
            }
          >
            {congThuc.length > 0 ? (
              <Table
                pagination={false}
                columns={columns}
                dataSource={congThuc}
                className="ant-border-space"
                rowKey={(record) => record.id}
              />
            ) : (
              <Empty description="Không có công thức" />
            )}
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="circlebox tablespace mb-24"
            title={
              <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                Top công thức được yêu thích nhất
              </Title>
            }
          >
            {topRecipes.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={topRecipes}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip />
                    <Legend />
                    <Bar dataKey="use" fill="#FF7F50" name="Số lần sử dụng" />
                  </BarChart>
                </ResponsiveContainer>
              </>
            ) : (
              <Empty description="Không có dữ liệu" />
            )}
          </Card>
        </Col>
      </Row>
      <Modal
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Thêm công thức mới"
      >
        <Form layout="vertical">
          <Form.Item label="Tên công thức">
            <Input
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              name="desc"
              value={formValues.desc}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Món ăn">
            <Select value={formValues.food} onChange={handleFoodChange}>
              {monAn.map((item) => (
                <Option key={item.id} value={item.id}>
                  <Avatar src={item.image} />
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Nguyên liệu">
            {materialValues.map((material, index) => (
              <Row key={index} gutter={8} align="middle">
                <Col span={16}>
                  <Select
                    value={material.id}
                    onChange={(value) => handleMaterialChange(value, index)}
                  >
                    {thucPham.map((item) => (
                      <Option key={item.id} value={item.id}>
                        <Avatar src={item.image} />
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Col span={6}>
                  <InputNumber
                    value={material.quantity}
                    onChange={(value) => handleQuantityChange(value, index)}
                  />
                </Col>
                <Col span={2}>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveMaterial(index)}
                  />
                </Col>
              </Row>
            ))}
            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={handleAddMaterial}
              style={{ marginTop: "10px" }}
            >
              Thêm nguyên liệu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {nauModalVisible && (
        <NauModal
          editModalVisible={nauModalVisible}
          setEditModalVisible={setNauModalVisible}
          idRecipe={idRecipe}
        />
      )}
    </div>
  );
};

export default CongThuc;
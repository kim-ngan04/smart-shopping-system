import React from 'react';
import { message, Form, Modal, DatePicker, Select, InputNumber, Space, Avatar } from "antd";
import { BACK_END_URL } from '../../context/const';
import { useData } from '../../context/AppContext';
import moment from 'moment';

const ThemDiChoModal = (props) => {
    const {
        editModalVisible, 
        setEditModalVisible,
    } = props;

    const { user, fetchDiCho, monDo } = useData();

    const AddForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
            <Modal visible={visible} title="Thêm mới" okText="Lưu" cancelText="Hủy" onCancel={onCancel} onOk={() => {
                form.validateFields().then((values) => {
                    form.resetFields();
                    onCreate(values);
                }).catch((info) => {
                    console.log('Validate Failed:', info);
                });
            }}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Chọn món đồ"
                        name="idFood"
                        rules={[
                            { required: true, message: "Hãy điền trường này" }
                        ]}
                    >
                        <Select
                            options={monDo
                                .filter(item => item.type === 0) // Filter only "Thực Phẩm"
                                .map(item => {
                                    return {
                                        label: (
                                            <Space direction='horizontal'>
                                                <Avatar size={25} src={item.image}></Avatar>
                                                <span>{item.name}</span>
                                            </Space>
                                        ),
                                        value: item.id
                                    };
                                })}
                        ></Select>
                    </Form.Item>
                    <Space>
                        <Form.Item
                            label="Số lượng"
                            name="quantity"
                            rules={[
                                { required: true, message: "Hãy điền trường này" }
                            ]}
                            initialValue={1}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item
                            label="Ngày mua"
                            name="dateToBuy"
                            rules={[
                                { required: true, message: "Hãy điền trường này" }
                            ]}
                            initialValue={moment()}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Space>
                </Form>
            </Modal>
        );
    };

    const handleAddSubmit = async (values) => {
        const fetchData = async () => {
            try {
                values.idUser = user[0].id;
                values.dateToBuy = values.dateToBuy.format("YYYY-MM-DD");
                const res = await fetch(`${BACK_END_URL}market/add`, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                });
                const data = await res.json();
                if (data.success === true) {
                    await fetchDiCho(user[0].id);
                    message.success('Tạo thành công!');
                    setEditModalVisible(false);
                }
            } catch (error) {
                console.error(error);
            }
        };

        await fetchData();
    };

    return (
        <AddForm
            visible={editModalVisible}
            onCreate={handleAddSubmit}
            onCancel={() => {
                setEditModalVisible(false);
            }}
        />
    );
};

export default ThemDiChoModal;
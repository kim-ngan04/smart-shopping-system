import React from 'react';
import { message, Button, Form, Input, Modal } from "antd";
import { BACK_END_URL } from '../../context/const';
import { useData } from '../../context/AppContext';

const ThemThanhVienModal = (props) => {
    const {
        editModalVisible, 
        setEditModalVisible,
        idGroup
    } = props;

    const { fetchNhom } = useData();

    const AddForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
            <Modal visible={visible} title="Thêm thành viên mới" okText="Lưu" cancelText="Hủy" onCancel={onCancel} onOk={() => {
                form.validateFields().then((values) => {
                    onCreate(values);
                }).catch((info) => {
                    console.log('Validate Failed:', info);
                });
            }}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Tên username của thành viên"
                        name="username"
                        rules={[
                            { required: true, message: "Hãy điền trường này" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    const handleAddSubmit = async (values) => {
        const fetchData = async () => {
            try {
                values.idGroup = idGroup;
                const res = await fetch(`${BACK_END_URL}member/add`, {
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
                    await fetchNhom();
                    message.success('Thêm thành công!');
                    setEditModalVisible(false);
                } else {
                    message.warning('Không tìm thấy thành viên!');
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

export default ThemThanhVienModal;
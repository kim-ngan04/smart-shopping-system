import { createContext, useContext, useState } from "react";
import { message } from 'antd';
import { BACK_END_URL } from "./const";
import { Link, useHistory } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState([]);
    const [monDo, setMonDo] = useState([]);
    const [congThuc, setCongThuc] = useState([]);
    const [diCho, setDiCho] = useState([]);
    const [kho, setKho] = useState([]);
    const [nauAn, setNauAn] = useState([]);
    const [diChoShare, setDiChoShare] = useState([]);
    const [userNormal, setUserNormal] = useState([]);
    const [topRecipes, setTopRecipes] = useState([]);

    const history = useHistory();

    const handleSignup = async (username, password) => {
        if (!username || !password) {
            message.warning("Chưa nhập đủ thông tin");
            return;
        }
    
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            };
            const res = await fetch(`${BACK_END_URL}signup`, options);
            const data = await res.json();
    
            if (!data.success) {
                message.warning(data.message || "Đăng ký thất bại");
                return;
            }
    
            message.success("Đăng ký thành công");
            history.push("/dang-nhap");
        } catch (error) {
            console.error(error);
            message.error("Có lỗi xảy ra, vui lòng thử lại");
        }
    };
    const handleLogin = async (username, password) => {
        if (!username || !password) {
            message.warning("Chưa nhập đủ");
            return;
        }

        try {
            const options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            };
            const res = await fetch(`${BACK_END_URL}login`, options);
            const data = await res.json();

            if (data.data.length === 0) {
                message.warning('Không tồn tại tài khoản');
                return;
            }

            setUser(data.data);
            message.success('Đăng nhập thành công');
            history.push('/nhom');
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchNhom = async () => {
        try {
            const res = await fetch(`${BACK_END_URL}group/${user[0].id}`);
            const data = await res.json();
            setGroup(data.data.filter(item => {
                const itemMemberIds = item.members.map(i => i.id);
                return itemMemberIds.includes(user[0].id);
            }));
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchMonDo = async (userId) => {
        try {
            const options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId }),
            };
            const res = await fetch(`${BACK_END_URL}food`, options);
            const data = await res.json();
            setMonDo(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchCongThuc = async (userId) => {
        try {
            const options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId }),
            };
            const res = await fetch(`${BACK_END_URL}recipe`, options);
            const data = await res.json();
            setCongThuc(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchDiCho = async (userId) => {
        try {
            const res = await fetch(`${BACK_END_URL}market/${userId}`);
            const data = await res.json();
            setDiCho(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchKho = async (userId) => {
        try {
            const res = await fetch(`${BACK_END_URL}store/${userId}`);
            const data = await res.json();
            setKho(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchNauAn = async (userId) => {
        try {
            const res = await fetch(`${BACK_END_URL}cook/${userId}`);
            const data = await res.json();
            setNauAn(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchDiChoShare = async (groupId) => {
        try {
            const res = await fetch(`${BACK_END_URL}group/market-share/${groupId}`);
            const data = await res.json();
            setDiChoShare(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchUserNormal = async () => {
        try {
            const res = await fetch(`${BACK_END_URL}admin/account`);
            const data = await res.json();
            setUserNormal(data.data);
        } catch (error) {
            console.log(error.message);
            message.error(error.message);
        }
    };

    const fetchTopRecipes = async (userId) => {
        try {
            const res = await fetch(`${BACK_END_URL}recipe/top/${userId}`);
            const data = await res.json();
            if (data.success) {
                setTopRecipes(data.data);
            } else {
                message.error("Không thể lấy danh sách công thức yêu thích!");
            }
        } catch (error) {
            console.error(error.message);
            message.error("Lỗi: " + error.message);
        }
    };


    return (
        <AppContext.Provider value={{
            user,
            setUser,
            handleLogin,
            handleSignup,
            group,
            fetchNhom,
            fetchMonDo,
            monDo,
            setMonDo,
            fetchCongThuc,
            congThuc,
            fetchDiCho,
            diCho,
            fetchKho,
            kho,
            fetchNauAn,
            nauAn,
            fetchDiChoShare,
            diChoShare,
            fetchUserNormal,
            userNormal,
            fetchTopRecipes,
            topRecipes,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
export const useData = () => {
    return useContext(AppContext);
};
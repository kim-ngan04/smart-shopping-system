const connection = require('../db')

module.exports = {
    getAll: async (req, res) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', (error, results, fields) => {
                if (error) {
                    console.error('Error getting users: ', error);
                    reject(error);
                } else {
                    return res.json({ success: true, data: results })
                }
            });
        });
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.json({ success: false, data: [], message: "Thiếu username hoặc password" })
        }

        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
                if (error) {
                    console.error('', error);
                    reject(error);
                } else {
                    return res.json({ success: true, data: results })
                }
            });
        })
    },
    signup: async (req, res) => {
        const { username, password } = req.body;
    
        // Kiểm tra nếu thiếu thông tin
        if (!username || !password) {
            return res.json({ success: false, message: "Thiếu username hoặc password" });
        }
    
        // Kiểm tra xem username đã tồn tại chưa
        return new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM user WHERE username = ? ',
                [username],
                (error, results) => {
                    if (error) {
                        console.error('Error checking user existence: ', error);
                        reject(error);
                    } else if (results.length > 0) {
                        return res.json({ success: false, message: "Username đã tồn tại" });
                    } else {
                        // Thêm người dùng mới vào cơ sở dữ liệu
                        connection.query(
                            'INSERT INTO user (username, password , name) VALUES (?, ?, ?)',
                            [username, password, username],
                            (error, results) => {
                                if (error) {
                                    console.error('Error inserting user: ', error);
                                    reject(error);
                                } else {
                                    return res.json({ success: true, message: "Đăng ký thành công" });
                                }
                            }
                        );
                    }
                }
            );
        });
    }
}
# README - Dự án ITSS-20242

## Giới thiệu dự án
Đây là ứng dụng web full-stack được xây dựng bằng React.js cho frontend và Node.js cho backend. Dự án là một ứng dụng liên quan đến ẩm thực, cho phép người dùng xem và quản lý các món ăn.

## Cấu trúc dự án
```
ITSS-20242/
├── client/          # Ứng dụng frontend React.js
├── server/          # Ứng dụng backend Node.js
├── food.sql         # File cơ sở dữ liệu
└── README.md        # File hướng dẫn này
```

## Yêu cầu hệ thống
Trước khi bắt đầu, hãy đảm bảo bạn có:
- Node.js (phiên bản 14 trở lên) đã cài đặt
- npm hoặc yarn đã cài đặt
- MySQL đã cài đặt và đang chạy
- Git đã cài đặt

## Cài đặt và chạy dự án

### 1. Clone repository
```bash
git clone https://github.com/BaoHust2004/ITSS-20242.git
cd ITSS-20242
```

### 2. Cài đặt cơ sở dữ liệu
1. Tạo database MySQL tên `food`:
   ```bash
   mysql -u root -p
   CREATE DATABASE food;
   exit
   ```

2. Import dữ liệu từ file SQL:
   ```bash
   mysql -u root -p food < food.sql
   ```

### 3. Cài đặt backend
1. Di chuyển vào thư mục server:
   ```bash
   cd server
   ```

2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```

3. Khởi chạy backend server:
   ```bash
   npm start
   ```
   Server sẽ chạy tại `http://localhost:5000`.

### 4. Cài đặt frontend
1. Mở cửa sổ terminal mới và di chuyển vào thư mục client:
   ```bash
   cd ../client
   ```

2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```

3. Khởi chạy ứng dụng frontend:
   ```bash
   npm start
   ```
   Ứng dụng React sẽ tự động mở trong trình duyệt tại `http://localhost:3000`.

## Hướng dẫn sử dụng
- Truy cập frontend tại `http://localhost:3000`
- Backend API có sẵn tại `http://localhost:5000`
- Sử dụng ứng dụng để xem, tìm kiếm và quản lý các món ăn

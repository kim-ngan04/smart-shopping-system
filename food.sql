-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 01, 2025 lúc 03:04 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `food`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cook`
--

CREATE TABLE `cook` (
  `id` bigint(20) NOT NULL,
  `idRecipe` bigint(20) NOT NULL,
  `state` bigint(20) NOT NULL,
  `date` date NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `status` varchar(20) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cook`
--

INSERT INTO `cook` (`id`, `idRecipe`, `state`, `date`, `idUser`, `status`) VALUES
(1, 1, 1, '2025-05-01', 2, 'pending'),
(2, 2, 1, '2025-05-02', 3, 'pending'),
(3, 3, 1, '2025-05-03', 2, 'pending'),
(4, 4, 1, '2025-05-04', 3, 'pending'),
(5, 5, 1, '2025-05-05', 2, 'pending'),
(6, 6, 1, '2025-05-06', 3, 'pending'),
(7, 7, 1, '2025-05-07', 2, 'pending'),
(8, 8, 1, '2025-05-08', 3, 'pending'),
(9, 9, 1, '2025-05-09', 2, 'pending'),
(10, 10, 1, '2025-05-10', 3, 'pending'),
(11, 11, 1, '2025-05-11', 2, 'pending'),
(12, 12, 1, '2025-05-12', 3, 'pending'),
(13, 13, 1, '2025-05-13', 2, 'pending'),
(14, 14, 1, '2025-05-14', 3, 'pending'),
(15, 15, 1, '2025-05-15', 2, 'pending'),
(16, 16, 1, '2025-05-16', 3, 'pending'),
(17, 17, 1, '2025-05-17', 4, 'pending'),
(18, 18, 1, '2025-05-18', 5, 'pending'),
(19, 19, 1, '2025-05-19', 6, 'pending'),
(20, 20, 1, '2025-05-20', 2, 'pending'),
(21, 11, 0, '2025-06-01', 2, 'done'),
(22, 9, 2, '2025-06-01', 2, 'done'),
(23, 7, 2, '2025-06-01', 2, 'done'),
(24, 5, 1, '2025-06-01', 2, 'done'),
(25, 3, 2, '2025-06-01', 2, 'done'),
(26, 1, 1, '2025-06-01', 2, 'done'),
(27, 7, 1, '2025-06-01', 2, 'done'),
(28, 21, 1, '2025-06-01', 2, 'done');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `food`
--

CREATE TABLE `food` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `createdByAdmin` smallint(6) NOT NULL,
  `image` longtext NOT NULL,
  `idUser` bigint(20) DEFAULT NULL,
  `type` smallint(6) NOT NULL,
  `isDeleted` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `food`
--

INSERT INTO `food` (`id`, `name`, `unit`, `createdByAdmin`, `image`, `idUser`, `type`, `isDeleted`) VALUES
(1, 'Gạo', 'kg', 1, 'https://thoxuan.vn/file/download/636767034.html?b=0', NULL, 0, 0),
(2, 'Thịt lợn', 'kg', 1, 'data:image/jpeg;base64,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', NULL, 0, 0),
(3, 'Cá', 'kg', 1, 'https://bazaarvietnam.vn/wp-content/uploads/2023/05/harper-bazaar-ca-chep-ky-gi-7.jpg', NULL, 0, 0),
(4, 'Rau muống', 'kg', 1, 'https://lh3.googleusercontent.com/Yjr46vcV8-zXGaD88d-3_VV34Lcttz5Je5kzzlP4__C6HaCVPw82CZhOsqvF9QusGFr1Gbqb9wNDYglguUJhB9jA5tE1NY5a', NULL, 0, 0),
(5, 'Cà chua', 'kg', 1, 'https://product.hstatic.net/200000423303/product/ca-chua-bee-cherry-huu-co_2afe5b08b1f242809cac54171701fff4_1024x1024.jpg', NULL, 0, 0),
(6, 'Cơm chiên trứng', 'phần', 0, 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_23_638336575818808816_cach-lam-com-chien-trung-thumb.jpg', 2, 1, 0),
(7, 'Thịt lợn kho', 'phần', 0, 'https://cdn.tgdd.vn/2021/03/CookProduct/1-1200x676-52.jpg', 2, 1, 0),
(8, 'Rau muống xào tỏi', 'phần', 0, 'https://beptruong.edu.vn/wp-content/uploads/2021/04/rau-muong-xao-toi-1.jpg', 2, 1, 0),
(9, 'Canh cà chua trứng', 'phần', 0, 'https://www.huongnghiepaau.com/wp-content/uploads/2024/07/cach-nau-canh-trung-ca-chua.jpg', 2, 1, 0),
(10, 'Khoai tây chiên', 'phần', 0, 'https://texaschickenvn.com/vnt_upload/product/07_2023/Khoai_tay_chien_co_lon.png', 2, 1, 0),
(11, 'Thịt bò', 'kg', 0, 'https://fohlafood.vn/cdn/shop/articles/thit-bo-nhap-khau.jpg?v=1719286176', 2, 0, 0),
(12, 'Nấm rơm', 'kg', 0, 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_2_26_638445075264978018_nam-rom-nau-gi-ngon-9.jpg', 2, 0, 0),
(13, 'Nước mắm', 'lít', 0, 'https://product.hstatic.net/200000356473/product/nuoc_man_1_0a3a8a6450014bde96dee6f53ea97b80_1024x1024.jpg', 2, 0, 0),
(14, 'Canh bắp cải', 'phần', 0, 'https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/03.2024/120324-mon-canh-bap-cai-cuon-thit-buffet-poseidon-02-2.jpg', 3, 1, 0),
(15, 'Cá chiên', 'phần', 0, 'https://cdn2.fptshop.com.vn/unsafe/2023_10_31_638343474864019884_ca-chien-1.jpeg', 3, 1, 0),
(16, 'Đậu phụ', 'miếng', 0, 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/3/16/889870/Cach-Lam-Dau-Phu-Tai.jpeg', 3, 0, 0),
(17, 'Hành lá', 'kg', 0, 'https://fatechme.com/uploads/xechohang/hanhla.jpg', 3, 0, 0),
(18, 'Tôm rim', 'phần', 0, 'https://haisanloccantho.com/wp-content/uploads/2024/11/thuong-thuc-mon-tom-rim-man-ngot.jpg', 3, 1, 0),
(19, 'Mực xào', 'phần', 0, 'https://daynauan.info.vn/wp-content/uploads/2020/02/muc-xao-chua-ngot.jpg', 4, 1, 0),
(20, 'Mì gói xào', 'phần', 0, 'https://minhngan.vn/assets/uploads/2022/11/Mi-goi-xao-bo-1.png', 5, 1, 0),
(21, 'Bún tươi', 'kg', 0, 'https://production-cdn.pharmacity.io/digital/original/plain/blog/giai_dap_bun_tuoi_bao_nhieu_calo_an_bun_tuoi_co_beo_khong4_8710af33d4-1.jpg', 2, 0, 0),
(22, 'Thịt gà', 'kg', 0, 'https://file.hstatic.net/200000585055/file/cach-nhan-biet-thit-ga-hong-the-gioi-thit-3a_-min_76e6c249a7bb4d72bab28b0410d8a0e5_grande.jpeg', 2, 0, 0),
(23, 'Cải thảo', 'kg', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KiO9DO42iqJswLnAmGRqty2fLldy6Pne8Q&s', 2, 0, 0),
(24, 'Hạt tiêu', 'kg', 0, 'https://cerafoods.com/wp-content/uploads/2023/09/Hat-tieu-tay-nguyen-1.jpg', 2, 0, 0),
(25, 'Nấm kim châm', 'gói', 0, 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/19/photo-1655456362258-16554563647291898456211-1655607472210-16556074723031445388236.jpg', 2, 0, 0),
(26, 'Bún bò Huế', 'phần', 0, 'https://lh6.googleusercontent.com/Ki9Rl1th4Bl24Zs3RI2Fn9iv9Hks-3H9MpchIqy65oE2UICdSUh5uHT7M8XX26xGj4u9EfYosiRYLNoC3zFcIrDIWxooyNQ43qm7KJ5KN1elKHFZDBUEC4y-FkGu2g', 2, 1, 0),
(27, 'Gà chiên mắm', 'phần', 0, 'https://file.hstatic.net/200000700229/article/ga-chien-mam-toi-ot-1_de869c540b654e87bf796911f7c25885.jpg', 2, 1, 0),
(28, 'Canh nấm kim châm', 'phần', 0, 'https://bientauvannguyenlieu.giadinhnestle.com.vn/sites/default/files/styles/wide/public/recipes-photo/recipe_1691729532.gif?itok=6cccYdcs', 2, 1, 0),
(29, 'Thịt bò xào hành tây', 'phần', 0, 'https://cdn.eva.vn/upload/2-2019/images/2019-05-07/4-cach-lam-thit-bo-xao-hanh-tay-nhanh-gon-ngon-mieng-thit-bo-xao-hanh-tay-10-1557215213-777-width543height415.jpg', 2, 1, 0),
(30, 'Chả lụa hấp', 'phần', 0, 'https://cdn.tgdd.vn/2020/08/CookProduct/12-1200x676.jpg', 2, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group`
--

CREATE TABLE `group` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group`
--

INSERT INTO `group` (`id`, `name`, `desc`) VALUES
(1, 'Gia đình Bao-Ngan', 'Nhóm gia đình của Bao và Ngan'),
(2, 'Nhóm bạn bè', 'Nhóm của Trang, Xuan, Son');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groupmarket`
--

CREATE TABLE `groupmarket` (
  `id` bigint(20) NOT NULL,
  `idGroup` bigint(20) NOT NULL,
  `idMarket` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `groupmarket`
--

INSERT INTO `groupmarket` (`id`, `idGroup`, `idMarket`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 2, 17),
(18, 2, 18),
(19, 2, 19),
(20, 1, 20);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `market`
--

CREATE TABLE `market` (
  `id` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `dateToBuy` date NOT NULL,
  `dateBought` date DEFAULT NULL,
  `idUserBought` bigint(20) DEFAULT NULL,
  `state` smallint(6) NOT NULL,
  `quantity` int(11) NOT NULL,
  `idFood` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `market`
--

INSERT INTO `market` (`id`, `idUser`, `dateToBuy`, `dateBought`, `idUserBought`, `state`, `quantity`, `idFood`) VALUES
(1, 2, '2025-05-01', '2025-05-01', 2, 1, 2, 1),
(2, 3, '2025-05-01', '2025-05-01', 3, 1, 1, 2),
(3, 2, '2025-05-02', '2025-05-02', 2, 1, 1, 3),
(4, 3, '2025-05-02', '2025-05-02', 3, 1, 1, 4),
(5, 2, '2025-05-03', '2025-05-03', 2, 1, 1, 5),
(6, 3, '2025-05-03', '2025-05-03', 3, 1, 0, 6),
(7, 2, '2025-05-04', '2025-05-04', 2, 1, 0, 7),
(8, 3, '2025-05-04', '2025-05-04', 3, 1, 0, 8),
(9, 2, '2025-05-05', '2025-05-05', 2, 1, 1, 9),
(10, 3, '2025-05-05', '2025-05-05', 3, 1, 6, 10),
(11, 2, '2025-05-06', '2025-05-06', 2, 1, 1, 11),
(12, 3, '2025-05-06', '2025-05-06', 3, 1, 1, 12),
(13, 2, '2025-05-07', '2025-05-07', 2, 1, 1, 13),
(14, 3, '2025-05-07', '2025-05-07', 3, 1, 1, 14),
(15, 2, '2025-05-08', '2025-05-08', 2, 1, 1, 15),
(16, 3, '2025-05-08', '2025-05-08', 3, 1, 1, 16),
(17, 4, '2025-05-09', '2025-05-09', 4, 1, 1, 19),
(18, 5, '2025-05-09', '2025-05-09', 5, 1, 5, 20),
(19, 6, '2025-05-10', '2025-05-10', 6, 1, 1, 17),
(20, 2, '2025-05-10', '2025-05-10', 2, 1, 1, 18);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `member`
--

CREATE TABLE `member` (
  `id` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idGroup` bigint(20) NOT NULL,
  `isLeader` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `member`
--

INSERT INTO `member` (`id`, `idUser`, `idGroup`, `isLeader`) VALUES
(1, 2, 1, 1),
(2, 3, 1, 0),
(3, 4, 2, 1),
(4, 5, 2, 0),
(5, 6, 2, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `recipe`
--

CREATE TABLE `recipe` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `idFood` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `use` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `desc`, `idFood`, `idUser`, `use`) VALUES
(1, 'Cơm chiên', 'Cơm chiên với trứng và rau', 1, 2, 1),
(2, 'Thịt lợn kho', 'Thịt lợn kho với nước mắm', 2, 3, 0),
(3, 'Cá chiên', 'Cá chiên giòn với gừng', 3, 2, 1),
(4, 'Rau muống xào tỏi', 'Rau muống xào với tỏi', 4, 3, 0),
(5, 'Canh cà chua', 'Canh cà chua với trứng', 5, 2, 1),
(6, 'Thịt gà kho gừng', 'Thịt gà kho với gừng', 9, 3, 0),
(7, 'Trứng chiên', 'Trứng chiên với hành tây', 10, 2, 2),
(8, 'Canh bắp cải', 'Canh bắp cải với tôm', 12, 3, 0),
(9, 'Khoai tây chiên', 'Khoai tây chiên giòn', 13, 2, 1),
(10, 'Cà rốt luộc', 'Cà rốt luộc đơn giản', 14, 3, 0),
(11, 'Sữa chua', 'Sữa chua nhà làm', 11, 2, 1),
(12, 'Tôm rim', 'Tôm rim mặn ngọt', 19, 3, 0),
(13, 'Mì gói xào', 'Mì gói xào với rau', 20, 2, 0),
(14, 'Canh cá', 'Canh cá nấu với cà chua', 3, 3, 0),
(15, 'Thịt lợn xào hành', 'Thịt lợn xào hành tây', 2, 2, 0),
(16, 'Rau muống luộc', 'Rau muống luộc chấm nước mắm', 4, 3, 0),
(17, 'Gà chiên mắm', 'Gà chiên với nước mắm', 9, 4, 0),
(18, 'Trứng luộc', 'Trứng luộc đơn giản', 10, 5, 0),
(19, 'Tôm chiên', 'Tôm chiên giòn', 19, 6, 0),
(20, 'Canh khoai tây', 'Canh khoai tây với cà rốt', 13, 2, 0),
(21, 'test', 'test', 29, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `recipematerial`
--

CREATE TABLE `recipematerial` (
  `id` bigint(20) NOT NULL,
  `idMaterial` bigint(20) NOT NULL,
  `idRecipe` bigint(20) NOT NULL,
  `quantity` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `recipematerial`
--

INSERT INTO `recipematerial` (`id`, `idMaterial`, `idRecipe`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 10, 1, 2),
(3, 4, 1, 1),
(4, 2, 2, 1),
(5, 15, 2, 0),
(6, 3, 3, 1),
(7, 8, 3, 0),
(8, 4, 4, 1),
(9, 7, 4, 0),
(10, 5, 5, 1),
(11, 10, 5, 2),
(12, 9, 6, 1),
(13, 8, 6, 0),
(14, 10, 7, 3),
(15, 6, 7, 0),
(16, 12, 8, 1),
(17, 19, 8, 0),
(18, 13, 9, 1),
(19, 14, 10, 1),
(20, 11, 11, 1),
(21, 11, 21, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `store`
--

CREATE TABLE `store` (
  `id` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idMarket` bigint(20) NOT NULL,
  `expire` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `state` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `store`
--

INSERT INTO `store` (`id`, `idUser`, `idMarket`, `expire`, `quantity`, `state`) VALUES
(1, 2, 1, '2025-05-28', 2, 1),
(2, 3, 2, '2025-05-28', 1, 1),
(3, 2, 3, '2025-05-28', 1, 1),
(4, 3, 4, '2025-05-28', 1, 1),
(5, 2, 5, '2025-05-28', 1, 1),
(6, 3, 6, '2025-05-28', 0, 1),
(8, 3, 8, '2025-06-01', 0, 1),
(10, 3, 10, '2025-05-15', 6, 1),
(11, 2, 11, '2025-05-15', 1, 1),
(12, 3, 12, '2025-05-10', 1, 1),
(13, 2, 13, '2025-05-15', 1, 1),
(14, 3, 14, '2025-05-28', 1, 1),
(16, 3, 16, '2025-06-01', 1, 1),
(17, 4, 17, '2025-05-28', 1, 1),
(18, 5, 18, '2025-06-01', 5, 1),
(19, 6, 19, '2025-06-01', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `name`) VALUES
(1, 'admin', '1', 1, 'admin'),
(2, 'bao', '1', 0, 'bao'),
(3, 'ngan', '1', 0, 'ngan'),
(4, 'trang', '1', 0, 'trang'),
(5, 'xuan', '1', 0, 'xuan'),
(6, 'son', '1', 0, 'son');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cook`
--
ALTER TABLE `cook`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cook_idrecipe_foreign` (`idRecipe`),
  ADD KEY `cook_iduser_foreign` (`idUser`);

--
-- Chỉ mục cho bảng `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_iduser_foreign` (`idUser`);

--
-- Chỉ mục cho bảng `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `groupmarket`
--
ALTER TABLE `groupmarket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupmarket_idgroup_foreign` (`idGroup`),
  ADD KEY `groupmarket_idmarket_foreign` (`idMarket`);

--
-- Chỉ mục cho bảng `market`
--
ALTER TABLE `market`
  ADD PRIMARY KEY (`id`),
  ADD KEY `market_iduser_foreign` (`idUser`),
  ADD KEY `market_idfood_foreign` (`idFood`),
  ADD KEY `market_iduserbought_foreign` (`idUserBought`);

--
-- Chỉ mục cho bảng `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_idgroup_foreign` (`idGroup`),
  ADD KEY `member_iduser_foreign` (`idUser`);

--
-- Chỉ mục cho bảng `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipe_idfood_foreign` (`idFood`),
  ADD KEY `recipe_iduser_foreign` (`idUser`);

--
-- Chỉ mục cho bảng `recipematerial`
--
ALTER TABLE `recipematerial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipematerial_idrecipe_foreign` (`idRecipe`),
  ADD KEY `recipematerial_idmaterial_foreign` (`idMaterial`);

--
-- Chỉ mục cho bảng `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`),
  ADD KEY `store_idmarket_foreign` (`idMarket`),
  ADD KEY `store_iduser_foreign` (`idUser`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cook`
--
ALTER TABLE `cook`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `food`
--
ALTER TABLE `food`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `group`
--
ALTER TABLE `group`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `groupmarket`
--
ALTER TABLE `groupmarket`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `market`
--
ALTER TABLE `market`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `member`
--
ALTER TABLE `member`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `recipematerial`
--
ALTER TABLE `recipematerial`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `store`
--
ALTER TABLE `store`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cook`
--
ALTER TABLE `cook`
  ADD CONSTRAINT `cook_idrecipe_foreign` FOREIGN KEY (`idRecipe`) REFERENCES `recipe` (`id`),
  ADD CONSTRAINT `cook_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `groupmarket`
--
ALTER TABLE `groupmarket`
  ADD CONSTRAINT `groupmarket_idgroup_foreign` FOREIGN KEY (`idGroup`) REFERENCES `group` (`id`),
  ADD CONSTRAINT `groupmarket_idmarket_foreign` FOREIGN KEY (`idMarket`) REFERENCES `market` (`id`);

--
-- Các ràng buộc cho bảng `market`
--
ALTER TABLE `market`
  ADD CONSTRAINT `market_idfood_foreign` FOREIGN KEY (`idFood`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `market_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `market_iduserbought_foreign` FOREIGN KEY (`idUserBought`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_idgroup_foreign` FOREIGN KEY (`idGroup`) REFERENCES `group` (`id`),
  ADD CONSTRAINT `member_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `recipe`
--
ALTER TABLE `recipe`
  ADD CONSTRAINT `recipe_idfood_foreign` FOREIGN KEY (`idFood`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `recipe_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `recipematerial`
--
ALTER TABLE `recipematerial`
  ADD CONSTRAINT `recipematerial_idmaterial_foreign` FOREIGN KEY (`idMaterial`) REFERENCES `food` (`id`),
  ADD CONSTRAINT `recipematerial_idrecipe_foreign` FOREIGN KEY (`idRecipe`) REFERENCES `recipe` (`id`);

--
-- Các ràng buộc cho bảng `store`
--
ALTER TABLE `store`
  ADD CONSTRAINT `store_idmarket_foreign` FOREIGN KEY (`idMarket`) REFERENCES `market` (`id`),
  ADD CONSTRAINT `store_iduser_foreign` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

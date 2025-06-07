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
CREATE DATABASE IF NOT EXISTS food;
USE food;



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
(1, 'Gạo', 'kg', 0, 'https://thoxuan.vn/file/download/636767034.html?b=0', 2, 0, 0),
(2, 'Thịt lợn', 'kg', 0, 'https://vcdn1-suckhoe.vnecdn.net/2019/12/07/3-1p60g42555v7-1575707575-1794-1575707805.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=ZVMz__4QYcD6GofmpUl2ig', 2, 0, 0),
(3, 'Cá', 'kg', 0, 'https://bazaarvietnam.vn/wp-content/uploads/2023/05/harper-bazaar-ca-chep-ky-gi-7.jpg', 2, 0, 0),
(4, 'Rau muống', 'bó', 0, 'https://lh3.googleusercontent.com/Yjr46vcV8-zXGaD88d-3_VV34Lcttz5Je5kzzlP4__C6HaCVPw82CZhOsqvF9QusGFr1Gbqb9wNDYglguUJhB9jA5tE1NY5a', 2, 0, 0),
(5, 'Cà chua', 'quả', 0, 'https://product.hstatic.net/200000423303/product/ca-chua-bee-cherry-huu-co_2afe5b08b1f242809cac54171701fff4_1024x1024.jpg', 2, 0, 0),
(6, 'Cơm chiên trứng', 'phần', 0, 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_23_638336575818808816_cach-lam-com-chien-trung-thumb.jpg', 2, 1, 0),
(7, 'Thịt lợn kho', 'phần', 0, 'https://cdn.tgdd.vn/2021/03/CookProduct/1-1200x676-52.jpg', 2, 1, 0),
(8, 'Rau muống xào tỏi', 'phần', 0, 'https://beptruong.edu.vn/wp-content/uploads/2021/04/rau-muong-xao-toi-1.jpg', 2, 1, 0),
(9, 'Canh cà chua trứng', 'phần', 0, 'https://www.huongnghiepaau.com/wp-content/uploads/2024/07/cach-nau-canh-trung-ca-chua.jpg', 2, 1, 0),
(10, 'Khoai tây chiên', 'phần', 0, 'https://texaschickenvn.com/vnt_upload/product/07_2023/Khoai_tay_chien_co_lon.png', 2, 1, 0),
(11, 'Thịt bò', 'kg', 0, 'https://fohlafood.vn/cdn/shop/articles/thit-bo-nhap-khau.jpg?v=1719286176', 2, 0, 0),
(12, 'Nấm rơm', 'kg', 0, 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_2_26_638445075264978018_nam-rom-nau-gi-ngon-9.jpg', 2, 0, 0),
(13, 'Nước mắm', 'ml', 0, 'https://product.hstatic.net/200000356473/product/nuoc_man_1_0a3a8a6450014bde96dee6f53ea97b80_1024x1024.jpg', 2, 0, 0),
(14, 'Canh cải thảo', 'phần', 0, 'https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/03.2024/120324-mon-canh-bap-cai-cuon-thit-buffet-poseidon-02-2.jpg', 2, 1, 0),
(15, 'Cá chiên', 'phần', 0, 'https://cdn2.fptshop.com.vn/unsafe/2023_10_31_638343474864019884_ca-chien-1.jpeg', 2, 1, 0),
(16, 'Đậu phụ', 'miếng', 0, 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/3/16/889870/Cach-Lam-Dau-Phu-Tai.jpeg', 2, 0, 0),
(17, 'Hành lá', 'gam', 0, 'https://fatechme.com/uploads/xechohang/hanhla.jpg', 2, 0, 0),
(18, 'Tôm rim', 'phần', 0, 'https://haisanloccantho.com/wp-content/uploads/2024/11/thuong-thuc-mon-tom-rim-man-ngot.jpg', 2, 1, 0),
(19, 'Mực xào', 'phần', 0, 'https://daynauan.info.vn/wp-content/uploads/2020/02/muc-xao-chua-ngot.jpg', 2, 1, 0),
(20, 'Mì gói xào', 'phần', 0, 'https://minhngan.vn/assets/uploads/2022/11/Mi-goi-xao-bo-1.png', 2, 1, 0),
(21, 'Bún tươi', 'kg', 0, 'https://production-cdn.pharmacity.io/digital/original/plain/blog/giai_dap_bun_tuoi_bao_nhieu_calo_an_bun_tuoi_co_beo_khong4_8710af33d4-1.jpg', 2, 0, 0),
(22, 'Thịt gà', 'kg', 0, 'https://file.hstatic.net/200000585055/file/cach-nhan-biet-thit-ga-hong-the-gioi-thit-3a_-min_76e6c249a7bb4d72bab28b0410d8a0e5_grande.jpeg', 2, 0, 0),
(23, 'Cải thảo', 'cái', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KiO9DO42iqJswLnAmGRqty2fLldy6Pne8Q&s', 2, 0, 0),
(24, 'Hạt tiêu', 'gam', 0, 'https://cerafoods.com/wp-content/uploads/2023/09/Hat-tieu-tay-nguyen-1.jpg', 2, 0, 0),
(25, 'Nấm kim châm', 'gói', 0, 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/19/photo-1655456362258-16554563647291898456211-1655607472210-16556074723031445388236.jpg', 2, 0, 0),
(26, 'Bún bò Huế', 'phần', 0, 'https://lh6.googleusercontent.com/Ki9Rl1th4Bl24Zs3RI2Fn9iv9Hks-3H9MpchIqy65oE2UICdSUh5uHT7M8XX26xGj4u9EfYosiRYLNoC3zFcIrDIWxooyNQ43qm7KJ5KN1elKHFZDBUEC4y-FkGu2g', 2, 1, 0),
(27, 'Gà chiên mắm', 'phần', 0, 'https://file.hstatic.net/200000700229/article/ga-chien-mam-toi-ot-1_de869c540b654e87bf796911f7c25885.jpg', 2, 1, 0),
(28, 'Canh nấm kim châm', 'phần', 0, 'https://bientauvannguyenlieu.giadinhnestle.com.vn/sites/default/files/styles/wide/public/recipes-photo/recipe_1691729532.gif?itok=6cccYdcs', 2, 1, 0),
(29, 'Thịt bò xào hành tây', 'phần', 0, 'https://cdn.eva.vn/upload/2-2019/images/2019-05-07/4-cach-lam-thit-bo-xao-hanh-tay-nhanh-gon-ngon-mieng-thit-bo-xao-hanh-tay-10-1557215213-777-width543height415.jpg', 2, 1, 0),
(30, 'Chả lụa hấp', 'phần', 0, 'https://cdn.tgdd.vn/2020/08/CookProduct/12-1200x676.jpg', 2, 1, 0);

INSERT INTO `food` (`id`, `name`, `unit`, `createdByAdmin`, `image`, `idUser`, `type`, `isDeleted`) VALUES
(31, 'Trứng', 'quả', 0, 'https://vcdn1-vnexpress.vnecdn.net/2015/02/14/eggs-03-5282-1423905018.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=qds3FEa00417JEmfK1wEbQ', 2, 0, 0);

INSERT INTO `food` (`id`, `name`, `unit`, `createdByAdmin`, `image`, `idUser`, `type`, `isDeleted`) VALUES
(32, 'Khoai tây', 'kg', 0, 'https://hongngochospital.vn/bai-viet/update/dinh-duong-tu-khoai-tay.jpg', 2, 0, 0),
(33, 'Tỏi', 'củ', 0, 'https://hoithankinhhocvietnam.com.vn/vnna-media/24/6/6/4-cach-chua-mat-ngu-bang-toi-vo-cung-don-gian--de.jpg', 2, 0, 0);

INSERT INTO `food` (`id`, `name`, `unit`, `createdByAdmin`, `image`, `idUser`, `type`, `isDeleted`) VALUES
(34, 'Hành tây', 'củ', 0, 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/12/27/chua-yeu-sinh-ly-bang-hanh-tay-1640623099790731187596.jpg', 2, 0, 0),
(35, 'Mực', 'kg', 0, 'https://nhahanghaisanlangchai.com/upload/images/muc_ong.png', 2, 0, 0),
(36, 'Tôm', 'kg', 0, 'https://www.lottemart.vn/media/catalog/product/cache/0x0/2/2/2240000000008-1.jpg.webp', 2, 0, 0);



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
(8, 'Nhóm gia đình', 'Gia đình Bảo Ngân'),
(9, 'Nhóm bạn bè', 'Nhóm bạn bè của Bảo');




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
  `quantity` int NOT NULL,
  `idFood` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





--
-- Đang đổ dữ liệu cho bảng `market`
--


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
-- --------------------------------------------------------
INSERT INTO `member` (`id`, `idUser`, `idGroup`, `isLeader`) VALUES
(22, 2, 8, 1),
(23, 3, 8, 0),
(24, 2, 9, 1),
(25, 3, 9, 0),
(26, 4, 9, 0),
(27, 5, 9, 0),
(28, 6, 9, 0);

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
INSERT INTO recipe (id, name, `desc`, idFood, idUser, `use`) VALUES
(22, 'Cơm chiên trứng', 'Cơm chiên với trứng, thơm ngon, dễ làm.', 6, 2, 0),
(23, 'Thịt lợn kho', 'Thịt ba chỉ kho nước mắm và đường, mềm, đậm vị.', 7, 2, 0),
(24, 'Rau muống xào tỏi', 'Rau muống giòn xanh xào tỏi thơm, đơn giản.', 8, 2, 0),
(25, 'Canh cà chua trứng', 'Canh cà chua vị chua dịu, hòa quyện với trứng mềm, thơm nhẹ.', 9, 2, 0),
(26, 'Khoai tây chiên', 'Khoai thái sợi chiên giòn vàng, ăn vặt khoái khẩu.', 10, 2, 0),
(27, 'Canh cải thảo', 'Cải thảo cuộn thịt xay, nấu canh thanh mát, ngọt dịu tự nhiên.', 14, 2, 0),
(28, 'Cá chiên', 'Cá nguyên con chiên vàng giòn, thơm béo, ăn kèm nước mắm chua ngọt.', 15, 2, 0),
(29, 'Tôm rim', 'Tôm rim mắm đường màu vàng óng, đậm đà.', 18, 2, 0),
(30, 'Mực xào', 'Mực tươi xào hành tây, giữ độ giòn và vị ngọt tự nhiên.', 19, 2, 0),
(31, 'Bún bò Huế', 'Món đặc sản với sợi bún to, nước dùng cay sả, thịt bò.', 26, 2, 0),
(32, 'Gà chiên mắm', 'Gà chiên giòn phủ sốt mắm mặn ngọt đậm đà.', 27, 2, 0),
(34, 'Canh nấm kim châm', 'Món canh ngọt thanh từ nấm, nhẹ bụng, bổ dưỡng.', 28, 2, 0),
(35, 'Thịt bò xào hành tây', 'Thịt bò mềm xào hành tây thơm, nhanh gọn.', 29, 2, 0);

--



-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `recipematerial`
--

CREATE TABLE `recipematerial` (
  `id` bigint(20) NOT NULL,
  `idMaterial` bigint(20) NOT NULL,
  `idRecipe` bigint(20) NOT NULL,
  `quantity` DECIMAL(5,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SELECT
  quantity,
  CASE 
    WHEN quantity = FLOOR(quantity) THEN CAST(quantity AS CHAR)
    ELSE FORMAT(quantity, 1)
  END AS formatted_quantity
FROM recipematerial;

--
-- Đang đổ dữ liệu cho bảng `recipematerial`
--
INSERT INTO recipematerial (id, idMaterial, idRecipe, quantity) VALUES
(22, 1, 22, 0.2),
(23, 31, 22, 2.0),
(24, 2, 23, 0.5),
(25, 17, 23, 50.0),
(26, 13, 23, 50.0),
(27, 4, 24, 1.0),
(28, 33, 24, 2.0),
(29, 5, 25, 3.0),
(30, 31, 25, 3.0),
(31, 17, 25, 20.0),
(32, 32, 26, 0.5),
(33, 23, 27, 1.0),
(34, 2, 27, 0.4),
(35, 3, 28, 0.5),
(36, 36, 29, 0.5),
(37, 13, 29, 50.0),
(38, 35, 30, 0.5),
(39, 34, 30, 1.0),
(40, 21, 31, 0.5),
(41, 11, 31, 0.4),
(42, 22, 32, 0.5),
(43, 13, 32, 50.0),
(47, 25, 34, 2.0),
(48, 16, 34, 1.0),
(49, 11, 35, 0.5),
(50, 34, 35, 1.0);



-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `store`
--

CREATE TABLE `store` (
  `id` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idMarket` bigint(20) NOT NULL,
  `expire` date NOT NULL,
  `quantity` int NOT NULL,
  `state` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



--
-- Đang đổ dữ liệu cho bảng `store`
--



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



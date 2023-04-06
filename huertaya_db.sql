-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql-huertaya.alwaysdata.net
-- Generation Time: Apr 06, 2023 at 12:37 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `huertaya_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `idcategory` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idcategory`, `name`) VALUES
(0, 'name'),
(1, 'fruta'),
(2, 'verdura'),
(3, 'bolson'),
(4, 'kit'),
(5, 'ensalada en bandeja'),
(6, 'importado');

-- --------------------------------------------------------

--
-- Table structure for table `costo_de_envios`
--

CREATE TABLE `costo_de_envios` (
  `idCostoEnvios` int(11) NOT NULL,
  `id_location` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `facturacion`
--

CREATE TABLE `facturacion` (
  `idFacturacion` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_metodoPago` int(11) NOT NULL,
  `id_costoEnvio` int(11) NOT NULL,
  `adress` varchar(45) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `idimage` int(11) NOT NULL,
  `url` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`idimage`, `url`) VALUES
(1, 'default-image.png'),
(2, 'imgPerfil-1678493011434-645329920.jpg'),
(3, 'imgPerfil-1680625234012-290124618.jpg'),
(4, 'imgPerfil-1680625302174-239272437.jpg'),
(5, 'imgPerfil-1680625483973-462371714.jpg'),
(6, 'imgPerfil-1680625645424-78564336.jpg'),
(7, 'imgPerfil-1680625688126-241577596.jpg'),
(8, 'imgPerfil-1680625788864-7214070.jpg'),
(9, 'imgPerfil-1680625824877-483337830.jpg'),
(10, 'imgPerfil-1680625854731-789194022.jpg'),
(11, 'imgPerfil-1680625973045-758326496.jpg'),
(12, 'imgPerfil-1680635857117-331305389.jpg'),
(13, 'imgPerfil-1680636149747-9353875.jpg'),
(14, 'imgPerfil-1680636206928-916832694.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `idLocation` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`idLocation`, `name`) VALUES
(60014, 'Adolfo Gonzales Chaves'),
(60056, 'Bahía Blanca'),
(60105, 'Bolívar'),
(60196, 'Coronel Pringles'),
(60203, 'Coronel Suárez'),
(60252, 'Escobar'),
(60280, 'General Alvarado'),
(60308, 'General Guido'),
(60315, 'General Juan Madariaga'),
(60336, 'General Lavalle'),
(60343, 'General Paz'),
(60357, 'General Pueyrredón'),
(60412, 'José C. Paz'),
(60420, 'La Costa'),
(60427, 'La Matanza'),
(60455, 'Las Flores'),
(60505, 'Magdalena'),
(60518, 'Mar Chiquita'),
(60560, 'Moreno'),
(60623, 'Pergamino'),
(60644, 'Pinamar'),
(60672, 'Rauch'),
(60686, 'Rojas'),
(60707, 'Saladillo'),
(60721, 'Salliqueló'),
(60735, 'San Antonio de Areco'),
(60791, 'Tandil'),
(60861, 'Vicente López'),
(60868, 'Villa Gesell');

-- --------------------------------------------------------

--
-- Table structure for table `metodo_de_pago`
--

CREATE TABLE `metodo_de_pago` (
  `idMetodoPago` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `presentations`
--

CREATE TABLE `presentations` (
  `idpresentation` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `presentations`
--

INSERT INTO `presentations` (`idpresentation`, `name`) VALUES
(1, 'kilogramo'),
(2, 'gramo'),
(3, 'bolsa'),
(4, 'atado'),
(5, 'bandeja'),
(6, 'unidad');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idProducto` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_presentation` int(11) NOT NULL,
  `description` longtext DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `id_image` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idProducto`, `name`, `id_presentation`, `description`, `id_category`, `price`, `stock`, `discount`, `id_image`) VALUES
(1, 'Tomate', 1, 'Other repair of intestine', 1, 2175, 81, 0, 44),
(2, 'Banana', 3, 'Other operations on iris', 3, 2137, 56, 0, 26),
(3, 'Manzana', 4, 'Microscopic examination of specimen from liver, biliary tract, and pancreas, other microscopic examination', 6, 1775, 99, 0, 7),
(4, 'Uva', 2, 'Contrast myelogram', 3, 385, 37, 0, 37),
(5, 'Papa', 6, 'Other excision of joint, wrist', 6, 1288, 62, 0, 45),
(6, 'Batata', 5, 'Transposition of pterygium', 5, 578, 59, 0, 1),
(7, 'Frambuesa', 2, 'Puncture of spleen', 4, 591, 18, 0, 5),
(8, 'Maracuya', 5, 'Removal of tube from large intestine or appendix', 6, 1645, 77, 0, 12),
(9, 'Sandía', 4, 'Other operations on vagina', 4, 2430, 4, 0, 39),
(10, 'Cebolla', 6, 'Unspecified operation on bone injury, femur', 2, 1106, 98, 0, 44),
(11, 'Ajo', 1, 'Internal fixation of bone without fracture reduction, femur', 4, 1388, 35, 0, 38),
(12, 'Frutilla', 3, 'Delayed opening of other enterostomy', 2, 822, 58, 0, 19),
(13, 'Bolsón orgánico', 4, 'Correction of lid retraction', 6, 2247, 64, 0, 43),
(14, 'Lechuga', 5, 'Osteoclasis, other bones', 2, 607, 18, 0, 21),
(15, 'Repollo', 2, 'Artificial insemination', 6, 656, 96, 0, 22),
(16, 'Kiwi', 3, 'Other excision of perianal tissue', 2, 1176, 94, 0, 43),
(17, 'Durazno', 6, 'Plication of urethrovesical junction', 1, 1031, 77, 0, 30),
(18, 'Pelón', 1, 'Administration of neuroprotective agent', 4, 883, 14, 0, 46),
(19, 'Mora', 1, 'Excision of preauricular sinus', 2, 1608, 12, 0, 11),
(20, 'Brócoli', 2, 'Fitting of denture', 1, 1770, 92, 0, 42),
(21, 'Puerro', 4, 'Obliteration and total excision of vagina', 1, 247, 49, 0, 42),
(22, 'Perejil', 5, 'Clinical test of hearing', 6, 1108, 36, 0, 20),
(23, 'Cilantro', 6, 'Endoscopic excision or destruction of lesion of duodenum', 2, 366, 44, 0, 3),
(24, 'Zanahoria', 3, 'Repair of symblepharon with free graft', 5, 2434, 77, 0, 25),
(25, 'Choclo', 1, 'Microscopic examination of specimen from skin and other integument, parasitology', 1, 1404, 33, 0, 45),
(26, 'Foam Cup 6 Oz', 5, 'Closed biopsy of skin and subcutaneous tissue', 5, 1763, 53, 0, 38),
(27, 'Cream - 18%', 2, 'Lingual frenectomy', 5, 1162, 59, 0, 7),
(28, 'Cleaner - Pine Sol', 4, 'Other repair and plastic operations on trachea', 4, 882, 71, 0, 10),
(29, 'Chocolate Eclairs', 6, 'Biopsy of lip', 5, 2121, 33, 0, 18),
(30, 'Pomello', 3, 'Excision of lesion of tonsil and adenoid', 4, 484, 27, 0, 28),
(31, 'Pasta - Rotini, Dry', 1, 'Closed biopsy of uterus', 3, 1075, 35, 0, 48),
(32, 'Quail - Eggs, Fresh', 3, 'Bilateral radical mastectomy', 6, 2238, 14, 0, 42),
(33, 'Flour - All Purpose', 6, 'Sequestrectomy, humerus', 2, 1795, 25, 0, 16),
(34, 'Beef - Bones, Marrow', 4, 'Other passive musculoskeletal exercise', 5, 2049, 53, 0, 47),
(35, 'Juice - Clamato, 341 Ml', 5, 'Mediastinoscopy', 1, 252, 63, 0, 30),
(36, 'Turkey - Ground. Lean', 2, 'Percutaneous angioplasty of intracranial vessel(s)', 4, 478, 67, 0, 16),
(37, 'Wine - Zinfandel California 2002', 3, 'Other repair of pancreas', 6, 1263, 91, 0, 37),
(38, 'Tomato - Peeled Italian Canned', 1, 'Other operations on bladder', 4, 2121, 65, 0, 46),
(39, 'Chicken - Base', 6, 'Immediate postpartum manual replacement of inverted uterus', 3, 1565, 53, 0, 49),
(40, 'Food Colouring - Red', 5, 'Midtarsal fusion', 2, 1825, 67, 0, 45),
(41, 'Bread Ww Cluster', 2, 'Ureteropexy', 1, 228, 96, 0, 25),
(42, 'Mushroom - Crimini', 4, 'Removal of intraluminal foreign body from vagina without incision', 6, 2222, 17, 0, 39),
(43, 'Wine - Champagne Brut Veuve', 1, 'Repair of esophageal fistula, not elsewhere classified', 3, 319, 35, 0, 5),
(44, 'Onions - White', 3, 'Complete substernal thyroidectomy', 3, 923, 64, 0, 36),
(45, 'Sauce - Oyster', 5, 'Other penetrating keratoplasty', 6, 1174, 33, 0, 9),
(46, 'Tart Shells - Barquettes, Savory', 4, 'Closure of laceration of liver', 2, 226, 31, 0, 43),
(47, 'Broom And Brush Rack Black', 2, 'Other shunt of spinal theca', 5, 1830, 34, 0, 27),
(48, 'Soup - Campbells Chili Veg', 6, 'Complete thyroidectomy', 3, 1885, 44, 0, 29),
(49, 'Yogurt - Raspberry, 175 Gr', 4, 'Transurethral clearance of bladder', 4, 1463, 1, 0, 41),
(50, 'Chicken Thigh - Bone Out', 2, 'Refusion of spine, not elsewhere classified', 1, 1551, 37, 0, 36);

-- --------------------------------------------------------

--
-- Table structure for table `rols`
--

CREATE TABLE `rols` (
  `idrol` int(11) NOT NULL,
  `name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rols`
--

INSERT INTO `rols` (`idrol`, `name`) VALUES
(1, 'client'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `iduser` bigint(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `postal_code` bigint(11) DEFAULT NULL,
  `id_location` bigint(6) DEFAULT NULL,
  `number_phone` varchar(20) DEFAULT NULL,
  `id_image` tinyint(4) DEFAULT NULL,
  `id_rol` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`iduser`, `first_name`, `last_name`, `email`, `password`, `postal_code`, `id_location`, `number_phone`, `id_image`, `id_rol`) VALUES
(1, 'Maria', 'Castro', 'Mariadc94@gmail.com', NULL, 1870, 1, '91133205615', NULL, 1),
(2, 'Dora', 'Guzman', 'Dorag133@gmail.com', '12345', 1643, 2, '91154889613', NULL, 2),
(3, 'Claudio', 'Gonzalez', 'claudioG@gmail.com', '25925413', 1706, 3, '91149480887', NULL, 3),
(4, 'Wendy', 'Hernandez', 'WendyH@gmail.com', '15895413', 1605, 4, '91189563214', NULL, 4),
(5, 'Andres', 'Bracho', 'brachoAndres@gmail.com', '45869613', 1629, 5, '91154789312', NULL, 5),
(6, 'Emilia', 'Marchan', 'drEmiliaM@gmail.com', '86465213', 1603, 6, '91178451236', NULL, 6),
(7, 'Mercedes', 'Urquiza', 'mercedesU@gmail.com', '23547896', 1428, 7, '91178964512', NULL, 7),
(8, 'Romina', 'Cubria', 'Rcubria@gmail.com', '56851412', 1424, 8, '91157561234', NULL, 8),
(9, 'Marco', 'Savarino', 'aaaa@gmail.com', '12345', NULL, 0, '91149480882', NULL, NULL),
(20, 'Duki', 'duko', 'duko111@gmail.com', '$2a$10$/WZydob7lwQfupIAPSadPuCEcKg5SjBOnLU1Qe', 12123, 60427, '7777777777', 14, NULL),
(21, 'Manolo', 'Manos', 'manolomanos@gmail.com', '$2a$10$ymyH9Lc71okMVmnf/rW/DuZoOAlZAGr13BKxwm', 1234, 60868, '01313131312', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indexes for table `costo_de_envios`
--
ALTER TABLE `costo_de_envios`
  ADD PRIMARY KEY (`idCostoEnvios`);

--
-- Indexes for table `facturacion`
--
ALTER TABLE `facturacion`
  ADD PRIMARY KEY (`idFacturacion`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`idimage`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`idLocation`);

--
-- Indexes for table `metodo_de_pago`
--
ALTER TABLE `metodo_de_pago`
  ADD PRIMARY KEY (`idMetodoPago`);

--
-- Indexes for table `presentations`
--
ALTER TABLE `presentations`
  ADD PRIMARY KEY (`idpresentation`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `id_presentation` (`id_presentation`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_category_2` (`id_category`),
  ADD KEY `id_image` (`id_image`);

--
-- Indexes for table `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`idrol`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `costo_de_envios`
--
ALTER TABLE `costo_de_envios`
  MODIFY `idCostoEnvios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `idimage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `idLocation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60869;

--
-- AUTO_INCREMENT for table `metodo_de_pago`
--
ALTER TABLE `metodo_de_pago`
  MODIFY `idMetodoPago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presentations`
--
ALTER TABLE `presentations`
  MODIFY `idpresentation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `rols`
--
ALTER TABLE `rols`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_presentation`) REFERENCES `presentations` (`idpresentation`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`idcategory`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`id_image`) REFERENCES `images` (`idimage`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2019 at 02:37 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_awesome_newpage`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `fk-author` int(11) NOT NULL,
  `imgPath` varchar(64) CHARACTER SET utf8 NOT NULL,
  `fk-postCategory` int(11) NOT NULL,
  `postTime` datetime NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `title` varchar(128) CHARACTER SET utf8 NOT NULL,
  `likes` int(11) NOT NULL,
  `comments` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `fk-author`, `imgPath`, `fk-postCategory`, `postTime`, `content`, `title`, `likes`, `comments`) VALUES
(1, 4, 'img/bg-img/24.jpg', 5, '2019-04-09 11:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 'Augue semper congue sit amet ac sapien. Fusce consequat.', 15, 2),
(2, 1, 'img/bg-img/23.jpg', 4, '2019-03-06 07:00:00', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id', 2000, 351),
(3, 2, 'img/bg-img/22.jpg', 1, '2019-04-11 09:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 'Augue semper congue sit amet ac sapien. Fusce consequat.', 10, 2),
(4, 1, 'img/bg-img/21.jpg', 2, '2019-04-12 08:00:14', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 52, 10),
(5, 3, 'img/bg-img/20.jpg', 5, '2019-04-13 07:00:14', 'Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 85, 5),
(6, 3, 'img/bg-img/19.jpg', 1, '2019-04-14 06:00:14', 'Pellentesque mattisPellentesque mattis arcu massa, nec fringilla turpis eleifend id. arcu massa, nec fringilla turpis eleifendPellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque maPellentesque mattis arcu massa, nec fringilla turpis eleifend id.ttis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id. Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.id.', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 25, 10),
(22, 3, 'img/bg-img/1.jpg', 4, '2019-05-02 14:00:00', 'Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 'Orci varius natoque penatibus et magnis dis parturient montes.', 235, 52);

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `imgPath` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `imgPath`) VALUES
(1, 'Jason Marlo', 'img/bg-img/29.jpg'),
(2, 'Shanie Bolit', 'img/bg-img/30.jpg'),
(3, 'Jamie Smith', 'img/bg-img/31.jpg'),
(4, 'Igor Usio', 'img/bg-img/32.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `editorspicks`
--

CREATE TABLE `editorspicks` (
  `id` int(11) NOT NULL,
  `fk_pickedArticle` int(11) NOT NULL,
  `fk-pickedAuthor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editorspicks`
--

INSERT INTO `editorspicks` (`id`, `fk_pickedArticle`, `fk-pickedAuthor`) VALUES
(1, 22, 2);

-- --------------------------------------------------------

--
-- Table structure for table `postcategories`
--

CREATE TABLE `postcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `postcategories`
--

INSERT INTO `postcategories` (`id`, `name`) VALUES
(1, 'Finance'),
(2, 'Health'),
(3, 'Sports'),
(4, 'Travel'),
(5, 'Politics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk-author` (`fk-author`,`fk-postCategory`),
  ADD KEY `fk-postCategory` (`fk-postCategory`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editorspicks`
--
ALTER TABLE `editorspicks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `postcategories`
--
ALTER TABLE `postcategories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `editorspicks`
--
ALTER TABLE `editorspicks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`fk-author`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`fk-postCategory`) REFERENCES `postcategories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

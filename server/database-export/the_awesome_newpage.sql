-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2019 at 01:11 PM
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
  `title` varchar(128) CHARACTER SET utf8 NOT NULL,
  `fk_author` int(11) NOT NULL,
  `imgPath` varchar(64) CHARACTER SET utf8 NOT NULL,
  `fk_postCategory` int(11) NOT NULL,
  `postTime` datetime NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `likes` int(11) NOT NULL,
  `summery` varchar(256) NOT NULL,
  `tags` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `fk_author`, `imgPath`, `fk_postCategory`, `postTime`, `content`, `likes`, `summery`, `tags`) VALUES
(1, 'Augue semper congue sit amet ac sapien. Fusce consequat.', 4, 'img/bg-img/24.jpg', 5, '2019-04-09 11:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 15, 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit ', 'yeet,skeet'),
(2, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id', 1, 'img/bg-img/16.jpg', 4, '2019-03-06 07:00:00', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 2000, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis ', 'best,article,ever'),
(3, 'Augue semper congue sit amet ac sapien. Fusce consequat.', 2, 'img/bg-img/22.jpg', 1, '2019-04-11 09:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 10, '', ''),
(4, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 1, 'img/bg-img/21.jpg', 2, '2019-04-12 08:00:14', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 52, '', ''),
(5, 'Sed a elit euismod augue semper congue sit amet ac sapien.', 3, 'img/bg-img/20.jpg', 5, '2019-04-13 07:00:14', 'Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.', 85, '', ''),
(6, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 3, 'img/bg-img/19.jpg', 3, '2019-04-14 06:00:14', 'Pellentesque mattisPellentesque mattis arcu massa, nec fringilla turpis eleifend id. arcu massa, nec fringilla turpis eleifendPellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque maPellentesque mattis arcu massa, nec fringilla turpis eleifend id.ttis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id. Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.id.', 25, 'Pellentesque mattisPellentesque mattis arcu massa, nec fringilla turpis eleifend id. arcu massa, nec fringilla turpis eleifendPellentesque mattis arcu massa,', 'cool,nice,sad'),
(22, 'Impress Dad this Father\'s day with a unique, personalized gift from Shutterfly', 3, 'img/bg-img/1.jpg', 4, '2018-12-04 00:00:00', 'Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 235, '', ''),
(23, 'A New Study Shows the Health Benefits of Optimism ', 3, 'img/bg-img/2.jpg', 2, '2018-12-07 00:00:00', 'Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 6546, '', ''),
(24, '\'Four Weddings\' star John Hannah bets passer-by he is not Hugh Laurie -- and wins $10', 3, 'img/bg-img/3.jpg', 1, '2019-01-03 07:35:24', 'Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 252, '', ''),
(25, 'Biking to the top, how riding a bike will improve your life!', 1, 'img/bg-img/33.jpg', 3, '2019-06-07 13:21:00', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas cursus odio, in sagittis dui porta eget. Donec hendrerit lacinia arcu fermentum lacinia. Cras porta augue in eros bibendum interdum. Morbi pretium ipsum leo, eget iaculis tellus molestie ut. Aliquam erat volutpat. Curabitur lobortis ante vel metus aliquet, ut bibendum orci rutrum. Nulla consequat sem egestas elit fermentum aliquam. Vivamus ultricies dui et nulla cursus placerat. Pellentesque convallis nunc lacinia rutrum bibendum. Duis lacinia varius ex, nec fermentum nunc. Ut quis dolor vestibulum, dictum justo sit amet, pretium tortor. Cras tincidunt sagittis erat et porttitor. Aenean in lacus sem.\r\n\r\nCurabitur fermentum ut leo vitae gravida. Duis aliquam est gravida diam sollicitudin elementum. Aliquam enim nibh, lobortis ut accumsan et, pharetra faucibus nulla. Duis tristique dolor id purus feugiat, ullamcorper vulputate nisl varius. Vivamus id velit ac elit malesuada consectetur. Nullam ac augue vehicula, scelerisque nunc eu, aliquet leo. Nunc et hendrerit felis. Cras sodales molestie nisi ut aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam justo lectus, rutrum non pulvinar in, rutrum sit amet nunc. Cras tempus sed quam et tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas egestas mauris quis mauris egestas posuere. Vestibulum vitae volutpat leo. Integer eu vulputate elit.\r\n\r\nNam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue. ', 854, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas cursus odio, in sagittis dui porta eget. Donec hendrerit lacinia arcu fermentum lacinia. Cras porta augue in eros bibendum interdum.', 'spots,biking,life'),
(26, 'TOTAL ANARCHY IN FRANCE!', 3, 'img/bg-img/34.jpg', 6, '2019-06-07 22:51:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 852, 'Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 'Anarchy, Breaking, France'),
(27, 'Scientists prepare for earth 2.0', 3, 'img/bg-img/35.jpg', 6, '2019-06-07 23:11:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 722, 'Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 'Anarchy, Breaking, France');

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `imgPath` varchar(64) NOT NULL,
  `description` varchar(128) NOT NULL,
  `position` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `imgPath`, `description`, `position`) VALUES
(1, 'Jason Marlo', 'img/bg-img/29.jpg', '0', '0'),
(2, 'Shanie Bolit', 'img/bg-img/30.jpg', '0', '0'),
(3, 'Jamie Smith', 'img/bg-img/31.jpg', '0', '0'),
(4, 'Igor Usio', 'img/bg-img/32.jpg', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `message` varchar(512) NOT NULL,
  `postTime` datetime NOT NULL,
  `fk_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `editorspicks`
--

CREATE TABLE `editorspicks` (
  `id` int(11) NOT NULL,
  `fk_pickedArticle` int(11) NOT NULL,
  `fk-pickedAuthor` int(11) NOT NULL,
  `datePicked` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editorspicks`
--

INSERT INTO `editorspicks` (`id`, `fk_pickedArticle`, `fk-pickedAuthor`, `datePicked`) VALUES
(1, 22, 2, '0000-00-00 00:00:00'),
(2, 23, 1, '0000-00-00 00:00:00'),
(3, 24, 3, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `mail` varchar(128) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `address` int(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(5, 'Politics'),
(6, 'Breaking News'),
(7, 'Business'),
(8, 'Technology');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `img` varchar(64) NOT NULL,
  `mail` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `img` varchar(64) NOT NULL,
  `url` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `title`, `img`, `url`) VALUES
(1, 'Why Photos of the Eiffel Tower at Night are Illegal', 'img/bg-img/video1.jpg', 'https://www.youtube.com/watch?v=M16CGK1T9MM'),
(2, 'The $289,500 New York Hot Dog Stand License', 'img/bg-img/video2.jpg', 'https://www.youtube.com/watch?v=nzWDXhXkEQQ'),
(3, 'The US Government\'s $350 Million Doomsday Plane\r\n', 'img/bg-img/video3.jpg', 'https://www.youtube.com/watch?v=tMYBr2H0xuk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk-author` (`fk_author`,`fk_postCategory`),
  ADD KEY `fk-postCategory` (`fk_postCategory`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`fk_user`);

--
-- Indexes for table `editorspicks`
--
ALTER TABLE `editorspicks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `postcategories`
--
ALTER TABLE `postcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `editorspicks`
--
ALTER TABLE `editorspicks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`fk_author`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`fk_postCategory`) REFERENCES `postcategories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

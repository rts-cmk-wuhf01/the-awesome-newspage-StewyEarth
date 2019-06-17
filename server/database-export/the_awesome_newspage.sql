-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2019 at 10:13 AM
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
-- Database: `the_awesome_newspage`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(128) CHARACTER SET utf8 NOT NULL,
  `fk_author` int(11) NOT NULL,
  `img` varchar(64) CHARACTER SET utf8 NOT NULL,
  `fk_postCategory` int(11) NOT NULL,
  `postTime` datetime NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `likes` int(11) NOT NULL,
  `summary` varchar(750) NOT NULL,
  `IsFeatured` tinyint(1) NOT NULL,
  `tags` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `fk_author`, `img`, `fk_postCategory`, `postTime`, `content`, `likes`, `summary`, `IsFeatured`, `tags`) VALUES
(1, 'Augue semper congue sit amet ac sapien. Fusce consequat.', 4, '24.jpg', 5, '2019-04-09 11:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 15, 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit ', 0, 'yeet,skeet'),
(2, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id', 1, '16.jpg', 4, '2019-03-06 07:00:00', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 100, 'Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy. ', 0, 'best,article,ever'),
(3, 'Augue semper congue sit amet ac sapien. Fusce consequat.', 2, '22.jpg', 1, '2019-04-11 09:00:14', 'Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.Augue semper congue sit amet ac sapien. Fusce consequat.', 10, 'Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. ', 0, ''),
(4, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 1, '21.jpg', 2, '2019-04-12 08:00:14', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 52, 'Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection ', 0, ''),
(5, 'Sed a elit euismod augue semper congue sit amet ac sapien.', 3, '20.jpg', 5, '2019-04-13 07:00:14', 'Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.Sed a elit euismod augue semper congue sit amet ac sapien.', 85, 'Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal. ', 0, ''),
(6, 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 3, '27.jpg', 3, '2019-04-14 06:00:14', 'Pellentesque mattisPellentesque mattis arcu massa, nec fringilla turpis eleifend id. arcu massa, nec fringilla turpis eleifendPellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque maPellentesque mattis arcu massa, nec fringilla turpis eleifend id.ttis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.Pellentesque mattis arcu massa, nec fringilla turpis eleifend id. Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.id.', 25, 'Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to. ', 0, 'cool,nice,sad'),
(22, 'Impress Dad this Father\'s day with a unique, personalized gift from Shutterfly', 3, '1.jpg', 4, '2018-12-04 00:00:00', 'Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes. Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 235, 'Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord. ', 0, ''),
(23, 'A New Study Shows the Health Benefits of Optimism ', 3, '2.jpg', 2, '2018-12-07 00:00:00', 'Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 300, 'Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to. ', 0, ''),
(24, '\'Four Weddings\' star John Hannah bets passer-by he is not Hugh Laurie -- and wins $10', 3, '3.jpg', 1, '2019-01-03 07:35:24', 'Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.Orci varius natoque penatibus et magnis dis parturient montes.', 252, 'Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering la', 0, ''),
(25, 'Biking to the top, how riding a bike will improve your life!', 1, '33.jpg', 3, '2019-06-07 13:21:00', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas cursus odio, in sagittis dui porta eget. Donec hendrerit lacinia arcu fermentum lacinia. Cras porta augue in eros bibendum interdum. Morbi pretium ipsum leo, eget iaculis tellus molestie ut. Aliquam erat volutpat. Curabitur lobortis ante vel metus aliquet, ut bibendum orci rutrum. Nulla consequat sem egestas elit fermentum aliquam. Vivamus ultricies dui et nulla cursus placerat. Pellentesque convallis nunc lacinia rutrum bibendum. Duis lacinia varius ex, nec fermentum nunc. Ut quis dolor vestibulum, dictum justo sit amet, pretium tortor. Cras tincidunt sagittis erat et porttitor. Aenean in lacus sem.\r\n\r\nCurabitur fermentum ut leo vitae gravida. Duis aliquam est gravida diam sollicitudin elementum. Aliquam enim nibh, lobortis ut accumsan et, pharetra faucibus nulla. Duis tristique dolor id purus feugiat, ullamcorper vulputate nisl varius. Vivamus id velit ac elit malesuada consectetur. Nullam ac augue vehicula, scelerisque nunc eu, aliquet leo. Nunc et hendrerit felis. Cras sodales molestie nisi ut aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam justo lectus, rutrum non pulvinar in, rutrum sit amet nunc. Cras tempus sed quam et tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas egestas mauris quis mauris egestas posuere. Vestibulum vitae volutpat leo. Integer eu vulputate elit.\r\n\r\nNam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue. ', 854, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas cursus odio, in sagittis dui porta eget. Donec hendrerit lacinia arcu fermentum lacinia. Cras porta augue in eros bibendum interdum.', 0, 'spots,biking,life'),
(26, 'TOTAL ANARCHY IN FRANCE!', 3, '34.jpg', 6, '2019-06-07 22:51:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 852, 'Entire any had depend and figure winter. Change stairs and men likely wisdom new happen piqued six.', 0, 'Anarchy, Breaking, France'),
(27, 'Scientists prepare for earth 2.0', 3, '35.jpg', 6, '2019-06-07 23:11:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 722, 'Lose john poor same it case do year we. Full how way even the sigh. Extremely nor furniture fat questions now provision incommode preserved.', 1, 'Anarchy, Breaking, France'),
(28, 'Startups on the rise in Denmark', 1, '36.jpg', 7, '2019-07-07 08:51:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 1337, 'By spite about do of do allow blush. Additions in conveying or collected objection in. Suffer few desire wonder her object hardly nearer.', 0, 'Startup, Business, Denmark'),
(29, 'Elliott Management to acquire Barnes & Noble for $683 million', 1, '37.jpg', 7, '2019-06-08 09:00:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 235, 'Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin.', 0, 'Buyout, Business, Elliott Management'),
(31, 'How close are we to living in the matrix? Scientists predict our future', 4, '38.jpg', 8, '2019-06-08 09:30:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 84, 'Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in. ', 0, 'Tech, Matrix, Science, Future'),
(32, '\"Our future is grim. Ai is this close to taking over the world.\", Top scientist says.', 2, '39.jpg', 8, '2019-06-08 09:30:12', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 254, 'In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery.', 1, 'Tech, AI, Science, Future'),
(33, 'Lego is still the best Danish company. Don\'t @ me', 2, '40.jpg', 9, '2019-06-08 10:15:18', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 458, 'Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or. ', 0, 'world, lego, danish, opinion'),
(34, 'Overpopulation problem in Malaysia might start a mass purge if not handled soon.', 4, '41.jpg', 9, '2019-06-08 15:12:25', ' Nam elit turpis, rutrum at metus id, iaculis ultricies dui. Nulla aliquam metus eget ante bibendum egestas. Proin feugiat mauris a ligula condimentum, at gravida dui varius. Fusce ipsum diam, rhoncus ac ultrices sed, feugiat consequat arcu. Nullam varius porttitor ex ac sodales. Nullam lectus nisi, laoreet at orci a, pulvinar gravida diam. Suspendisse feugiat venenatis sapien, at imperdiet lacus ornare quis. Vestibulum magna magna, placerat et neque at, commodo tempus nulla. Nunc erat sem, laoreet ac sapien ac, tincidunt bibendum elit. Sed in risus malesuada, pretium lectus sed, dictum lectus. Nam bibendum sit amet ipsum et bibendum. Curabitur vel dui elit. Fusce mollis, purus ut aliquet maximus, felis enim venenatis justo, non viverra neque lacus eu urna. Aenean tincidunt finibus mi, ut placerat tellus vehicula at. Aenean at lacus varius, scelerisque ex non, pulvinar augue.\r\n\r\nNulla ut consectetur justo, sit amet placerat diam. Sed interdum eros vel orci dignissim, ac interdum arcu luctus. Sed euismod turpis vitae justo vulputate, et ultricies ipsum porttitor. Morbi eu ante sit amet ex semper sagittis at rutrum velit. Proin faucibus luctus urna eget ultrices. Proin enim nulla, ornare ut purus ut, semper fermentum lectus. Maecenas auctor nisi sed tellus fringilla pharetra. Pellentesque eget sem eleifend, rutrum turpis vel, dictum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus neque vitae rhoncus cursus. Vestibulum efficitur purus lorem, at pellentesque est suscipit ut. In et ornare lacus. Donec finibus quam arcu, non aliquet mauris euismod posuere. ', 1205, 'Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily.', 1, 'purge, die, world, overpopulation');

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `img` varchar(64) NOT NULL,
  `about` varchar(128) NOT NULL,
  `position` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `img`, `about`, `position`) VALUES
(1, 'Jason Marlo', 't5.jpg', 'He\'s a really cool guy named Jason', 'Chief Editor'),
(2, 'Shanie Bolit', 't3.jpg', 'What can you say about Shanie... SHE\'S THE COOLEST PERSON EVER', 'Senior Editor'),
(3, 'Jamie Smith', 't7.jpg', 'Jamie is new here, she\'s got a lot to learn, but please be kind to her', 'Intern'),
(4, 'Igor Usio', 't1.jpg', 'IGOR MY GUY. He\'s the CEO. He\'s the best person in the world. Please give me a raise igor :(', 'CEO');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `message` varchar(512) NOT NULL,
  `postTime` datetime NOT NULL,
  `fk_userId` int(11) NOT NULL,
  `fk_commentedPostId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `message`, `postTime`, `fk_userId`, `fk_commentedPostId`) VALUES
(1, 'YO THAT\'S CRAZY, I\'m so happy I don\'t live there', '2019-06-09 00:00:00', 1, 26),
(2, 'BROOOOOOOOOOO', '2019-06-09 13:00:00', 2, 26);

-- --------------------------------------------------------

--
-- Table structure for table `contactmessages`
--

CREATE TABLE `contactmessages` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `subject` varchar(64) NOT NULL,
  `message` varchar(2000) NOT NULL,
  `postTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactmessages`
--

INSERT INTO `contactmessages` (`id`, `name`, `email`, `subject`, `message`, `postTime`) VALUES
(1, 'Mikkel', 'mbk@gmail.com', 'Nicklas er dum', 'Nicklas er bare en stor spasser. Skal vi ikke skille os af med ham?', '2019-06-17 09:39:01'),
(2, '0asdi', 'asd@osdj.ds', 'Yaas queen', 'asfdasdasd', '2019-06-17 10:10:36');

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
  `address` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `mail`, `phone`, `address`) VALUES
(1, 'yourmail@gmail.com', '+53 345 7953 32453 ', '481 Creekside Lane Avila Beach, CA 93424');

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
(8, 'Technology'),
(9, 'World News');

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

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `img`, `mail`, `password`) VALUES
(1, 'Mike Johnson', 'u1.jpg', 'MiJhon@gmail.com', '123456'),
(2, 'Stephen Roy', 'u2.jpg', 'StephenJSmith@jourrapide.com', 'Ang0PohSah4');

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
(1, 'Why Photos of the Eiffel Tower at Night are Illegal', 'video1.jpg', 'https://www.youtube.com/watch?v=M16CGK1T9MM'),
(2, 'The $289,500 New York Hot Dog Stand License', 'video2.jpg', 'https://www.youtube.com/watch?v=nzWDXhXkEQQ'),
(3, 'The US Government\'s $350 Million Doomsday Plane\r\n', 'video3.jpg', 'https://www.youtube.com/watch?v=tMYBr2H0xuk');

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
  ADD KEY `fk_user` (`fk_userId`);

--
-- Indexes for table `contactmessages`
--
ALTER TABLE `contactmessages`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contactmessages`
--
ALTER TABLE `contactmessages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `editorspicks`
--
ALTER TABLE `editorspicks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

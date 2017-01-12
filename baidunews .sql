-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-31 03:29:00
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newstype` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstitle`, `newsimg`, `newstime`, `newstype`) VALUES
(26, '精选新闻1', 'images/1.jpg', '2016-12-04', '精选'),
(27, '精选新闻2', 'images/2.jpg', '2016-12-10', '精选'),
(28, '百家新闻1', 'images/3.jpg', '2016-12-10', '百家'),
(29, '百家新闻2', 'images/4.jpg', '2016-12-10', '百家'),
(30, '本地新闻1', 'images/5.jpg', '2016-12-30', '本地'),
(31, '本地新闻2', 'images/6.jpg', '2016-12-30', '本地'),
(32, '图片新闻1', 'images/7.jpg', '2016-12-17', '图片'),
(33, '图片新闻2', 'images/8.jpg', '2016-12-17', '图片'),
(34, '娱乐新闻2', 'images/9.jpg', '2016-12-17', '娱乐'),
(35, '娱乐新闻1', 'images/10.jpg', '2016-12-17', '娱乐'),
(36, '社会新闻1', 'images/11.jpg', '2016-12-29', '社会'),
(37, '社会新闻2', 'images/12.jpg', '2016-12-29', '社会'),
(38, '社会新闻3', 'images/1.jpg', '2016-12-29', '社会'),
(39, '社会新闻4', 'images/2.jpg', '2016-12-29', '社会'),
(40, '社会新闻5', 'images/3.jpg', '2016-12-29', '社会'),
(41, '娱乐新闻3', 'images/4.jpg', '2016-12-29', '娱乐'),
(42, '娱乐新闻4', 'images/5.jpg', '2016-12-29', '娱乐'),
(43, '娱乐新闻5', 'images/6.jpg', '2016-12-29', '娱乐'),
(44, '图片新闻3', 'images/14.jpg', '2016-12-29', '图片'),
(45, '图片新闻4', 'images/13.jpg', '2016-12-29', '图片'),
(46, '图片新闻5', 'images/15.jpg', '2016-12-29', '图片'),
(47, '本地新闻3', 'images/10.jpg', '2016-12-29', '本地'),
(48, '本地新闻4', 'images/11.jpg', '2016-12-29', '本地'),
(49, '本地新闻5', 'images/12.jpg', '2016-12-29', '本地'),
(50, '百家新闻3', 'images/13.jpg', '2016-12-29', '百家'),
(51, '百家新闻4', 'images/14.jpg', '2016-12-29', '百家'),
(52, '百家新闻5', 'images/15.jpg', '2016-12-29', '百家'),
(53, '精选新闻3', 'images/10.jpg', '2016-12-29', '精选'),
(54, '精选新闻4', 'images/9.jpg', '2016-12-29', '精选');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

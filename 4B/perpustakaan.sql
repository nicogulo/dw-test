-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2021 at 03:57 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `stok` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `deskripsi` varchar(200) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `stok`, `image`, `deskripsi`, `category_id`) VALUES
(1, 'The Joy of PHP Programming: A Beginner’s Guide to Programming Interactive Web Applications with PHP ', 0, 'https://hackr.io/blog/uploads/images/15701909123y9xhRgIzL.jpg', 'Publishing LLC Like The Joy of PHP Programming: A Beginner’s Guide kicks off with basic HTML, newbies can get started easily. The book then escalates step by step into explaining how PHP works. It tra', 13),
(2, 'You Don’t Know JS', 11, 'https://hackr.io/blog/uploads/images/1570190913XdLlEXr7wr.jpg', 'Unlike other names on the list, You Don’t Know JS is a book series. All books of the series share similarity in style and scope. The JavaScript book series help readers get acquainted with the most su', 12),
(5, 'SQL Cookbook', 23, 'https://hackr.io/blog/uploads/images/sql-cookbook-cookbooks-o-reilly.jpg', 'This book is a great reference if you just started working with SQL and have a basic understanding of select, update and insert queries – but don\'t have the time to go deeply through all the concepts.', 14),
(101, 'SQL Beginner\'s Guide & 7-Day Crash Course', 21, 'https://hackr.io/blog/uploads/images/sql-beginner-s-guide-7-day-crash-course.jpg', 'his book will teach everything you want to know about SQL from scratch – not just writing queries but also appreciating the importance of SQL and how it can help with end-to-end project execution and ', 14),
(102, 'Head First PHP & MySQL', 3, 'https://hackr.io/blog/uploads/images/1570190912mgVQAeuxUk.jpg', 'If you are already aware of the Head First book series, then you will instantly recognize Head First PHP & MySQL as one of the foremost PHP guides for beginners. The 812 pages long book is meant to be', 13);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(12, 'The Joy of PHP Progr'),
(13, 'The Joy of PHP Progr'),
(14, 'The Joy of PHP Progr'),
(15, 'The Joy of PHP Progr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

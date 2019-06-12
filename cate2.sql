-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        5.7.23 - MySQL Community Server (GPL)
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 테이블 booldook.admin 구조 내보내기
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(50) NOT NULL,
  `upw` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 테이블 데이터 booldook.admin:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `uid`, `upw`) VALUES
	(1, 'admin', '111111');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 테이블 booldook.cates 구조 내보내기
CREATE TABLE IF NOT EXISTS `cates` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `catename` varchar(255) NOT NULL DEFAULT '',
  `catelink` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 테이블 데이터 booldook.cates:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `cates` DISABLE KEYS */;
INSERT INTO `cates` (`id`, `catename`, `catelink`) VALUES
	(1, 'HOME', 'cate_top1.html'),
	(2, 'FASHION', 'cate_top2.html'),
	(3, 'FOODS', 'cate_top3.html'),
	(4, 'SHOP', 'cate_top4.html'),
	(5, 'BLOG', 'cate_top5.html');
/*!40000 ALTER TABLE `cates` ENABLE KEYS */;

-- 테이블 booldook.cate_sub 구조 내보내기
CREATE TABLE IF NOT EXISTS `cate_sub` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `pid` int(5) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `grp` int(5) NOT NULL,
  `lev` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- 테이블 데이터 booldook.cate_sub:~23 rows (대략적) 내보내기
/*!40000 ALTER TABLE `cate_sub` DISABLE KEYS */;
INSERT INTO `cate_sub` (`id`, `pid`, `title`, `img`, `link`, `grp`, `lev`) VALUES
	(1, 2, 'MEN\'S', NULL, '#', 1, 0),
	(2, 2, 'Top\r\n\r\n', NULL, '#', 1, 1),
	(3, 2, 'T Shirt\r\n', NULL, '#', 1, 1),
	(4, 2, 'Shirts\r\n', NULL, '#', 1, 1),
	(5, 2, 'Scarves\r\n', NULL, '#', 1, 1),
	(6, 2, 'Jackets\r\n', NULL, '#', 1, 1),
	(7, 2, 'WOMEN\'S', NULL, '#', 7, 0),
	(8, 2, 'Top\r\n\r\n', NULL, '#', 7, 1),
	(9, 2, 'T Shirt\r\n', NULL, '#', 7, 1),
	(10, 2, 'Shirts\r\n', NULL, '#', 7, 1),
	(11, 2, 'Scarves\r\n', NULL, '#', 7, 1),
	(12, 2, 'Jackets\r\n', NULL, '#', 7, 1),
	(13, 2, 'KID\'S', NULL, '#', 13, 0),
	(14, 2, 'Top\r\n\r\n', NULL, '#', 13, 1),
	(15, 2, 'T Shirt\r\n', NULL, '#', 13, 1),
	(16, 2, 'Shirts\r\n', NULL, '#', 13, 1),
	(17, 2, 'Scarves\r\n', NULL, '#', 13, 1),
	(18, 2, 'Jackets\r\n', NULL, '#', 13, 1),
	(19, 2, 'TRENDING', NULL, '#', 19, 0),
	(20, 2, 'Accesories', NULL, '#', 19, 1),
	(21, 2, 'Shoes', NULL, '#', 19, 1),
	(22, 2, 'Clothing', NULL, '#', 19, 1),
	(23, 2, 'Hand bag', NULL, '#', 19, 1);
/*!40000 ALTER TABLE `cate_sub` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

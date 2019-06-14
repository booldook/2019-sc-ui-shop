/* 1차 카테고리 불러오기 */
SELECT * FROM cates WHERE pos = 'T';

/* 2차 카테고리 불러오기 */
SELECT * FROM cate_sub WHERE pid = 2;

/* 3차 카테고리 불러오기 */
SELECT * FROM cate_sub WHERE grp = 7 AND lev = 1;



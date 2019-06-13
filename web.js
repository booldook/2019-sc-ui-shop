const port = 8001;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./module/mysql_conn');
const conn = db.conn;

app.listen(port, () => {
	console.log("Connected at "+port);
});

// 초기설정
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static('./public'));

// Router
app.post('/admin/:method', (req, res) => {
	var method = req.params.method;		//login
	var uid = req.body.uid;						//admin
	var upw = req.body.upw;						//111111
	switch(method) {
		case "login":
			// 데이터베이스 접근
			conn.getConnection((err, connect) => {
				if(err) {
					connect.release();
					res.send('<h5>SQL Connection Error!</h5>');
				}
				else {
					var sql = ` SELECT uid FROM admin WHERE uid='${uid}' AND upw='${upw}' `;
					connect.query(sql, (err, result) => {
						if(err) {
							connect.release();
							res.send('<h5>SQL Query Error!</h5>');
						}
						else {
							connect.release();
							if(result[0]) {
								res.redirect("/admin/cate_top1.html");
							}
							else {
								vals = {
									alertMsg: "아이디와 패스워드를 확인해 주세요.",
									locURL: "/admin/login.html"
								};
								res.render('alert', vals);
							}
						}
					});
				}
			});
			break;
		default:
			res.send("ERROR! 정상적인 접근이 아닙니다.");
			break;
	}
});

// Ajax 요청 관리
/*
/ajax/cate/:top,left/:c,r,u,d
/ajax/cate_sub/:num/:c,r,u,d
/ajax/ban/:c,r,u,d
/ajax/prd/:c,r,u,d
conn.getConnection((err, connect)=>{
	connect.query(sql, (err, result, field)=>{

	});
});
*/
app.get('/ajax/cate/:method/:chk', (req, res) => {
	var method = req.params.method;
	var chk = req.params.chk;
	switch(method) {
		case "top":
			switch(chk) {
				case "r":
					conn.getConnection((err, connect) => {
						if(err) res.send("Database 접속이 불안정 합니다.<br>다시 시도해 주세요.");
						else {
							var sql = " SELECT * FROM cates ORDER BY id ASC ";
							connect.query(sql, (err, result, field) => {
								res.send(result);
							});
						}
					});
					break;
				case "d":
					break;
				default:
					res.send("ERROR! 정상적인 접근이 아닙니다.");
					break;
			}
			break;
		default:
			res.send("ERROR! 정상적인 접근이 아닙니다.");
			break;
	}
});
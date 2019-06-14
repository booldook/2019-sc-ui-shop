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

app.get(['/ajax/top/:method', '/ajax/top/:method/:id'], (req, res) => {
	var method = req.params.method;
	var id = req.params.id;
	conn.getConnection((err, connect) => {
		if(err) {
			connect.release();
			res.send("MySQL Connect Error!");
		}
		else {
			switch(method) {
				case "r":
					var sql = "SELECT * FROM cates WHERE pos='T' ORDER BY id ASC";
					connect.query(sql, (err, result, field) => {
						if(err) {
							connect.release();
							res.send("MySQL Query Error!");
						}
						else {
							var cateTop = result;
							for(let i in cateTop) {
								var sql = `SELECT * FROM cate_sub WHERE pid = ${cateTop[i].id} ORDER BY lev ASC, id ASC`;
								connect.query(sql, (err, result2, field) => {
									if(err) res.send("MySQL Query Error!");
									else {
										cateTop[i].subs = result2;
									}
								});
							}
							connect.release();
							res.send(cateTop);
						}
					});
					break;
				case "r1": 
					break;
				case "r2": 
					break;
				case "r3": 
					break;
				case "d": 
					break;
				default:
					break;
			}
		}
	});
});
app.get('/ajax/left/', (req, res)=>{});
app.get('/ajax/ban/', (req, res)=>{});
app.get('/ajax/prd/', (req, res)=>{});



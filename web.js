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
								res.redirect("/admin/admin.html");
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
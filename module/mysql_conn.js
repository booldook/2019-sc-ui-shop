const mysql = require('mysql');
const conn = mysql.createPool({
	host: 'localhost',
	user: 'booldook',
	password: '000000',
	port: 3306,
	database: 'booldook',
	connectionLimit: 10
});

module.exports ={
	mysql,
	conn
};
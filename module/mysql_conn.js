const mysql = require('mysql');
const option = {
	host: 'localhost',
	user: 'booldook',
	password: '000000',
	port: 3306,
	database: 'booldook',
	connectionLimit: 10
};
const conn = mysql.createPool(option);

module.exports ={
	mysql,
	conn
};
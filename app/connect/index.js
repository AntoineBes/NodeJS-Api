const mysql = require('mysql2');
const config = require('../configs/db.config');
const conn = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});
//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('SQL connect success');
});

module.exports = conn
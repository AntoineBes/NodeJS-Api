const config = require("../configs/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const conn = require('../connect');
exports.CreateUser = (req, res) => {
    let data = {
        username: req.body.username,
        email_address: req.body.email_address,
        password: bcrypt.hashSync(req.body.password, 12),
        createdAt: Date.now(),
        updatedAt: Date.now(),
    };
    let sql = "INSERT INTO users SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
};

exports.Signin = (req, res) => {

};
//GET all Users
exports.FindAll = (req, res) => {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
};

//GET one User
exports.FindOne = (req, res) => {
    let sql = `SELECT * FROM users WHERE id = '${req.body.id}'`;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
};

//Delete User
exports.Destroyed = (req, res) => {
    let sql = `DELETE FROM users WHERE id = '${req.body.id}'`;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
}
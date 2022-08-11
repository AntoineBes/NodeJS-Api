const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config.js");
const conn = require('../connect');
verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};
checkDuplicateEmail = (req, res, next) => {
    let sql = `SELECT email_address FROM users WHERE email_address = '${req.body.email_address}'`;
    let query = conn.query(sql, (err, results) => {
        if (results = []) {
            console.log('results is null')
            next();
        } else {
            console.log('results is not null')
            return res.status(401).send({
                message: err
            });
        }

    })

}

const authJwt = {
    checkDuplicateEmail: checkDuplicateEmail,
    verifyToken: verifyToken,
};
module.exports = authJwt;
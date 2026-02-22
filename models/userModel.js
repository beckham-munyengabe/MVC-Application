const db = require('../config/db')

const User = {
    create: (name,age,password,callback) =>{
        const sql = "INSERT INTO users (name,age,password) VALUES (?,?,?)";
        db.query(sql, [name,age,password], callback);
    },

    getAll: (callback) =>{
        const sql = "SELECT * FROM users";
        db.query(sql, callback);
    }
};


module.exports = User;
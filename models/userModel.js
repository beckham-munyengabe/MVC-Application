const db = require('../config/db')

const User = {
    create: (name,age,password,callback) =>{
        const sql = "INSERT INTO users (name,age,password) VALUES (?,?,?)";
        db.query(sql, [name,age,password], callback);
    },

    getAll: (callback) =>{
        const sql = "SELECT * FROM users";
        db.query(sql, callback);
    },

    update:(id,name, age, password, callback) =>{
        const sql = "UPDATE users SET name=?, age=?, password=? WHERE id=?";
        db.query(sql, [name, age, password, id], callback)
    },

    delete:(id,callback) =>{
        const sql = "DELETE FROM users WHERE id=?"
        db.query(sql,[id] ,callback)
    }

};



module.exports = User;
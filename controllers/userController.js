const User = require('../models/userModel');

exports.createUser = (req,res) =>{
    const {name, age, password} = req.body;
    User.create(name, age, password, (err, result)=>{
        if(err){
            res.send("Error inserting user")
        }
        else{
            res.send("User created successfully")
        }
    })
}

exports.getUsers = (req,res) =>{
    User.getAll((err,results) =>{
        if(err){
            res.send("Error fetching users")
        }
        else{
            res.json(results)
        }
    })
}
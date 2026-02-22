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


exports.updateUser = (req,res) =>{
    const id = req.params.id
    const {name, age, password} = req.body
    User.update(id, name, age, password, (err) =>{
        if(err){
            res.send("error in updating")
        }
        else{
            res.send("User updated successfully")
        }
    })
}

exports.delete = (req,res) =>{
    const id = req.params.id
    User.delete(id, (err) =>{
        if(err){
            res.send("Error in deleting user")
        }
        else{
            res.send("User deleted successfully")
        }
    })
}
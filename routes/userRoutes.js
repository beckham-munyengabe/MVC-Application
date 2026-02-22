const express = require("express")
const route = express.Router()

const userController = require("../controllers/userController")

route.post("/users", userController.createUser);

route.get("/users", userController.getUsers)

module.exports = route
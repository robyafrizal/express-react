const express = require("express"); //import express
const router = express.Router(); //init express router
const verifyToken = require("../middlewares/auth"); //import verifyToken

//import register controller
const registerController = require("../controllers/RegisterController");
//import login controller
const loginController = require("../controllers/LoginController");
//import user controller
const userController = require("../controllers/UserController");

//import validate register
const { validateRegister, validateLogin } = require("../utils/validators/auth");
const { validateUser } = require("../utils/validators/user");

//define route for register & login
router.post("/register", validateRegister, registerController.register);
router.post("/login", validateLogin, loginController.login);
router.get("/users", verifyToken, userController.findUsers);
router.post("/users", verifyToken, validateUser, userController.createUser);

//export router
module.exports = router;

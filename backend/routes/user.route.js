const router = require('express').Router();
const auth = require('../middleware/auth');
const userController = require("../controllers/user.controller")

router.post("/login", userController.validateData("loginUser"), userController.loginUser )
router.post("/register" ,userController.validateData("signupUser"), userController.signupUser)

module.exports=router
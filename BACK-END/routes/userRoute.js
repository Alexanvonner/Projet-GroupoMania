// import express 
const express = require('express');

// Import MiddleWare
const middlewarePassword = require("../middleware/password");
//import controllers/user.js
const userController = require("../controllers/userCtrl");

// la fonction Router()
const router = express.Router();

// la route signup
router.post('/signup',userController.signup);

// test
router.get('/',userController.test);

// la route login
//router.post("/login" , userController.login)

// exportation du module
module.exports = router;
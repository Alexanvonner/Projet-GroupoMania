// import express 
const express = require('express');

// Import MiddleWare
const middlewarePassword = require("../middleware/password");
//import controllers/user.js
const userMessage = require("../controllers/messageCtrl");

// la fonction Router()
const router = express.Router();

// route signup
router.get('/message', userMessage.message);


// exportation du module
module.exports = router;
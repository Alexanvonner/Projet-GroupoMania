jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
require('dotenv').config();

const SECRET_KEY = 'ICKFICKDICJISWKISCID';

module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId : userData.userId,
            isAdmin : userData.isAdmin
        },
        SECRET_KEY , { expiresIn: 60 * 60 });
    }
}


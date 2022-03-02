const models = require('../models/message');

exports.message = function(req,res){
 return res.status(200).json({"result": "je suis ici"});
};
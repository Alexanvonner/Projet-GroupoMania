var Sequelize = require('sequelize');
var connexion = new Sequelize('database_projet_7', 'root', '11021102Aa!', {
host: 'localhost',
dialect: 'mysql',
logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
});



// sequelize
//  .authenticate()
//  .then(() => {
//   console.info('INFO - Database connected.')
//  })
//  .catch(err => {
//   console.error('ERROR - Unable to connect to the database:', err)
//  })

exports.connexion = connexion;
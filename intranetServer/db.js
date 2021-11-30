//CONEXÃO COM O JS
const Sequelize = require('sequelize');
const sequelize = new Sequelize('conformity', 'root', 'matheus0', {dialect: 'mysql', host: 'localhost'});
module.exports = sequelize;
const Sequelize = require('sequelize');
const database = require('./db');
 
const Tarefa = database.define('tarefa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivelUrgencia: {
        type: Sequelize.INTEGER(1),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataTarefa: {
        type: Sequelize.DATE,
        allowNull: false
    }
 
}, {
    tableName: 'Tarefas'
});
 
module.exports = Tarefa
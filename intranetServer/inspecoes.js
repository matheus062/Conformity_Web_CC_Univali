const Sequelize = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/dist/lib/query-types');
const database = require('./db');
 
const Inspecao = database.define('inspecao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        FOREIGNKEY:true
    },
    armazem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destino: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataInspecao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataInclusao: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {
    tableName: 'Inspecoes'
});
 
module.exports = Inspecao
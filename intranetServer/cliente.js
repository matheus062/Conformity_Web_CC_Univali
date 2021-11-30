const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone1: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    telefone2: {
        type: Sequelize.STRING(16),
        allowNull: false
    }
}, {
    tableName: 'Clientes'
});

module.exports = Cliente
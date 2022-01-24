const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');
const Produto = require('./produtos');

const produto = Produto(sequelize, Sequelize.DataTypes);

const db = {
    produto: produto,
    sequelize: sequelize
}

module.exports = db;
const { database } = require("pg/lib/defaults");

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'produtos',
    username: 'postgres',
    password: '1234'
}
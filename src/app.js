const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./api');
const { sequelize } = require('./models/index.js');

app.use(express.json());
app.use(cors());
app.use('/', router);

sequelize.sync().then(() => {
    console.log("conectado com o banco de dados")
})

app.listen(3000, () => {
    console.log('app online');
})
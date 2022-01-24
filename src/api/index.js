const express = require('express');
const router = express.Router();
const produtosRouter = require('./produtos')

router.get('/', (req, res) => {
    res.send('App Online');
})

router.post('/', (req, res) => {
    res.send('Post Feito');
})

router.use('/produtos', produtosRouter)

module.exports = router;
const express = require('express');
const router = express.Router();
const { produto } = require('../models');
const ProdutoService = require('../services/produtos');
const { body, check, validationResult } = require('express-validator');

const produtoService = new ProdutoService(produto);

router.get('/', async(req, res) => {
    const produtos = await produtoService.get();
    res.status(200).json(produtos);
})

router.post('/',
    body('thumbnail').not().isEmpty().trim().escape(),
    async(req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { thumbnail, permalink, buscador, categoria, titulo, price, query } = req.body;
        try {
            await produtoService.adicionar({ thumbnail, permalink, buscador, categoria, titulo, price, query });
            res.status(201).send('Produto Adicionado');
        } catch (error) {
            res.status(400).send(error.message);
            throw error;
        }
    })


module.exports = router;
const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos')

const router = express.Router();

router.post('/', controllerProdutos.validar, controllerProdutos.criar);

router.get('/', controllerProdutos.listar);

router.get('/:id', controllerProdutos.obter); 

module.exports = router;


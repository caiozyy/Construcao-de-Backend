const express = require('express');

const produtosController = require('../controllers/controller_produto');

const router = express.Router();

router.get('/', produtosController.listarTodos);

router.get('/:produtosId', produtosController.buscarPeloId, produtosController.exibir);

router.post('/', produtosController.validarDados, produtosController.criar);

router.put('/:produtosId', produtosController.buscarPeloId, produtosController.validarDados, produtosController.atualizar);

router.delete('/:produtosId', produtosController.buscarPeloId, produtosController.remover);

module.exports = router;
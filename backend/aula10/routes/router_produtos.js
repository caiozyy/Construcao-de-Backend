const express = require("express");

const validarToken = require('../middlewares/auth')

const controllerProdutos = require("../controllers/controller_produtos");

const router = express.Router();

router.post("/", controllerProdutos.validar, controllerProdutos.criar);

router.get("/", validarToken, controllerProdutos.listar);

router.get("/:id", controllerProdutos.buscar, controllerProdutos.obter);

router.put("/:id", 
controllerProdutos.buscar,
controllerProdutos.validar,  
controllerProdutos.atualizar);

router.delete('/:id', controllerProdutos.buscar, controllerProdutos.remover);

module.exports = router;

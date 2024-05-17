const express = require("express");

const controllerProdutos = require("../controllers/controller_produtos");

const router = express.Router();

router.post("/", controllerProdutos.validar, controllerProdutos.criar);

router.get("/", controllerProdutos.listar);

router.get("/:id", controllerProdutos.buscar, controllerProdutos.obter);

router.put('/:id', controllerProdutos.atualizar)

module.exports = router;
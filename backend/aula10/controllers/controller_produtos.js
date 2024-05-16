const mongoose = require('mongoose');

const Produto = require("../models/models_produtos");

async function validar(req, res, next) {
  try {
    const produto = new Produto(req.body);
    await produto.validate();
    next();
  } catch (error) {
    res.status(422).json({});
  }
}

async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}

async function listar(req, res){
  const produtos = await Produto.find({});
  res.json(produtos);
}

async function obter(req, res){
  const id = new mongoose.Types.ObjectId(req.params.id);
  const produto = await Produto.findOne({ _id: id});
  res.json(produto);
}

module.exports = { criar, validar, listar, obter };

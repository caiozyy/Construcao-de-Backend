const express = require('express');

const routerProdutos = require('./router');

const app = express();

app.use(express.json()); // para usar o body com o json

app.use(routerProdutos);

app.listen(3000, function () {
    console.log("API etsá ON!");
})

module.exports = app

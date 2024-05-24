const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/users");

function cifrarSenha(senha, salt) {
  const hash = crypto.createHmac("sha256", salt);
  hash.update(senha);
  return hash.digest("hex");
}

async function criar(req, res) {
  const salt = crypto.randomBytes(16).toString("hex");
  const senhaCifrada = cifrarSenha(req.body.senha, salt);
  const novoUsuario = { email: req.body.email, senha: senhaCifrada, salt };
  await Usuario.create(novoUsuario);
  res.status(201).json(novoUsuario);
}

async function entrar(req, res) {
  const usuario = await Usuario.findOne({ email: req.body.email });
  if (usuario) {
    const senhaCifrada = cifrarSenha(req.body.senha, usuario.salt);
    if (senhaCifrada === usuario.senha) {
      res.json({
        token: jwt.sign({ email: usuario.email }, "123456789", {
          expiresIn: "1m",
        }),
      });
    } else {
      res.status(401).json({ msg: "Acesso Negado" });
    }
  } else {
    res.status(400).json({ msg: "Credenciais Invalida" });
  }
}

module.exports = { criar, entrar };

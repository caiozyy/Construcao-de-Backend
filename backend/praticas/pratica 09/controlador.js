const modelo = require("./modelo");

async function incluirContato(nome, email, telefone) {
  const contato = new modelo.Contato(nome, email, telefone);
  const result = await modelo.incluir(contato);
  if (result) {
    contato.id = result.id;
  }
  return contato;
}

async function atualizarContato(nome, email, telefone) {
  const contato = consultarContato(nome);
  if (contato) {
    contato.email = email;
    contato.telefone = telefone;
    await modelo.alterar(contato);
  }
  return contato;
}

async function consultarContato(nome) {
  const contato = new modelo.Contato(nome);
  const result = await modelo.consultar(contato);
  if (result) {
    contato.id = result._id;
    contato.email = result.email;
    contato.telefone = result.telefone;
  }
  return contato;
};

async function removerContato(nome) {
  const contato = consultarContato(nome);
  if (contato) {
    await modelo.deletar(contato);
  }
  return contato;
}

module.exports = {
  incluirContato,
  atualizarContato,
  consultarContato,
  removerContato,
};

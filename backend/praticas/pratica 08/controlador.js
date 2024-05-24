const Contato = require('./modelo');

function adicionarContato(nome, email, telefone){
    const contato = new Contato(nome, email, telefone)
    contato.inserir();
}

function buscarContato(nome){
    const contato = new Contato(nome);
    contato.buscar();
    return contato;
}

function atualizarContato(nome, email, telefone){
    const contato = buscarContato()
            if(buscarContato){
                this.nome = nome,
                this.email = email,
                this.telefone = telefone;
            contato.alterar();
            }
}

function removerContato(nome){
    const contato = buscarContato(nome)
    if(buscarContato){
        contato.deletar();
    }
}

module.exports = {adicionarContato, buscarContato, atualizarContato, removerContato};
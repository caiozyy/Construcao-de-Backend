const readline = require('readline-sync');
const contatoControlador = require('./controlador');

function menu(){
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
};

function escolherOpcao(opcao){
    switch(opcao) {
        case '1' :{
            const nome = readline.question("Qual o seu nome? ");
            const email = readline.question("Qual o seu email? ");
            const telefone = readline.question("Qual e o seu telefone? ");
            contatoControlador.adicionarContato(nome, email, telefone);
          break;}
        case '2' :{ 
            const nome = readline.question("Qual o seu nome? ");
            const buscado = controlador.buscarContato(nome, email, telefone);
            console.log(buscado);
          break;}
        case '3' : {
            const nome = readline.question("Qual o seu nome? ");
            const email = readline.question("Qual o seu email? ");
            const telefone = readline.question("Qual e o seu telefone? ");
            const atualizarContato = contatoControlador.atualizarContato(nome, email, telefone)
          break;}
        case '4': {
            const nome = readline.question("Qual o seu nome? ");
            const removidoContato = contatoControlador.removerContato(nome);
          break; }
        case '5': process.exit();
        default: console.log('Opção Invalida');
    }
}

function main(){
    while(true){
        menu();
        const opcao = readline.question("Entre com uma opcao")
        escolherOpcao(opcao);
    }
}

main();
const conectarDb = require('./database');
const collection = conectarDb().then((db) => db.collection('contatos'));
//const collection = db.collection('contatos'); 


class Contato{
    constructor(nome, email, telefone){
        this.nome = nome,
        this.email = email,
        this.telefone = telefone,
        this.id = null;
        //this.db = conectarDb();
        //this.collection = this.db.collection('contatos')
    } 
    inserir(){
        console.log(collection);
        let result = collection.insertOne({nome, email: this.email, telefone: this.telefone});
        this.id = result.ops[0]._id;
    } 
    alterar(){
        collection.updadeOne({_id: this.id}, {$set:{nome, email, telefone}});
    }
    deletar(){
        collection.deleteOne({_id: this.id})
    }
    buscar(){
        let result = collection.findOne({nome: this.nome})
        if(result){
            this.nome = nome,
            this.email = email,
            this.telefone = telefone;
        }
    }
}

module.exports = Contato;



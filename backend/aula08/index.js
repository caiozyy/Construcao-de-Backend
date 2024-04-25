const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://searchoncaiozinho:caiotalita12@caiocorrea.nqsctv6.mongodb.net/'
const client = new MongoClient(url);

async function conectar() {
    try {
        await client.connect();
    } catch (error){
        console.log("Deu ruim!", error);
    }
}

async function inserir(produto) {
    const db = client.db('loja');
    return await db.collection("produtos").insertOne(produto);
}

async function listar() {
    const db = client.db('loja');
    return await db.collection("produtos").find({}).toArray();

}

async function atualizar(id, produto){
    const db = client.db('loja');
    return await db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produto});
}

async function remover(id){
    const db = client.db('loja');
    return await db.collection('produtos').deleteOne({_id: new ObjectId(id)});
}

async function main() {
    await conectar();
    let result = await inserir({nome: "murango", preco:"9.0"});
    console.log('Produto inserido', result);

    result = await listar();
    console.log("List de produtos", result);

    result = await atualizar("662a56adc58dbfccdfc27fcb", {nome: "uvinha", preco: "18.0"});
    console.log('Produto atualizado', result);

    result = await remover("662a5c538e8dde3718dc0265");
    console.log('Produto removido', result);
    await client.close();
}

main (); 
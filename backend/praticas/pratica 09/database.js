const { MongoClient } = require("mongodb");

const url = "mongodb+srv://searchoncaiozinho:caiotalita12@caiocorrea.nqsctv6.mongodb.net/";

let db = null;

async function conectarDb() {
  if (db == null) {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Agenda");
  }
  return db;
}

module.exports = conectarDb;

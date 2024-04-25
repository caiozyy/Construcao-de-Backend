const supertest = require("express");

const app = require("./index");
const request = supertest(app);

test('Deve retornar com o status 200 e um JSON GET',
async function(){
    const responce = await request.get("/produtos");
    expect (responce.status).toBe(200);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 201 e um JSON POST',
async function(){
    const responce = await request.post("/produtos")
    .send({nome: "uva", preco: 20.00});
    expect (responce.status).toBe(201);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 422 sem um JSON no POST',
async function(){
    const responce = await request.post("/produtos");
    expect (responce.status).toBe(422);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 200 e um JSON no PUT',
async function(){
    const responce = await request.put("/produtos/1")
    .send({nome: "uva verde", preco: 18.00});
    expect (responce.status).toBe(200);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 404 e um JSON no PUT',
async function(){
    const responce = await request.put("/produtos/100");
    expect (responce.status).toBe(404);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 200 e um JSON no GET',
async function(){
    const responce = await request.get("/produtos/1");
    expect (responce.status).toBe(200);
    expect (responce.headers['content-type']).toMatch(/json/);
});

test('Deve retornar com o status 404 e um JSON no GET',
async function(){
    const responce = await request.get("/produtos/100");
    expect (responce.status).toBe(404);
    expect (responce.headers['content-type']).toMatch(/json/);
});



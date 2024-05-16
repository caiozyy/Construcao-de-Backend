const supertest = require("supertest");

const app = require("../app");

const req = supertest(app);

let id = null;

describe("API Loja Virtual - Produtos", () => {
  // test("Deve retornar 201 e um JSON no POST /produtos", async () => {
  //   const res = await req
  //     .post("/produtos")
  //     .send({ nome: "Morango", preco: 9.0 });
  //   expect(res.status).toBe(201);
  //   expect(res.type).toBe("application/json");
  // });

  test("Deve retorna 422 e JSON no POST /produtos", async () => {
    const res = await req.post("/produtos").send({});
    expect(res.status).toBe(422);
    expect(res.type).toBe("application/json");
  });

  test("Deve retornar 200 e JSON no GET /produtos", async () => {
    const res = await req.get("/produtos");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
    if (res.body.length > 0) {
      id = res.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e JSON no GET /produtos/id", async () => {
    const res = await req.get(`/produtos/${id}`)
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
  });
});

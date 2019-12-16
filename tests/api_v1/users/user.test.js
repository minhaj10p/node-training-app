const { App } = require("../../../app");
const config = require('../../../app/config');
const supertest = require("supertest");

describe("User API V1 ", () => {
  let api;
  beforeAll(async () => {
    const app = new App(config['test'])
    await app.bootstrap(() => {});
    api = supertest(app.get());
  })

  it("Can get users", async () => {
    const response = await api.get("/api/v1/users/1");
    expect(response.statusCode).toBe(404)
  });

  it('Should throw Bad Request on invalid user id', async () => {
    const response =  await api.get('/api/v1/users/-1')
    expect(response.statusCode).toBe(404);
  })
});

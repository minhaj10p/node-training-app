const { App } = require("../../../app");
const supertest = require("supertest");

describe("User API V1 ", () => {
  let api;
  beforeEach(() => {
    api = supertest(new App({}).get());
  })

  it("Can get users", async () => {
    const response = await api.get("/api/v1/users/1");
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
        }
    )
  });

  it('Should throw Bad Request on invalid user id', async () => {
    const response =  await api.get('/api/v1/users/-1')
    expect(response.statusCode).toBe(400);
  })
});

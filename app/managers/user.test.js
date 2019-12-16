const { UserManager } = require("./user");
describe("User manager ", () => {
  let mgr;
  beforeEach(() => {
    mgr = new UserManager();
  });
  it("should get user", async () => {
    mgr.users = {
      findOne: () => ({ id: 1, name: "Ali" })
    };

    expect(await mgr.getUser()).toStrictEqual({ id: 1, name: "Ali" });
  });
});

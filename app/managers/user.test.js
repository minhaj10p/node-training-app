const { UserManager } = require("./user");
const { InvalidUserObject } = require("../errors");
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

  it("should create user", async () => {
    const user = { id: 2, name: "Wasif" };
    mgr.users = new class {
      constructor() {
        this.users = [];
      }
      create(user) {
        this.users.push(user);
      }
      findOne() { return this.users[0]}
    }

    let exception;
    try {
      await mgr.createUser(user);
      const userOut = await mgr.getUser(1)
      expect(userOut).toStrictEqual(user);
    } catch (ex) {
      exception = ex;
    }
    expect(exception).toBeUndefined();
  });

  it("should throw exception on empty name", async () => {
    mgr.users = {
      create: () => {}
    };
    let exception;
    try {
      await mgr.createUser(null);
    } catch (ex) {
      exception = ex;
    } finally {
      expect(exception).toBeInstanceOf(InvalidUserObject);
    }
  });
});

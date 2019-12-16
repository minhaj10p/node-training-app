const { UserManager } = require("../managers");
const { UserNotFound } = require("../errors");

class UserController {
  constructor(router, db) {
    this.userManager = new UserManager();
  }
  async getUser(req, res) {
    try {
      const user = await this.userManager.getUser(req.params.id);
      res.json(user);
    } catch (ex) {
      switch (ex.constructor) {
        case UserNotFound:
          res.status(404);
          res.json({ message: "User not found" });
          return;
        default:
          console.log(ex);
          res.json({ status: 500 });
          break;
      }
    }
  }
}

module.exports = { UserController };

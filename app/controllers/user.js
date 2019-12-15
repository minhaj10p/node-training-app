const { UserManager } = require("../managers");
const { UserNotFound } = require("../errors");

class UserController {
  constructor(router) {
    this.userManager = new UserManager();
    router.get("/api/v1/users/:id", (req, res) => this.getUser(req, res));
  }

  async getUser(req, res) {

    try {

      const user = await this.userManager.getUser(req.params.id);
      res.json(user);

    } catch (ex) {

      switch (ex.constructor) {
        case UserNotFound:
          res.status(400);
          res.json({ message: 'User not found' });
          return;
        default:
          res.json({ status: 500 });
          break;
      }

    }
  }
}

module.exports = { UserController };

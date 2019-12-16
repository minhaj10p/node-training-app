// user.js

const { UserNotFound, InvalidUserObject } = require('../errors');
const { db } = require('../models')
class UserManager {
  constructor() {
    this.users = db.User;
  }

  async getUser(id) {
      const user = await this.users.findOne({})
      if(user) {
          return Promise.resolve(user);
      }
      throw new UserNotFound('user not found with id: ' + id);
  }
  async createUser(user) {
    if(!user) {
      throw new InvalidUserObject();
    }
    await this.users.create(user)
  }
}

module.exports = { UserManager };

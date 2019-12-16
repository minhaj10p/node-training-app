// user.js

const { UserNotFound } = require('../errors');
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
}

module.exports = { UserManager };

// user.js

const { UserNotFound } = require('../errors');
const { User } = require('../models')
class UserManager {
  constructor() {
    this.users = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe"
      }
    ];
  }

  getUser(id) {
      const user = this.users.find((user) => user.id == id)
      if(user) {
          return Promise.resolve(user);
      }
      throw new UserNotFound('user not found with id: ' + id);
  }
}

module.exports = { UserManager };

const express = require("express");

const controllers = require('./controllers');
const { db, initialize } = require('./models')

class App {
  constructor(configuration) {

    this.configuration = configuration;
    this.app = express();
    this.router = express.Router();
    this.syncDatabase(configuration.db);
    this.registerHttpControllers(this.router);
    this.app.use(this.router);

  }

  get() {
    return this.app;
  }

  listen(cb) {
      this.app.listen(this.configuration.port, cb(this.configuration.port));
  }

  registerHttpControllers(router) {
      new controllers.UserController(router);
  }

  async syncDatabase(conf) {
    initialize(conf);
    await db.sequelize.sync();
  }
}

module.exports = { App };

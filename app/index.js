const express = require("express");

const { registerRoutes } = require("./routes");
const { db, initialize } = require("./models");

class App {
  constructor(configuration) {
    this.configuration = configuration;
    this.app = express();
    this.router = express.Router();
    this.bootstrapped = false;
  }

  async bootstrap() {
    await this.syncDatabase(this.configuration.db);
    registerRoutes(this.router);
    this.app.use(this.router);
    this.bootstrapped = true;
  }

  get() {
    return this.app;
  }

  listen(cb) {
    this.app.listen(this.configuration.port, cb(this.configuration.port));
  }

  async syncDatabase(conf) {
    initialize(conf);
    return db.sequelize.sync();
  }
}

module.exports = { App };

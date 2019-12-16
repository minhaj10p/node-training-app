const express = require("express");
const bodyParser = require('body-parser');

const { registerRoutes } = require("./routes");
const { db, initialize } = require("./models");

class App {
  constructor(configuration) {
    this.configuration = configuration;
    this.app = express();
    this.router = express.Router();
  }

  async bootstrap(cb) {
    this.app.use(bodyParser())
    await this.syncDatabase(this.configuration.db);
    registerRoutes(this.router);
    this.app.use(this.router);
    this.app.listen(this.configuration.port, cb(this.configuration.port));
  }

  get() {
    return this.app;
  }

  // listen(cb) {
  // }

  async syncDatabase(conf) {
    initialize(conf);
    return db.sequelize.sync();
  }
}

module.exports = { App };

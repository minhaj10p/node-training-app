const express = require("express");

const { registerRoutes } = require('./routes');
const { db, initialize } = require('./models')

class App {
  constructor(configuration) {

    this.configuration = configuration;
    this.app = express();
    this.router = express.Router();
    registerRoutes(this.router);
    this.syncDatabase(configuration.db);
    this.app.use(this.router);

  }

  get() {
    return this.app;
  }

  listen(cb) {
      this.app.listen(this.configuration.port, cb(this.configuration.port));
  }


  async syncDatabase(conf) {
    initialize(conf);
    await db.sequelize.sync();
  }
}

module.exports = { App };

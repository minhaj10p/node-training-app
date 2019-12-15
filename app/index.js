const express = require("express");

const controllers = require('./controllers');

class App {
  constructor(configuration) {

    this.configuration = configuration;
    this.app = express();
    this.router = express.Router();

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
}

module.exports = { App };

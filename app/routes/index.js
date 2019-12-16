const { UserRoutes } = require("./user");

module.exports = {
  registerRoutes: router => {
    new UserRoutes(router).registerRoutes();
  }
};

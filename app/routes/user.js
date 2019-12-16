

const controllers = require('../controllers');


class UserRoutes {
    constructor(router) {
        this.userController = new controllers.UserController();
        this.router = router;
        this.registerRoutes();

    }

    registerRoutes() {
        this.router.get("/api/v1/users/:id",  (req, res) => this.userController.getUser(req, res));
    }
}

module.exports = { UserRoutes }

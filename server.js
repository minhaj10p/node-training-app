const { App } = require("./app");
const config = require('./app/config')['development'];

new App(config).listen((port) => {
    console.log('app listening on port: ', port);
});

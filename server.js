const { App } = require("./app");
const config = require('./app/config')['development'];

new App(config).bootstrap((port) => {
    console.log('app listening on port: ', port);
});

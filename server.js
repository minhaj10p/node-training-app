const { App } = require("./app");
const configuration = {
  port: 3000
};

new App(configuration).listen((port) => {
    console.log('app listening on port: ', port);
});

const controllers = {};

const HelloWorldController = require("./HelloWorldController");
controllers.helloWorld = new HelloWorldController();

module.exports = controllers
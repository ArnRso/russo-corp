const models = require("../models");
class HelloWorldController {
    async helloWorld(req, res) {
        const messages = await models.helloWorld.findAll();
        res.send(messages);
    }
}

module.exports = HelloWorldController;
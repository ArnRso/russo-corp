const AbstractManager = require('./AbstractManager');
class HelloWorldManager extends AbstractManager {
    constructor() {
        super({ table: "hello_world" });
    }
}

module.exports = HelloWorldManager;
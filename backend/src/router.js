const express = require("express");
const router = express.Router();
const controllers = require("./controller");

router.get('/hello-world', controllers.helloWorld.helloWorld)

module.exports = router;

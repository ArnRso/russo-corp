const express = require("express");
const {helloWorld} = require("./controller/helloWorldController");
const router = express.Router();

router.get('/hello-world', helloWorld)

module.exports = router;

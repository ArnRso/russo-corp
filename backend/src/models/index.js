const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

pool.getConnection()
    .then((connection) => {
        console.info(`Using database ${DB_NAME}`);

        connection.release();
    })
    .catch((error) => {
        console.warn(
            "Warning:",
            "Failed to establish a database connection.",
            "Please check your database credentials in the .env file if you need a database access."
        );
        console.error("Error message:", error.message);
    });

const models = {};
const HelloWorldManager = require("./HelloWorldManager");

models.helloWorld = new HelloWorldManager();
models.helloWorld.setDatabase(pool);

module.exports = models;
class AbstractManager {
    constructor({ table }) {
        this.table = table;
    }

    async findAll() {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
        return rows;
    }

    setDatabase(database) {
        this.database = database;
    }
}

module.exports = AbstractManager;
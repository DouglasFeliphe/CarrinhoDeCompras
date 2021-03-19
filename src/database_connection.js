const pg = require('pg');

const database_connection = new pg.Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'BDII_TSI',
        password: 'admin',
        port: 5432,
    }
)

module.exports = database_connection
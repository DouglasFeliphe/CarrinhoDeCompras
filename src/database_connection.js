const { Pool } = require('pg');
const { param } = require('./Routes/clientRoutes');

const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'BDII_TSI',
        password: 'admin',
        port: 5432,
    }
)

module.exports = {
    query: (text, params) => pool.query(text, params)
}
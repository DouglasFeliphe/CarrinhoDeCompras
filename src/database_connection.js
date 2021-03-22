const { Pool } = require('pg');
const { param } = require('./Routes/clientsRoutes');

const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'BDII_TSI',
        schema: 'carrinho_de_compras',
        password: 'admin',
        port: 5432,
    }
)

module.exports = {
    query: (text, params) => pool.query(text, params)
}
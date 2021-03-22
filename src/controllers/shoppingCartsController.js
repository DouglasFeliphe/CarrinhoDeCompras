const db = require('../database_connection')

module.exports = {

    async index(request, response) {
    },

    async create(request, response) {
        const { cod_cliente, cod_produto } = request.body

        try {

            await db.query(
                'INSERT INTO carrinho_de_compras.carrinho_de_compras VALUES ($1, $2)',
                [cod_cliente, cod_produto]
            )

            const { rows } = await db.query(
                'SELECT pd.* from carrinho_de_compras.produtos as pd WHERE pd.codigo = $1',
                [cod_produto]
            )

            return response.json(rows[0])

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao adicionar o produto no carrinho do cliente.',
                error: error.message
            })
        }
    },

    async show(request, response) {
        const { codigo } = request.params

        try {
            const { rows } = await db.query(
                'SELECT pd.* FROM carrinho_de_compras.clientes as c ' +
                'left join carrinho_de_compras.carrinho_de_compras as cc ' +
                'on cc.cod_cliente = c.codigo ' +
                'inner join carrinho_de_compras.produtos as pd ' +
                'on cc.cod_produto = pd.codigo ' +
                'where c.codigo = $1',
                [codigo]
            )

            if (!rows) {
                return response.status(404).json({ message: '0 resultados retornados.' })
            }
            return response.json(rows)

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao listar os produtos do carrinho do cliente.',
                error: error.message
            })
        }
    },

    async update(request, response) {
    },

    async delete(request, response) {
    }
}
const db = require('../database_connection')

module.exports = {

    async index(request, response) {
    },

    async create(request, response) {
        
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
const db = require('../database_connection')

module.exports = {

    async create(request, response) {
        const { cod_cliente, cod_produto } = request.params

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
        const { cod_cliente } = request.params

        try {
            const { rows } = await db.query(
                'SELECT pd.* FROM carrinho_de_compras.clientes as c ' +
                'left join carrinho_de_compras.carrinho_de_compras as cc ' +
                'on cc.cod_cliente = c.codigo ' +
                'inner join carrinho_de_compras.produtos as pd ' +
                'on cc.cod_produto = pd.codigo ' +
                'where c.codigo = $1',
                [cod_cliente]
            )

            if (!rows[0]) {
                return response.status(202).json({ message: '0 resultados retornados.' })
            }
            return response.json(rows)

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao listar os produtos do carrinho do cliente.',
                error: error.message
            })
        }
    },

    async delete(request, response) {
        const { cod_cliente, cod_produto } = request.params

        try {
            await db.query(
                'DELETE FROM carrinho_de_compras.carrinho_de_compras as cc ' +
                'WHERE cc.cod_cliente = $1 ' +
                'AND cc.cod_produto = $2 ',
                [cod_cliente, cod_produto]
            )

            return response.json({ message: 'produto excluido do carrinho com sucesso.' })

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao deletar o produto do carrinho do cliente.',
                error: error.message
            })
        }
    },

    async deleteAll(request, response) {
        const { cod_cliente } = request.params

        try {
            await db.query(
                'DELETE FROM carrinho_de_compras.carrinho_de_compras as cc ' +
                'WHERE cc.cod_cliente = $1',
                [cod_cliente]
            )

            return response.json({ message: 'produtos excluidos do carrinho com sucesso.' })

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao deletar os produtos do carrinho do cliente.',
                error: error.message
            })
        }
    },
}



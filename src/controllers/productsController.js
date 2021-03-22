
const db = require('../database_connection')

module.exports = {

    async index(request, response) {

        try {
            const { rows } = await db.query('SELECT codigo, nome, quantidade FROM carrinho_de_compras.produtos')

            if (!rows) {
                return response.status(404).json({ message: '0 results returned' })
            }
            return response.json(rows)

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao listar os produtos.',
                error: error.message
            })
        }
    }
}
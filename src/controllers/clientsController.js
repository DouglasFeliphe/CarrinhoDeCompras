const db = require('../database_connection');

module.exports = {

    async index(request, response) {
        try {
            const { rows } = await db.query('SELECT * FROM carrinho_de_compras.clientes')

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
    },

    async show(request, response) {

        const { codigo } = request.params

        try {
            const { rows } = await db.query('SELECT * FROM carrinho_de_compras.clientes WHERE codigo = $1', [codigo])

            if (!rows) {
                return response.status(404).json({ message: '0 resultados encontrados.' })
            }
            return response.json(rows[0])

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao mostrar dados do cliente.',
                error: error.message
            })
        }
    },

    async create(request, response) {
        let { nome, email } = request.body

        try {
            await db.query(
                'INSERT INTO carrinho_de_compras.clientes (nome,email) VALUES ($1, $2)',
                [nome, email]
            )
            return response.json({ message: 'cliente criado com sucesso.' })

        } catch (error) {
            return response.status(400).json({
                message: 'Ocorreu um erro ao criar novo cliente.',
                error: error.message
            })
        }

    }
}
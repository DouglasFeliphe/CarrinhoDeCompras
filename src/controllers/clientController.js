const db = require('../database_connection');
module.exports = {

    async index(req, res) {
        const { rows } = await db.query('SELECT * FROM client')
        res.send(rows[0])
    },

    async create(req, res) {
        let { name, password } = req.body
        password += crypto.randomBytes(4).toString('HEX')

        const { rows } = await db.query('INSERT INTO carrinho_de_compras.client VALUES ($1, $2)')
        res.send(rows[0])
    },


    async show(req, res) {

        // const placa = request.params
        // try {
        //     const cliente = await connection('clientes')
        //         .select(placa)
        //         .first()
        //         ,
        //     if (!cliente) {
        //         return response.status(400).json({ message: 'cliente não encontrado' })
        //     }

        //     return response.json(cliente)
        // } catch (error) {
        //     return response.status(400).json({
        //         message: 'ocorreu um erro.',
        //         error: error
        //     })
        // }
    },
    async update(request, response) {

        // const { placa } = request.params
        // const novos_dados = request.body

        // try {

        //     await connection('clientes')
        //         .where('placa', placa)
        //         .update(novos_dados)

        //     return response.send({ message: 'dados atualizados com sucesso!' })
        // } catch (error) {
        //     return response.status(500).json(error.message)
        // }
    },
    async delete(request, response) {
        // const { placa } = request.params

        // try {
        //     const cliente = await connection('clientes')
        //         .where('placa', placa)
        //         .delete()

        //     if (!cliente) {
        //         response.status(400).json({ message: 'cliente não encontrado.' })
        //     }

        //     return response.json({ message: 'cliente deletado com sucesso!' })
        // } catch (error) {
        //     return response.status(400).json({
        //         message: 'erro ao deletar cliente.', error: error
        //     })
        // }
    }
}
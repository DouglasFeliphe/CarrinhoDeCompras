

module.exports = {

    async index(request, response) {
        // const products = await connection('products').select('*')
        // if (!products) {
        //     return response.status(400).json({ error: 'No product was found. ' })
        // }
        // return response.json(products)
    },

    async create(request, response) {
        // var { name, password } = request.body

        // await connection('products').insert({
        //     name,
        //     password
        // })
        // return response.json({ name })
    },

    async show(request, response) {

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
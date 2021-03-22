const express = require('express')

const routes = express.Router()

routes.get('/carrinhodecompras')
routes.get('/carrinho_de_compras/:codigo')
routes.post('/carrinho_de_compras')
routes.put('/carrinho_de_compras/:codigo')
routes.delete('/carrinho_de_compras/:codigo')

module.exports = routes
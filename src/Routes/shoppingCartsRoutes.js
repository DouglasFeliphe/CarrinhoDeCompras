const express = require('express')
const shoppingCartsController = require('../controllers/shoppingCartsController')

const routes = express.Router()

routes.get('/carrinhodecompras/:cod_cliente', shoppingCartsController.show)
routes.post('/carrinhodecompras/:cod_cliente/produtos/:cod_produto', shoppingCartsController.create)
routes.delete('/carrinhodecompras/:cod_cliente/produtos/:cod_produto', shoppingCartsController.delete)
routes.delete('/carrinhodecompras/:cod_cliente', shoppingCartsController.deleteAll)

module.exports = routes
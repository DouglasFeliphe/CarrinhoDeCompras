const express = require('express')

const routes = express.Router()

routes.get('/shoppingCarts')
routes.get('/shoppingCarts/:id')
routes.post('/shoppingCart')
routes.put('/shoppingCarts/:id')
routes.delete('/shoppingCarts/:id')

module.exports = routes
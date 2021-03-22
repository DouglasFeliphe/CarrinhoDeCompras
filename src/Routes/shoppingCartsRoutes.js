const express = require('express')
const shoppingCartsController = require('../controllers/shoppingCartsController')

const routes = express.Router()

// routes.get('/carrinhodecompras', shoppingCartsController.index)
routes.get('/carrinhodecompras/:codigo', shoppingCartsController.show)
routes.post('/carrinhodecompras/produto', shoppingCartsController.create)

module.exports = routes
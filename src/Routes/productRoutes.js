const express = require('express')
const productController = require('../controllers/productController')

const routes = express.Router()

routes.get('/products', productController.index)
routes.get('/products/:id', productController.show)
routes.post('/product', productController.create)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)

module.exports = routes
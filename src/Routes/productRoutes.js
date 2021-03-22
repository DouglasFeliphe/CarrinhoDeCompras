const express = require('express')
const productController = require('../controllers/productController')

const routes = express.Router()

routes.get('/produtos', productController.index)
routes.get('/produtos/:codigo', productController.show)
routes.post('/produto', productController.create)
routes.put('/produtos/:codigo', productController.update)
routes.delete('/produtos/:codigo', productController.delete)

module.exports = routes
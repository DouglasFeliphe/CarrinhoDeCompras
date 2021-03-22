const express = require('express')
const productsController = require('../controllers/productsController')

const routes = express.Router()

routes.get('/produtos', productsController.index)
routes.get('/produtos/:codigo', productsController.show)
routes.post('/produto', productsController.create)
routes.put('/produtos/:codigo', productsController.update)
routes.delete('/produtos/:codigo', productsController.delete)

module.exports = routes
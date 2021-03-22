const express = require('express')
const clientController = require('../controllers/clientController');

const routes = express()

routes.get('/clientes', clientController.index)
routes.get('/clientes/:codigo', clientController.show)
routes.post('/cliente', clientController.create)
routes.put('/clientes/:codigo', clientController.update)
routes.delete('/clientes/:codigo', clientController.delete)

module.exports = routes;
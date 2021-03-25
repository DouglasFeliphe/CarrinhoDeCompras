const express = require('express')
const clientsController = require('../controllers/clientsController');

const routes = express()

routes.get('/clientes', clientsController.index)
routes.post('/cliente', clientsController.create)
routes.post('/logar', clientsController.show)

module.exports = routes;
const express = require('express')
const clientsController = require('../controllers/clientsController');

const routes = express()

// routes.get('/clientes', clientsController.index)
routes.get('/clientes', clientsController.show)
routes.post('/cliente', clientsController.create)

module.exports = routes;
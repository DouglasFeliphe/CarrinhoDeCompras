const express = require('express')
const clientController = require('../controllers/clientController');

const routes = express.Router()

routes.get('/clients', clientController.index)
routes.get('/clients/:id', clientController.show)
routes.post('/client', clientController.create)
routes.put('/clients/:id', clientController.update)
routes.delete('/clients/:id', clientController.delete)

module.exports = routes;
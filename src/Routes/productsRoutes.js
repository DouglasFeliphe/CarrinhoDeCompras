const express = require('express')
const productsController = require('../controllers/productsController')

const routes = express()

routes.get('/produtos', productsController.index)

module.exports = routes
const express = require('express')
const clientRoutes = require('./Routes/clientRoutes')
const productRoutes = require('./Routes/productRoutes')
const shoppingCartRoutes = require('./Routes/shoppingCartRoutes')

const app = express()

app.use(express.json())
app.use(clientRoutes)
app.use(productRoutes)
app.use(shoppingCartRoutes)

app.listen(
    process.env.PORT | 3000,
    console.log('Servindo rodando...')
)




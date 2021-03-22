const express = require('express')
const clientRoutes = require('./Routes/clientRoutes')
const productRoutes = require('./Routes/productRoutes')
const shoppingCartRoutes = require('./Routes/shoppingCartRoutes')

const app = express()

app.use(express.json())
app.use(clientRoutes)
app.use(productRoutes)
app.use(shoppingCartRoutes)

let listener = app.listen(3333, function () {
    console.log('Server rodando na porta ' + listener.address().port); //Listening on port 8888
});





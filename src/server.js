const express = require('express')
const clientsRoutes = require('./Routes/clientsRoutes')
const productsRoutes = require('./Routes/productsRoutes')
const shoppingCartsRoutes = require('./Routes/shoppingCartsRoutes')

const app = express()

app.use(express.json())
app.use(clientsRoutes)
app.use(productsRoutes)
app.use(shoppingCartsRoutes)

let listener = app.listen(3333, function () {
    console.log('Server rodando na porta ' + listener.address().port); //Listening on port 8888
});





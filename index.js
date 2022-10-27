const express = require('express')
const debug = require('debug')('app:server')

const { Config } = require('./src/config/index')
const { ProductsAPI } = require('./src/products/index')
const { UsersAPI } = require('./src/users/index')
const { IndexAPI } = require('./src/index/index')

const app = express()

app.use(express.json())

IndexAPI(app)
ProductsAPI(app)
UsersAPI(app)

app.listen(Config.port, ()=>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
})
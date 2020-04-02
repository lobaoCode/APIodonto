const express = require('express')

module.exports = function(server) {

    //URL base
    const router = express.Router()
    server.use('/api', router)

    //URL para pesquisa
    const Pesquisa = require('../api/odonto/pesquisa/pesquisaService')
    Pesquisa.register(router, '/pesquisa')

}
const express = require('express')

module.exports = function(server) {

    //URL base
    const router = express.Router()
    server.use('/api', router)

    //URL para pesquisa
    const Pesquisa = require('../api/odonto/pesquisa/pesquisaService')
    Pesquisa.register(router, '/pesquisa')

    //URL para questionario
    const Questionario = require('../api/odonto/questionario/questionarioService')
    Questionario.register(router, '/questionario')

    //URL para pergunta
    const Pergunta = require('../api/odonto/pergunta/perguntaService')
    Pergunta.register(router, '/pergunta')

    //URL para amostra
    const Amostra = require('../api/odonto/amostra/amostraService')
    Amostra.register(router, '/amostra')

    //Url para participante
    const Participante = require('../api/odonto/participante/participanteService')
    Participante.register(router, '/participante')

}
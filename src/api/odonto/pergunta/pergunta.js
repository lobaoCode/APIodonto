const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = await mongoose.createConnection(constantes.uriBanco)
const AutoIncrement = AutoIncrementFactory(conn);
const Questionario = require('../questionario/questionario')

const pergunta = new mongoose.Schema({
    enunciado: {type: String, required: true},
    tipo: {type: String, required: true, uppercase: true,
        enum: ['OBJETIVA', 'SUBJETIVA']
    },
    numeroItens: {type: Number, required: false},
    questionario: {type: Questionario},
})

pergunta.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = restful.model('Pergunta', pergunta)

const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = await mongoose.createConnection(constantes.uriBanco)
const AutoIncrement = AutoIncrementFactory(conn);
const Pergunta = require('../pergunta/pergunta')

const questionario = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type:String, required: true},
    perguntas: [Pergunta]
})

questionario.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = restful.model('Questionario', questionario)

const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = mongoose.createConnection(constantes)
const AutoIncrement = AutoIncrementFactory(conn);

const pergunta = new mongoose.Schema({
    enunciado: {type: String, required: true},
    tipo: {type: String, required: true, uppercase: true,
        enum: ['OBJETIVA', 'SUBJETIVA']
    },
    numeroItens: {type: Number, required: false},
    questionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questionario"            
    },
})

pergunta.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = restful.model('Pergunta', pergunta)

const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = mongoose.createConnection(constantes.uriBanco)
const AutoIncrement = AutoIncrementFactory(conn);

const questionario = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type:String, required: true},
    perguntas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pergunta"
        }
    ]
})

questionario.plugin(AutoIncrement, {inc_field: 'idQuestionario'})

module.exports = restful.model('Questionario', questionario)

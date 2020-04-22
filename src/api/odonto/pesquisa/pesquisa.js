const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = mongoose.createConnection(constantes.uriBanco)
const AutoIncrement = AutoIncrementFactory(conn);

const pesquisa = new mongoose.Schema({
    titulo: {type: String, required: true},
    questionarios: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questionario"
        }
    ]
})

pesquisa.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = restful.model('Pesquisa', pesquisa)

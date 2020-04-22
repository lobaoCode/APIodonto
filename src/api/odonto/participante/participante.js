const restful = require('node-restful')
const AutoIncrementFactory = require('mongoose-sequence')
const constantes = require('../../constantes/constantes')
const mongoose = restful.mongoose
const conn = mongoose.createConnection(constantes.uriBanco)
const AutoIncrement = AutoIncrementFactory(conn);

const participante = new mongoose.Schema({
    idade: {type: Number, required: true},
    altura: {type: Number, required: true}
})

participante.plugin(AutoIncrement, {inc_field: 'idParticipante'})

module.exports = restful.model('Participante', participante)

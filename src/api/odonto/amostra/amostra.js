const restful = require('node-restful')
const mongoose = restful.mongoose
const Participante = require('../participante/participante')

const amostra = new mongoose.Schema({
    participante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participante"
    },
    respostas: [
        {
            type: String,
            required: true
        }
    ]
})

module.exports = restful.model('Amostra', amostra)

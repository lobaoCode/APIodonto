const Participante = require('./participante')

Participante.methods(['get', 'post', 'put', 'delete'])
Participante.updateOptions({new: true, runValidators: true})

module.exports = Participante
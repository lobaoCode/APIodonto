const Pergunta = require('./pergunta')

Pergunta.methods(['get', 'post', 'put', 'delete'])
Pergunta.updateOptions({new: true, runValidators: true})

module.exports = Pergunta
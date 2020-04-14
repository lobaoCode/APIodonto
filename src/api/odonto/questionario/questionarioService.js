const Questionario = require('./questionario')

Questionario.methods(['get', 'post', 'put', 'delete'])
Questionario.updateOptions({new: true, runValidators: true})

module.exports = Questionario

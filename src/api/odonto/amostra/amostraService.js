const Amostra = require('./amostra')

Amostra.methods(['get', 'post', 'put', 'delete'])
Amostra.updateOptions({new: true, runValidators: true})

module.exports = Amostra

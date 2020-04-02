const Pesquisa = require('./pesquisa')

Pesquisa.methods(['get', 'post', 'put', 'delete'])
Pesquisa.updateOptions({new: true, runValidators: true})

module.exports = Pesquisa
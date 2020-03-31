const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const constantes = require('../api/constantes/constantes')
module.exports = mongoose.connect(constantes.uriBanco, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})      

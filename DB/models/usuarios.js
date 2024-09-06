const mongoose = require('mongoose');

const usuarios = mongoose.model('usuarios',{
    nome: String,
    sobrenome: String,
    email: String,
    senha: String

});

module.exports = usuarios;
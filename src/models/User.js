const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: 'string',
    apelido: {type: String, required: true},
    nome: 'string',
    funcional: 'string', 
    telefone: 'string',
    email: 'string',
    unidade: 'string',
    plantao: 'string',
    created_at: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;


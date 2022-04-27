const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Unity = require('./Unity');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: 'string',
    apelido: {type: String, required: false},
    nome: 'string',
    funcional: 'string', 
    telefone: 'string',
    email: 'string',
    unidade: 'string',
    unidade_adm: Boolean,
    plantao: 'string',
    chefe_plantao: Boolean,
    password: 'string',
    // created_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now}
},
{
    versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;


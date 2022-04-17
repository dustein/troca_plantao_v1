const mongooose = require('mongoose');


const userSchema = new mongoose.Schema({
    id: 'string',
    apelido: 'string',
    nome: 'string',
    funcional: 'string', 
    telefone: 'string',
    email: 'string',
    unidade: 'string',
    plantao: 'string'
});

const User = mongooose.model('User', userSchema);



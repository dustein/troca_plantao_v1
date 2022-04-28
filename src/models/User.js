const bcrypt = require('bcryptjs/dist/bcrypt');
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
    password: 'string'
    //password: {type: 'string' select:false} - para o password nao aparecer na busca e listagem. Mas quando for usar o hash vai omitir tambem dai tem que colocar no User.findOne({apelido}).select('+password') 
    // created_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now}
},
{
    versionKey: false
});

//Antes da funcao save() vamos aplicar o bcrypt no password do cadastro
userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;


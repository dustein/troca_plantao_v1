const mongoose = require('mongoose');
const { v4 : uuidv4 } = requiere('uuid');

const unitySchema = new mongoose.Schema ({
     id: String,
     nome: String,
     criador: String,
     created_at: {type: Date, default: Date.now},
     updated_at: {type: Date, default: Date.now}
});

const Unity = mongoose.Model('Unity', unitySchema)

module.exports = Unity;
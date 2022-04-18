const mongooose = require('mongoose');

const proposeSchema = new mongooose.Schema({
    id: String,
    userIdPropose: { type: String, required: true},
    dataPlantao: String,
    tipoPlantao: {type: Boolean, default: false},
    subtipoPlantao: {type: Boolean, default: false},
    userIdAccept: String,
    accept: {type: Boolean, default: false},
    autorized: {type: Boolean, default: false} 
});

const Propose = mongooose.model('Propose', proposeSchema);

module.exports = Propose;

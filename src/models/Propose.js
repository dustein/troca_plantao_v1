const mongooose = require('mongoose');

const proposeSchema = new mongooose.Schema({
    id: String,
    userIdPropose: String,
    dataPlantao: String,
    userIdAccept: String,
    accept: {type: Boolean, default: false},
    autorized: {type: Boolean, default: false}
},
{
    versionKey: false
});

const Propose = mongooose.model('Propose', proposeSchema);

module.exports = Propose;

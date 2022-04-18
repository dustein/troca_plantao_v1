const mongooose = require('mongoose');

const proposeSchema = new mongooose.Schema({
    id: String,
    userIdPropose: { type: String, required: true},
    plantao: String,
    userIdAccept: String,
    accept: {type: Boolean, default: false} 
});

const Propose = mongooose.model('Propose', proposeSchema);

module.exports = Propose;

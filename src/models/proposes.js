const mongooose = require('mongoose');

const proposeSchema = new mongooose.Schema({
    id: String,
    userIdPropose: String,
    userIdAccept: String,
    accept: {type: Boolean, default: false} 
});

const Propose = mongooose.model('Propose', proposeSchema);

module.exports = Propose;

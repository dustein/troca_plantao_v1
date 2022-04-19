const Propose = require('../models/Propose');
const { v4: uuidv4 } = require('uuid');

class proposesController {

    static makeNewPropose = (req, res) => {
        const newPropose = new Propose(req.body);
        newPropose['id'] = uuidv4();
        newPropose.save();
        console.log("criada nova propose");
        res.status(201).json(newPropose);
    }

    static showAllProposes = (req, res) => {
        Propose.find((err, proposes) => {
            if(!err) {
                res.status(200).json(proposes);
                console.log("listada todas as proposes")
            }
        });

    }
};

module.exports = proposesController;
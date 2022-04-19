const Propose = require('../models/Propose');
const { v4: uuidv4 } = require('uuid');

function selectProposeById(id) {
    const selectedPropose = Propose.findOne({id: id}, (err, propose) => {
        if(err) {
            res.status(400).send({message: 'Nao ha propose com essa Id'})
        } 
        console.log(`funcao selectProposeById: proposta id ${id} listada`);
        return propose;
    })
    return selectedPropose;
}
class proposesController {

    static makeNewPropose = (req, res) => {
        const newPropose = new Propose(req.body);
        newPropose['id'] = uuidv4();
        newPropose.save();
        console.log("criada nova propose");
        res.status(201).json(newPropose);
    };

    static showAllProposes = (req, res) => {
        Propose.find((err, proposes) => {
            if(!err) {
                res.status(200).json(proposes);
                console.log("listada todas as proposes")
            }
        });

    }

    static selectProposeById = (req, res) => {
        const { id } = req.params;
        Propose.findOne({id: id}, (err, propose) => {
            if(err) {
                res.status(400).send({message: 'Nao ha propose com essa Id'})
            } 
            res.status(200).json(propose)
            console.log(`proposta id ${id} listada`);
        })
    };

    static acceptProposeId = (req, res) => {
        const { id } = req.params;
        const acceptedPropose = selectProposeById(id);
        res.status(201).json(acceptedPropose);
    };
};


module.exports = proposesController;
const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
// const Propose = require('./models/Propose');
// const User = require('./models/User');
const usersController = require('./controller/usersController');
const proposesController = require('./controller/proposesController');

//conexao Mongo Atlas
// const URL = process.env.MONGO_URI;
// mongoose.connect(URL, () => console.log("Conectado ao MongoDB"));

//conexao Mongo Community local
mongoose.connect('mongodb://localhost/plantao', () => { console.log('Conectado MongoDB Local')});

const app = express();
app.use(express.json());

// function makePropose(proposeId, userIdPropose) {
//     const newPropose = {
//         proposeId: proposeId,
//         userIdPropose: userIdPropose,
//         userIdAccepted: 'Não Confirmado',
//         status: false
//     }
//     propose.push(newPropose);
//     console.log('propose:', propose)
//     return newPropose;
// };

// function createPropose(userIdPropose) {
//     const newPropose = new Propose({
//         userIdPropose: userIdPropose,
//         plantao: new Date()
//     })
    
//     newPropose.save((err) => {
//         if (err) {
//             return err
//         }
//     })
//     return newPropose
// }


function acceptPropose(proposeId) {
    const selectedPropose = propose.filter((selected) => selected.selectedId == proposeId);
    console.log(selectedPropose)
    return selectedPropose;
}

app.get('/user', (req, res) => {
    User.find((err, users) => {
        if(!err) {
            res.status(200).json(users);
        }
    });
});

app.get('/propose', proposesController.showAllProposes);


app.post('/user', usersController.makeNewUser);
app.post('/propose', proposesController.makeNewPropose);

app.put('/propose', (req, res) => {
    const teste = propose.filter( select => {
        select.proposeId == '2'
        teste.status = true;
    })
    // const { proposeId } = req.body;
    // const proposeCase = acceptPropose(proposeId);
    // console.log(proposeCase)
    // proposeCase.status = true;
    // res.json(proposeCase);
    res.json(teste);
});

app.listen(3000, () => console.log('Servidor ATIVO!'));
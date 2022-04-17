const express = require('express');
require('dotenv').config();
const Propose = require('./models');
const URL = process.env.URI;

const app = express();
app.use(express.json());

const users = [];
const propose = [];

function makeNewUser(id, apelido, nome, funcional, telefone, email, unidade, plantao) {
    const newUser = {
        id: id,
        apelido: apelido,
        nome: nome,
        funcional: funcional,
        telefone: telefone,
        email: email,
        unidade: unidade,
        plantao: plantao
    };
    users.push(newUser);
    return newUser;
};

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

function createPropose() {
    
}


function acceptPropose(proposeId) {
    const selectedPropose = propose.filter((selected) => selected.selectedId == proposeId);
    console.log(selectedPropose)
    return selectedPropose;
}

app.get('/user', (req, res) => {
    res.status(200).json(users);
});

app.get('/propose', (req, res) => {
    res.status(200).json(propose);
});


app.post('/user', (req, res) => {
    const { id, apelido, nome, funcional, telefone, email, unidade, plantao } = req.body;
    newUser = makeNewUser(id, apelido, nome, funcional, telefone, email, unidade, plantao);
    console.log(newUser)
    res.status(201).send(newUser);
});

app.post('/propose', (req, res) => {
    const { proposeId, userIdPropose } = req.body;
    newPropose = makePropose(proposeId, userIdPropose);
    res.status(201).json(newPropose);
});

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
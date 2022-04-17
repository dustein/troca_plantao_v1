const express = require('express');
require('dotenv').config();

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

function makePropose(proposeId, userIdPropose) {
    const newPropose = {
        proposeId: id,
        userIdPropose: userIdPropose,
        userIdAccepted: 'Não Confirmado',
        status: false
    }
    propose.push(newPropose);
    return newPropose;
};

function acceptPropose(proposeId) {
    const selectedPropose = propose.map(id => id === proposeId);
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
    const selectedPropose = acceptPropose(proposeId);
    
})

app.listen(3000, () => console.log('Servidor ATIVO!'));
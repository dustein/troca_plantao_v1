const express = require('express');
require('dotenv').config();

const URL = process.env.URI;

const app = express();
app.use(express.json());

const users = [];

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

app.get("/", (req, res) => {
    res.json({message: "Hello World!Let`s GO"});
});

app.get('/user', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const { id, apelido, nome, funcional, telefone, email, unidade, plantao } = req.body;
    newUser = makeNewUser(id, apelido, nome, funcional, telefone, email, unidade, plantao);
    console.log(newUser)
    res.status(200).send(newUser);
});

app.listen(3000, () => console.log('Servidor ATIVO!'));
const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const Propose = require('./models/Propose');
const User = require('./models/User');
const UserController = require('./controller/usersController');

//conexao Mongo Atlas
// const URL = process.env.MONGO_URI;
// mongoose.connect(URL, {
//     userNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => console.log("Conectado ao MongoDB"));

//conexao Mongo Community local
mongoose.connect('mongodb://localhost/plantao');

const app = express();
app.use(express.json());

const users = [];
const propose = [];

// function makeNewUser(id, apelido, nome, funcional, telefone, email, unidade, plantao) {
//     const newUser = new User ({
//         id: id,
//         apelido: apelido,
//         nome: nome,
//         funcional: funcional,
//         telefone: telefone,
//         email: email,
//         unidade: unidade,
//         plantao: plantao
//     });
    
//     return newUser;
// };

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

function createPropose(userIdPropose) {
    const newPropose = new Propose({
        userIdPropose: userIdPropose,
        plantao: new Date()
    })
    
    newPropose.save((err) => {
        if (err) {
            return err
        }
    })
    return newPropose
}


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

app.get('/propose', (req, res) => {
    res.status(200).json(propose);
});


// app.post('/user', (req, res) => {
//     const { id, apelido, nome, funcional, telefone, email, unidade, plantao } = req.body;
//     newUser = makeNewUser(id, apelido, nome, funcional, telefone, email, unidade, plantao);
//     newUser.save();
//     console.log(newUser)
//     res.status(201).json(newUser);
// });
app.post('/user', UserController.makeNewUser);


app.post('/propose', (req, res) => {
    const { userIdPropose } = req.body;
    const newPropose = createPropose();
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
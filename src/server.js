const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');


const usersController = require('./controller/usersController');
const proposesController = require('./controller/proposesController');

//conexao Mongo Atlas
// const URL = process.env.MONGO_URI;
// mongoose.connect(URL, () => console.log("Conectado ao MongoDB"));

//conexao Mongo Community local
mongoose.connect('mongodb://localhost/plantao', () => { console.log('Conectado MongoDB Local')});

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, '../views/index.html'));

});

app.get('/user', usersController.showAllUsers);
app.get('/propose', proposesController.showAllProposes);
app.get('/propose/:id', proposesController.selectProposeById);


app.post('/user', usersController.makeNewUser);
app.post('/propose', proposesController.makeNewPropose);

app.put('/propose/:id', proposesController.acceptProposeId);

app.listen(3000, () => console.log('Servidor ATIVO!'));
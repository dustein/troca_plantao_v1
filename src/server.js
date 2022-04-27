const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');


const usersController = require('./controller/usersController');
const proposesController = require('./controller/proposesController');
const ensureAuthenticated = require('./middlewares/ensureAuthenticated')

//conexao Mongo Atlas
// const URL = process.env.MONGO_URI;
// mongoose.connect(URL, ()userExists => console.log("Conectado ao MongoDB"));

//conexao Mongo Community local
mongoose.connect('mongodb://localhost/plantao', () => { console.log('Conectado MongoDB Local')});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, '../views/index.html'));

});

app.get('/user', usersController.showAllUsers);
app.get('/user/:id', usersController.showUserById);
app.get('/propose', proposesController.showAllProposes);
app.get('/propose/:id', proposesController.selectProposeById);


app.post('/user', usersController.makeNewUser);
app.post('/propose', ensureAuthenticated, proposesController.makeNewPropose);

app.put('/propose/:id', proposesController.acceptProposeId);

app.delete('/user/:id', usersController.delUser);
app.delete('/propose/:id', proposesController.delProposeById);

app.listen(3000, () => console.log('Servidor ATIVO!'));
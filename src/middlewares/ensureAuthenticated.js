const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')
async function ensureAuthenticated(req, res, next) {
     const { apelido, password } = req.body;


     const user = await User.findOne({ apelido });

     if(!user) {
          console.log("Usuario nao existe");
          return res.status(400).send({ error: "Usuario nao existe" });
     }

     // if(user.password != password) {
     //      console.log("Senha incorreta");
     //      return res.send("Senha incorreta")
     // }
     //implementando o hash...
     if(!await bcrypt.compare(password, user.password)) {
          console.log("Senha incorreta");
          return res.status(400).send({ error: "Senha incorreta"})
     };

     //para remover o password (hash) na listagem
     user.password = undefined;

     //o segundo parametro do jwt.sign e uma chave hash que precisa ser unica, vamos criar a pasta config e o arquivo auth para guarda-lo. 
//gerar um md5 de um texto qualquer para ser sua hash secreta, e coloca aqui crianco a const authConfig
     const token = jwt.sign({id: user.id}, authConfig.secret, { expiresIn: 86400});

     user.password = token;
     
     console.log("passou a middleware")

     next();
}

module.exports = ensureAuthenticated;
// aula 04 NLW 27:00
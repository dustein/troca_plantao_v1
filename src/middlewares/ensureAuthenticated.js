const User = require("../models/User");


async function ensureAuthenticated(req, res, next) {
     const password = req.headers.password;
     const apelido = req.body.apelido;

     const user = await User.findOne({apelido});

     if(!user) {
          throw new Error("Usuario nao existe");
     }

     if(user.password != password) {
          throw new Error("Senha incorreta")
     }

     next();
}

module.exports = ensureAuthenticated;
// aula 04 NLW 27:00
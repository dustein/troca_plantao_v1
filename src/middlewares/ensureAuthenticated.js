const User = require("../models/User");


async function ensureAuthenticated(req, res, next) {
     const { apelido, password } = req.headers;


     const user = await User.findOne({ apelido });

     if(!user) {
          console.log("Usuario nao existe");
          return res.send("Usuario nao existe");
     }

     if(user.password != password) {
          console.log("Senha incorreta");
          return res.send("Senha incorreta")
     }

     console.log("passou a middleware")

     next();
}

module.exports = ensureAuthenticated;
// aula 04 NLW 27:00
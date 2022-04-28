const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
     try {
          const user = await User.create(req.body);

          return res.send( { user } );
     } catch (err) {
          return res.status(400).send({ error: 'Registro Falhou'})
     }
});

// Informando ao exports o parametro app, e retorar o app.use a partir de uma rota, definindo rota. Toda vez que chama o '/auth', vai chamar o router definido acima, fiucando sempre '/auth/register'
module.exports = (app) => app.use('/auth', router);
//Todas as rotas que definirmos aquim, serao prefixadas com o '/auth'

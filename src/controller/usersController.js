const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');


// function gerarSenhaHash(senha) {
//     const custoHash = 12
//     return bcrypt.hash(senha, custoHash);
// };

// async function adicionaSenha(pasword) {
//     const senhaUser = await gerarSenhaHash(password)
// };

class UserController {
    
    static makeNewUser = (req, res) => {
        const newUser = new User(req.body);
        newUser['id'] = uuidv4();
        newUser.save();
        console.log("criado newUser");
        res.status(201).json(newUser);

    };

    

    static showAllUsers = (req, res) => {
        User.find((err, users) => {
            if(!err) {
                res.status(200).json(users);
                console.log("listados todos os users")
            }
        });
    };

    static showUserById = (req, res) => {
        const { id } = req.params;
        console.log(`listado user id ${id}`);
        User.findOne( {id: id}, (err, user) => {
            if (!err) {
                res.send(user)
            }
        })
    };

    static delUser = (req, res) => {
        const id = req.params.id;
        console.log(`apaga user id ${id}`);
        User.findOneAndDelete({id: id}, (err, user) => {
            if(!err) {
                res.status(200).send(user)
            }
        })
    };

};

module.exports = UserController;
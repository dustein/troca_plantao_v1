const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const { MongoUnexpectedServerResponseError } = require('mongodb');

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
                console.log("listada todos os users")
            }
        });
    }
};

module.exports = UserController;
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

class UserController {
    
    static makeNewUser = (req, res) => {
        const newUser = new User(req.body);
        newUser['id'] = uuidv4();
        newUser.save();
        console.log("criado newUser");
        res.status(201).json(newUser);

    };
};

module.exports = UserController;
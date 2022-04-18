const User = require('../models/User');

class UserController {
    
    static makeNewUser = (req, res) => {
        const newUser = new User(req.body);

        newUser.save();
        console.log(newUser)
        res.status(201).json(newUser);

    };
};

module.exports = UserController;
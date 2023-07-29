const User = require('../models/user')
const bcrypt = require('bcrypt');

module.exports = function (req, res) {
    const inputuser = req.body.username;
    const inputpassword = req.body.password;

    User.findOne({username:inputuser}).then((user)=> {
        
        console.log(user)

        if(user) {
            let compare = bcrypt.compare(inputpassword, user.password).then((match)=> {
                if (match) {
                    req.session.userId = user._id
                    res.redirect('/')
                } else {
                    res.redirect('/login')
                }
            })
        } else {
            res.redirect('/login')
        }
    })
    
}
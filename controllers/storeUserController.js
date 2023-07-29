const User = require('../models/user')
const bcrypt = require('bcrypt');



module.exports = function (req, res) {




    User.create(req.body).then(() => {
        console.log("user registered!!")
        res.redirect('/')
    }).catch((error)=> {

          if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
          }
        });


}


    
    // bcrypt.hash(inputuser, 10).then((hash) => {
    //     let inputuser = req.body.password
    //     inputuser = hash;
    //     return inputuser;
    //     next()
    // }).catch(error => {
    //     console.error(error)
    // })

    
    // User.create(
    //   {username: req.body.username,
    //    password: inputuser})
    //    .then(() => {
    //    console.log("user registered!!")
    //    res.redirect('/')
    //    })
    //    .catch((error)=> {
    //     if (error) {
    //       const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
    //       req.flash('validationErrors', validationErrors)
    //       return res.redirect('/register')
    //     }
    // });
   


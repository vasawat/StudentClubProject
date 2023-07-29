const Club = require('../models/club')
const bcrypt = require('bcrypt');



module.exports = function (req, res) {


    Club.create(req.body).then(() => {
        console.log("Club registered!!")
        
        // window.location.reload();

    }).catch((error)=> {

        console.log(error);

        //   if (error) {
        //     const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        //     req.flash('validationErrors', validationErrors)
        //     req.flash('data', req.body)
        //     return res.redirect('/register')
        //   }
        });
    // location.replace(location.href);

}

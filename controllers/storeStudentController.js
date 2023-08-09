const Club = require('../models/club')




module.exports = function (req, res) {


    Club.create(req.body).then(() => {
        console.log("Club registered!!")
        // window.location.reload();

    }).catch((error)=> {

        console.log(error);


        });

        res.redirect('back');
}

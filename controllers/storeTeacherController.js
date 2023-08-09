const Teacher = require('../models/teacher')


module.exports = function (req, res) {


    Teacher.create(req.body).then(() => {
        console.log("Teacher registered!!")

    }).catch((error)=> {

        console.log(error);

        });

        res.redirect('back');
}
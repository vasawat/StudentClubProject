const Club = require('../models/club')


module.exports = function (req, res) {


    let infoId = req.body.sendid
    Club.findByIdAndDelete(infoId).then((complete)=>{
        console.log(complete)
    }).catch((error)=>{
        console.error(error)
    })



}
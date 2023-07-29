const Teacher = require('../models/teacher')


module.exports = function (req, res) {


    let infoId = req.body.sendid
    Teacher.findByIdAndDelete(infoId).then((complete)=>{
        console.log(complete)
    }).catch((error)=>{
        console.error(error)
    })



}
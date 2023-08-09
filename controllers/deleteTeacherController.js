const Teacher = require('../models/teacher')


module.exports = async function (req, res) {


    let infoId = req.body.sendid
    await Teacher.findByIdAndDelete(infoId).then((complete)=>{
        console.log(complete)
    }).catch((error)=>{
        console.error(error)
    })
    res.redirect('back');


}
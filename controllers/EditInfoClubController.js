const Club = require('../models/club')


module.exports = function (req, res) {


    let stdName = req.body.studentName
    let stdId = req.body.studentId
    let stdNumber = req.body.studentNumber
    let stdClubType = req.body.clubType
    let infoId = req.body.sendidtoedit
    Club.findByIdAndUpdate(infoId,
        { studentName: stdName,
          studentId: stdId,
          studentNumber: stdNumber,
          clubType: stdClubType }).then(function (info){
        console.log(info)
    }).catch((error)=>{
        console.error(error)
    })
}
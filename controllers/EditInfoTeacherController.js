const Teacher = require('../models/teacher')


module.exports = function (req, res) {


    let teacherName = req.body.teacherName
    let teacherId = req.body.teacherId
    let teacherClubType = req.body.clubType
    let infoId = req.body.sendidtoedit


    Teacher.findByIdAndUpdate(infoId,
        { teacherName: teacherName,
          teacherId: teacherId,
          clubType: teacherClubType }).then(function (info){
        console.log(info)
    }).catch((error)=>{
        console.error(error)
    })
    res.redirect('back');
}
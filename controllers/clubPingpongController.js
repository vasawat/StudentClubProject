
const Club = require('../models/club')
const Teacher = require('../models/teacher')


module.exports = function (req, res) {

    Club.find({clubType: "ปิงปอง"}).then((infoStudentPingpong)=> {
        Teacher.find({clubType: "ปิงปอง"}).then((infoTeacherPingpong)=> {
        res.render('clubpingpong',{pingpong: infoStudentPingpong, pingpongTeacher: infoTeacherPingpong});
    })
})


}
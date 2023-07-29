
const Club = require('../models/club')
const Teacher = require('../models/teacher')


module.exports = function (req, res) {

    Club.find({clubType: "ฟุตบอล"}).then((infoStudentFootball)=> {
        Teacher.find({clubType: "ฟุตบอล"}).then((infoTeacherFootball)=> {
        res.render('clubfootball',{football: infoStudentFootball, footballTeacher: infoTeacherFootball});
    })
})


}
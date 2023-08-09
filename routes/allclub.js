var express = require('express');
var router = express.Router();
const Club = require('../models/club')
const Teacher = require('../models/teacher')






router.get('/football',function(req, res, next){
  Club.find({clubType: "ฟุตบอล"}).then((infoStudent)=> {
      Teacher.find({clubType: "ฟุตบอล"}).then((infoTeacher)=> {
      res.render('clubfootball',{football: infoStudent, footballTeacher: infoTeacher});
})
})
})

router.get('/pingpong',function(req, res, next){
  Club.find({clubType: "ปิงปอง"}).then((infoStudent)=> {
     Teacher.find({clubType: "ปิงปอง"}).then((infoTeacher)=> {
     res.render('clubpingpong',{pingpong: infoStudent, pingpongTeacher: infoTeacher});
})
})
})

router.get('/basketball',function(req, res, next){
  Club.find({clubType: "บาสเกตบอล"}).then((infoStudent)=> {
    Teacher.find({clubType: "บาสเกตบอล"}).then((infoTeacher)=> {
    res.render('clubbasketball',{basketball: infoStudent, basketballTeacher: infoTeacher});
})
})
})

router.get('/english',function(req, res, next){
  Club.find({clubType: "ภาษาอังกฤษ"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาอังกฤษ"}).then((infoTeacher)=> {
    res.render('clubenglish',{english: infoStudent, englishTeacher: infoTeacher});
})
})
})

router.get('/japan',function(req, res, next){
  Club.find({clubType: "ภาษาญี่ปุ่น"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาญี่ปุ่น"}).then((infoTeacher)=> {
    res.render('clubjapan',{japan: infoStudent, japanTeacher: infoTeacher});
})
})
})

router.get('/korea',function(req, res, next){
  Club.find({clubType: "ภาษาเกาหลี"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาเกาหลี"}).then((infoTeacher)=> {
    res.render('clubkorea',{korea: infoStudent, koreaTeacher: infoTeacher});
})
})
})





module.exports = router;
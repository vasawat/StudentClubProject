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

router.get('/badminton',function(req, res, next){
  Club.find({clubType: "แบดมินตัน"}).then((infoStudent)=> {
    Teacher.find({clubType: "แบดมินตัน"}).then((infoTeacher)=> {
    res.render('clubbadminton',{badminton: infoStudent, badmintonTeacher: infoTeacher});
})
})
})

router.get('/starsAndLife',function(req, res, next){
  Club.find({clubType: "ดวงดาวกับชีวิต"}).then((infoStudent)=> {
    Teacher.find({clubType: "ดวงดาวกับชีวิต"}).then((infoTeacher)=> {
    res.render('clubstarsAndLife',{starsAndLife: infoStudent, starsAndLifeTeacher: infoTeacher});
})
})
})

router.get('/mathsplus1',function(req, res, next){
  Club.find({clubType: "คณิตศาสตร์เพิ่มเติม1"}).then((infoStudent)=> {
    Teacher.find({clubType: "คณิตศาสตร์เพิ่มเติม1"}).then((infoTeacher)=> {
    res.render('clubmathplus1',{mathplusclub1: infoStudent, mathplusclub1Teacher: infoTeacher});
})
})
})

router.get('/mathsplus2',function(req, res, next){
  Club.find({clubType: "คณิตศาสตร์เพิ่มเติม2"}).then((infoStudent)=> {
    Teacher.find({clubType: "คณิตศาสตร์เพิ่มเติม2"}).then((infoTeacher)=> {
    res.render('clubmathplus2',{mathplusclub2: infoStudent, mathplusclub2Teacher: infoTeacher});
})
})
})

router.get('/art5',function(req, res, next){
  Club.find({clubType: "วาดเขียน5"}).then((infoStudent)=> {
    Teacher.find({clubType: "วาดเขียน5"}).then((infoTeacher)=> {
    res.render('clubart5',{art: infoStudent, artTeacher: infoTeacher});
})
})
})

router.get('/literature',function(req, res, next){
  Club.find({clubType: "การอ่านและพิจารณาวรรณกรรม"}).then((infoStudent)=> {
    Teacher.find({clubType: "การอ่านและพิจารณาวรรณกรรม"}).then((infoTeacher)=> {
    res.render('clubliterature',{literature: infoStudent, literatureTeacher: infoTeacher});
})
})
})

router.get('/law',function(req, res, next){
  Club.find({clubType: "กฏหมายเบื้องต้น"}).then((infoStudent)=> {
    Teacher.find({clubType: "กฏหมายเบื้องต้น"}).then((infoTeacher)=> {
    res.render('clublaw',{law: infoStudent, lawTeacher: infoTeacher});
})
})
})

router.get('/music3',function(req, res, next){
  Club.find({clubType: "ดนตรีไทยสัมพันธ์3"}).then((infoStudent)=> {
    Teacher.find({clubType: "ดนตรีไทยสัมพันธ์3"}).then((infoTeacher)=> {
    res.render('clubmusic3',{music3: infoStudent, music3Teacher: infoTeacher});
})
})
})

router.get('/drawing',function(req, res, next){
  Club.find({clubType: "งานเขียนแบบ"}).then((infoStudent)=> {
    Teacher.find({clubType: "งานเขียนแบบ"}).then((infoTeacher)=> {
    res.render('clubdrawing',{drawing: infoStudent, drawingTeacher: infoTeacher});
})
})
})

router.get('/clubmathprimary',function(req, res, next){
  Club.find({clubType: "คณิตศาสตร์เบื้องต้น"}).then((infoStudent)=> {
    Teacher.find({clubType: "คณิตศาสตร์เบื้องต้น"}).then((infoTeacher)=> {
    res.render('clubmathprimary',{clubmathprimary: infoStudent, clubmathprimaryTeacher: infoTeacher});
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

router.get('/Chinese',function(req, res, next){
  Club.find({clubType: "ภาษาจีนเบื้องต้น"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาจีนเบื้องต้น"}).then((infoTeacher)=> {
    res.render('clubChinese',{Chinese: infoStudent, ChineseTeacher: infoTeacher});
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
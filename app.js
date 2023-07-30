var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const expressSession = require('express-session');




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homePageController = require('./controllers/homePageController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const storeUserController = require('./controllers/storeUserController');
const loginUserController = require('./controllers/loginUserController');
const logoutController = require('./controllers/logoutController');
const clubController = require('./controllers/clubController');

const storeStudentController = require('./controllers/storeStudentController');
const storeTeacherController = require('./controllers/storeTeacherController');
const deleteInfoClubController = require('./controllers/deleteInfoClubController');
const deleteInfoTeacherController = require('./controllers/deleteTeacherController');
const EditInfoClubController = require('./controllers/EditInfoClubController');
const EditInfoTeacherController = require('./controllers/EditInfoTeacherController');


const redirectIfAuth = require('./middleware/redirectauth');

var app = express();

mongoose.Promise = global.Promise;
const url = "mongodb+srv://vasawat:1234@authenticationtest.9popvhf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
     .then(() => console.log('connection success!!'))
     .catch((err) => console.error(err));

global.loggedIn = null ;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash());
app.use(expressSession({
  secret: 'boss secert'
}))
app.use("*", (req, res, next)=>{
  loggedIn = req.session.userId
  next()
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use ('/home', homePageController);
app.use ('/login', loginController);
app.use ('/register', registerController);
app.use ('/user/register', storeUserController);
app.use ('/user/login', loginUserController);
app.use ('/user/logout', logoutController);
app.use ('/clubPage', clubController);

app.use ('/store/student', storeStudentController);
app.use ('/store/teacher', storeTeacherController);
app.use ('/delete/student', deleteInfoClubController);
app.use ('/delete/teacher', deleteInfoTeacherController);
app.use ('/edit/student', EditInfoClubController);
app.use ('/edit/teacher', EditInfoTeacherController);







// ----------------------------allClubPage--------------------------------------
const Club = require('./models/club')
const Teacher = require('./models/teacher')

app.get('/football',function(req, res, next){
  Club.find({clubType: "ฟุตบอล"}).then((infoStudent)=> {
      Teacher.find({clubType: "ฟุตบอล"}).then((infoTeacher)=> {
      res.render('clubfootball',{football: infoStudent, footballTeacher: infoTeacher});
})
})
})

app.get('/pingpong',function(req, res, next){
  Club.find({clubType: "ปิงปอง"}).then((infoStudent)=> {
     Teacher.find({clubType: "ปิงปอง"}).then((infoTeacher)=> {
     res.render('clubpingpong',{pingpong: infoStudent, pingpongTeacher: infoTeacher});
})
})
})

app.get('/basketball',function(req, res, next){
  Club.find({clubType: "บาสเกตบอล"}).then((infoStudent)=> {
    Teacher.find({clubType: "บาสเกตบอล"}).then((infoTeacher)=> {
    res.render('clubbasketball',{basketball: infoStudent, basketballTeacher: infoTeacher});
})
})
})

app.get('/english',function(req, res, next){
  Club.find({clubType: "ภาษาอังกฤษ"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาอังกฤษ"}).then((infoTeacher)=> {
    res.render('clubenglish',{english: infoStudent, englishTeacher: infoTeacher});
})
})
})

app.get('/japan',function(req, res, next){
  Club.find({clubType: "ภาษาญี่ปุ่น"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาญี่ปุ่น"}).then((infoTeacher)=> {
    res.render('clubjapan',{japan: infoStudent, japanTeacher: infoTeacher});
})
})
})

app.get('/korea',function(req, res, next){
  Club.find({clubType: "ภาษาเกาหลี"}).then((infoStudent)=> {
    Teacher.find({clubType: "ภาษาเกาหลี"}).then((infoTeacher)=> {
    res.render('clubkorea',{korea: infoStudent, koreaTeacher: infoTeacher});
})
})
})

// app.get('',function(req, res, next){
//   Club.find({clubType: ""}).then((infoStudent)=> {
//     Teacher.find({clubType: ""}).then((infoTeacher)=> {
//     res.render('',{: infoStudent, Teacher: infoTeacher});
// })
// })
// })

// ------------------------------------------------------------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(session({
  secret: "My secret",
  resave: false,
  saveUninitialized: false,
  cookie: {}
}));

module.exports = app;
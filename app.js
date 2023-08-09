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
const registerController = require('./controllers/registerController');
const storeUserController = require('./controllers/storeUserController');
const loginUserController = require('./controllers/loginUserController');
const logoutController = require('./controllers/logoutController');
const allClubPageController = require('./routes/allclub');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use ('/register', registerController);
app.use ('/user/register', storeUserController);
app.use ('/user/login', loginUserController);
app.use ('/user/logout', logoutController);
app.use('/club', allClubPageController);

app.use ('/store/student', storeStudentController);
app.use ('/store/teacher', storeTeacherController);
app.use ('/delete/student', deleteInfoClubController);
app.use ('/delete/teacher', deleteInfoTeacherController);
app.use ('/edit/student', EditInfoClubController);
app.use ('/edit/teacher', EditInfoTeacherController);





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
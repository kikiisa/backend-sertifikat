var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nocache = require('nocache');
const cors = require('cors');
var flash = require('express-flash');
var session = require('express-session');
const { db } =require('./config/Database');
const Users = require('./models/UsersModels');
var indexRouter = require('./routes/index');
var apiRouter  = require('./routes/api');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(nocache())
app.use(session({
  name:'e-sertifikat',
  saveUninitialized:false,
  resave:'false',
  secret:'secret'
}));
app.use(flash());
//app.use(cors({
//    methods:['GET','POST','DELETE','PUT']
//}));
app.use('/', indexRouter);
app.use('/api',apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

const database = async () => 
{
  try {
    await db.authenticate();
    console.log('Database Connected...');
  } catch (error) {
    console.error(error)
  }
}
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

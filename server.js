require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helpers = require('./helpers')

const indexRouter = require('./routes/index');
const examplesRouter = require('./routes/examples');
const dashboardRouter = require('./routes/dashboard');

const app = express();

// view engine setup
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'default',
  partialsDir: __dirname + '/views/partials/',
  helpers: helpers()
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/examples', examplesRouter);
app.use('/dashboard', dashboardRouter);


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

// Start the server
app.listen(process.env.PORT || 5000, () => console.log(`Express server listening on port ${process.env.PORT || 5000}!`))

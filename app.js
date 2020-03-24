require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session       = require('express-session');
const passport      = require('passport');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);


require('./configs/passport');


mongoose
  // .connect('mongodb://localhost/lestrembles', {useNewUrlParser: true})
  .connect((process.env.MONGODB_URI ||`mongodb://localhost/lestrembles`), {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
}));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());

app.use(passport.session());


// const index = require('./routes/index');
// app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const espaceUserRoutes = require('./routes/espaceUser');
app.use('/api', espaceUserRoutes);

const generalRoutes = require('./routes/general');
app.use('/api', generalRoutes);

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function (err) {
    if (err) {
      next(err)
    }
  })
});

app.use((err, req, res, next) => {
  function er2JSON(er) {
    // http://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify#18391212
    var o = {};
  
    Object.getOwnPropertyNames(er).forEach(function (key) {
      o[key] = er[key];
    });
  
    return o;
  }

  // always log the error
  console.error('ERROR', req.method, req.path, err);

  err = er2JSON(err);
  err.status || (err.status = 500); // default to 500
  res.status(err.status);

  res.json(err);
});



module.exports = app;

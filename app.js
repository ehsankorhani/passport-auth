const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const logger = require('morgan');
const database = require('./config/database');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initialize passport
passportSetup();
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

module.exports = app;


// const profileRoutes = require('./routes/profile-routes');
// const passportSetup = require('./config/passport-setup');
// const mongoose = require('mongoose');

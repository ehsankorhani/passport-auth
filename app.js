const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require('./config/database');
const passportSetup = require('./config/passport-setup');

const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// initialize passport
passportSetup();
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

module.exports = app;

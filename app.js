const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const passport = require('passport');
const cors = require('cors');

const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth');

const app = express();

const port = process.env.port || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initialize passport
passportSetup();
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  //res.send({ user: req.user });
  return res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`express is listening on port ${port}`);
})

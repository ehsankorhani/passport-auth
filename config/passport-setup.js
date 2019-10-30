const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = () => {
  passport.use(new LocalStrategy(
    { passReqToCallback: true},
    function (req, username, password, done) {
      User.findOne({ username: username }, function (err, user) {
       return done(null, user);
      });
    }
  ));
};
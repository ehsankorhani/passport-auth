const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user-model');

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log('Local Strategy')
    console.log(username)
    console.log(password)

    return done(null, { "name": "ehsan" });
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   if (!user.verifyPassword(password)) { return done(null, false); }
    //   return done(null, user);
    // });
  }
));
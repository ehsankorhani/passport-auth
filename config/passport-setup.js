const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('./../models/user');
const jwtSecret = require('./jwt-config');

module.exports = () => {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        session: false
      },
      (username, password, done) => {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.verifyPassword(password)) { return done(null, false); }
          return done(null, user);
        });
      }
    )
  );

  //jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),

  passport.use(
    'jwt',
    new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret.secret
    },
      (jwtPayload, done) => {
        console.log('jwtPayload:', jwtPayload);
        return User.findOne({ username: jwtPayload.id })
          .then(user => {
            return done(null, user);
          })
          .catch(err => {
            return done(err);
          });
      })
  );
};

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('./../models/user')

module.exports = () => {
  passport.use(
    'google',
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
      (accessToken, refreshToken, profile, done) => {
        /* the second argument becomes `user` prop on `req` object */
        User.findOrCreate({ profile: profile }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(err, token);
        });

        //return done(null, `${accessToken} - ${refreshToken}`);
        //return done(null, profile);

        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
      })
  );
}

//module.exports = () => {
  // passport.use(
  //   'google',
  //   new GoogleStrategy({
  //     clientID: process.env.GOOGLE_CLIENT_ID,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //     callbackURL: '/auth/google/redirect',
  //   },
  //     (accessToken, refreshToken, profile, done) => {
  //       // the second argument becomes `user` prop on `req` object
  //       done(null, profile);
  //     })
  // );

  // passport.use(
  //   'jwt',
  //   new JWTStrategy({
  //     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  //     secretOrKey: process.env.JWT_SECRET
  //   },
  //     (jwtPayload, done) => {
  //       console.log('jwtPayload:', jwtPayload);
  //       return done(null, jwtPayload.email);

  //       // TODO: verify email
  //       // return User.findOne({ email: jwtPayload.email })
  //       //   .then(user => {
  //       //     return done(null, user);
  //       //   })
  //       //   .catch(err => {
  //       //     return done(err);
  //       //   });
  //     })
  // );
//}
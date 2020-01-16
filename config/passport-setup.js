const passport = require('passport');
const OpenIDStrategy = require('passport-openid').Strategy;

module.exports = () => {
  passport.use(
    'google',
    new OpenIDStrategy({
      returnURL: '/auth/google/redirect',
      realm: 'http://localhost:3000/'
    }, (identifier, done) => {
      console.log(identifier);
      return done(null, { identifier: identifier })
    })
  )
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
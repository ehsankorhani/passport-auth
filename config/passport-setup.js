const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = () => {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
      (accessToken, refreshToken, profile, done) => {
        // the second argument becomes `user` prop on `req` object
        done(null, accessToken);
      })
  );
}
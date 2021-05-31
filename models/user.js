const jwt = require('jsonwebtoken');

const users = {}

const findOrCreate = (profile, done) => {
  if (!profile) return done(false, null)

  /*  */
  
  return done(false, null)
};

module.exports = {
  findOrCreate
}
  
//return bcrypt.compareSync(password, this.passwordHash);

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./../models/user-model');

// module.exports = () => {
//   passport.use(new LocalStrategy(
//     function (username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         console.log('user:', user);
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (user.password != password) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));
// };

// //if (!user.verifyPassword(password)) { return done(null, false); }
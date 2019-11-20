const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const saltRounds = 10;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  hashed_password: { type: String, default: '' }
});

userSchema.pre('save', function (next) {

});

// userSchema.methods.verifyPassword = function (password) {
//   return password == this.password;
// };

userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.hashed_password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;


//   const user = this;

//   if (user._password === undefined) {
//     return next();
//   }

//   bcrypt.genSalt(SALT, function (err, salt) {
//     if (err) console.log(err);
//     // hash the password using our new salt
//     bcrypt.hash(user._password, salt, function (err, hash) {
//       if (err) console.log(err);
//       user.hashed_password = hash;
//       next();
//     });
//   });

// var salt = bcrypt.genSaltSync(saltRounds);
// var hash = bcrypt.hashSync(password, salt);
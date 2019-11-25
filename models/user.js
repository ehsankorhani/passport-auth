const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _Id : { type: String },
  username: { type: String, required: true, index: { unique: true } },
  passwordHash: { type: String, default: '' }
});

userSchema.pre('save', function (next) {

});

userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model('user', userSchema);

module.exports = User;
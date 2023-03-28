const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
    default: 1000,
  },
  handsWon: {
    type: Number,
    required: true,
    default: 0
  }
});

UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, function (saltError, salt) {
    if (saltError) {
      return next(saltError);
    } else {
      bcrypt.hash(user.password, salt, function (hashError, hash) {
        if (hashError) {
          return next(hashError);
        } else {
          user.password = hash;
          console.log(user.password);
          return next();
        }
      });
    }
  });
});

UserSchema.methods.comparePassword = function (enteredPassword, callback) {
  console.log(enteredPassword, this.password);
  bcrypt.compare(enteredPassword, this.password, (err, isMatch) => {
    console.log(isMatch);
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;

const mongo = require('mongoose');
const User = require('../models/userModel.js');

const UserController = {
  createUser(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);

    User.create({ username, password, money: 100 })
      .then((data) => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },

  getUser(req, res, next) {
    const username = req.params.username;
    User.findOne({ username: username }).then((user) => {
      if (!user) {
        return next * { error: 'user not found' };
      } else {
        res.locals.user = user;
        return next();
      }
    });
  },

  updateUser(req, res, next) {
    const username = req.params.username;
    const { money, handsWon } = req.body;
    User.findOneAndUpdate({ username: username }, { money, handsWon }).then(
      (user) => {
        if (!user) {
          return next({ err: 'user not found' });
        } else {
          res.locals.update = {
            username: user.username,
            password: user.password,
            money,
            handsWon,
          };
          return next();
        }
      }
    );
  },

  logIn(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          res.locals.status = false;
          return next();
        } else {
          user.comparePassword(password, (err, isMatch) => {
            if (err) return next(err);
            res.locals.status = isMatch;
            res.locals.user = user;
            return next();
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  },
};

module.exports = UserController;

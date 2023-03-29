const express = require('express');
const path = require('path');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/', userController.createUser, (req, res, next) => {
  res.sendStatus(201);
  // return next();
});

router.patch('/:username', userController.updateUser, (req, res) => {
  res.status(200).json({updated: res.locals.update})
});

router.post('/login', userController.logIn, (req, res) => {
  res.status(200).json({status: res.locals.status, user: res.locals.user});
});

router.get('/:username', userController.getUser, (req, res) => {
  res.sendStatus(201);
});

module.exports = router;

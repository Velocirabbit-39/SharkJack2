const express = require('express');
const path = require('path');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/', userController.createUser, (req, res, next) => {
  return next();
});

router.patch('/:username', userController.updateUser, (req, res, next) => {
  return next();
});

router.post('/login', userController.logIn, (req, res, next) => {
  return next();
});

router.get('/:username', userController.getUser, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

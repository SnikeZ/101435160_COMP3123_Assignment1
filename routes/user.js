const express = require('express');
const router = express.Router();
const { signup, signupValidator, login } = require('../controllers/user');

router.post('/signup', signupValidator, signup);
router.post('/login', login)

module.exports = router;
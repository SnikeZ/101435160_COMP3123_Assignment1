const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/user');
const { body, validationResult } = require('express-validator');

exports.signupValidator = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .withMessage('Username must be at least 3 characters long'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
]

exports.signup = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userSchema.create({
      username: username,
      email: email,
      password: hashedPassword
    })

    res.status(201).json({
      message: "User created successfully",
      user_id: newUser.id
    })


  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;


    const user = await userSchema.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      })
    }

    const passwordCorrect = await bcrypt.compare(password, user.password)
    if (passwordCorrect) {
      const token = jwt.sign(
        { userId: user._id, email: user.email, username: user.username },
        process.env.JWT_SECRET || 'ebaldin',
        { expiresIn: '24h' }
      );

      return res.status(200).json({
        message: "Login successful.",
        jwt_token: token
      })
    }

    return res.status(401).json({
      message: "Invalid credentials"
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
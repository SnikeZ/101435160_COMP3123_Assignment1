const bcrypt = require('bcryptjs');
const userSchema = require('../models/user');
const expressValidator = require('express-validator')

exports.signup = async (req, res) => {
  try {

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
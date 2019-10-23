require('dotenv').config();

const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

// ROUTE  /api/users
// DESC   Create user
// ACCESS Private
router.post('/', [
  check('email', 'Please include valid email')
  .isEmail(),
  check('password', 'Password length should be at least 6 characters')
  .isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

  // Pull user information from post request
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) res.status(400).json({ errors: [{ msg: 'User already exists!' }] });

    // Save user as entered in the database
    user = new User({ email, password });

    // Hash the password in the database
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // User is then saved to the database
    await user.save();

    // Generate unique json webtoken for user
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// ROUTE  /api/users/:email
// DESC   Deletes a user
// ACCESS Private
router.delete('/:email', auth, async (req, res) => {
  try {
    const email = req.params.email;
    let user = User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    await User.findOneAndRemove({ email });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
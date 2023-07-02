const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

require('dotenv').config();
const USER = process.env.DUSER;
const PASS = process.env.DPASS;

router.post('/', [
  check('email', 'Email is required')
  .not()
  .isEmpty(),
  check('email', 'Valid email required')
  .isEmail(),
  check('msg', 'A message is required')
  .not()
  .isEmpty(),
  check('subject', 'Subject is required')
  .not()
  .isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, subject, msg } = req.body;
  console.log(`FormData from server: ${email} - ${subject} - ${msg}`);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: USER,
      pass: PASS
    },
    logger: true
  });

  const mailBody = {
    to: 'dave.r.regg@gmail.com',
    from: email,
    subject: subject,
    text: `From: <${email}>\nMessage: ${msg}`
  };

  try {
    await transporter.sendMail(mailBody);
    res.json({ msg: 'Email sent!' });
  } catch (err) {
    console.log(`Error from transporter: ${err.message}`);
  }
});

module.exports = router;
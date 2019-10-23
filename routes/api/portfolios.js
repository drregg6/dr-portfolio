const Portfolio = require('../../models/Portfolio');
const express = require('express');
const router = express.Router();

// ROUTE  /api/portfolio
// DESC   Get portfolio
// ACCESS Public
router.get('/', async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ user });
    if (!portfolio) {
      return res.status(400).json({ msg: 'Portfolio does not exist' });
    }

    res.json(portfolio);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
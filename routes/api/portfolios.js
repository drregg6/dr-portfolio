const { check, validationResult } = require('express-validator');
const Portfolio = require('../../models/Portfolio');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

// @route  GET /api/portfolios
// @desc   Get all portfolios
// @access Public
router.get('/', async (req, res) => {
  try {
    // This will be sent to populate a state arr
    let portfolios = await Portfolio.find();

    res.json(portfolios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  POST /api/portfolios
// @desc   Create or update portfolio
// @access Private
router.post('/', [auth, [
  check('title', 'Title is required')
  .not()
  .isEmpty(),
  check('url', 'URL is required')
  .not()
  .isEmpty()
] ], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

  const {
    title,
    url,
    technologies,
    image,
    desc
  } = req.body;

  const newPortfolio = {};
  newPortfolio.user = req.user.id;
  if (title) newPortfolio.title = title;
  if (url) newPortfolio.url = url;
  if (image) newPortfolio.image = image;
  if (desc) newPortfolio.desc = desc;
  if (technologies) {
    newPortfolio.technologies = technologies.split(',').map(skill => skill.trim());
  }
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (portfolio) {
      portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user.id },
        { $set: newPortfolio },
        { new: true }
      );

      return res.json({ portfolio });
    }

    portfolio = new Portfolio(newPortfolio);
    await portfolio.save();
    res.json({ portfolio });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  DELETE /api/portfolios/:id
// @desc   Delete a portfolio
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(400).json({ msg: 'Portfolio does not exist' });
    }

    await portfolio.remove();
    res.json({ msg: 'Portfolio deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
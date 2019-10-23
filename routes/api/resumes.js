// Resume should only be populated by ONE resume
// My own resume

const { check, validationResult } = require('express-validator');
const Resume = require('../../models/Resume');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

// @route  GET /api/resumes
// @desc   Get first resume
// @access Public
router.get('/', async (req, res) => {
  try {
    let resumes = await Resume.find();

    res.json(resumes[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  POST /api/resumes
// @desc   Create or update resume
// @access Private
router.post('/', auth, async (req, res) => {
  let {
    name,
    phone,
    website,
    technologies,
    bio
  } = req.body;

  let newResume = {};
  newResume.user = req.user.id;
  if (name) newResume.name = name;
  if (phone) newResume.phone = phone;
  if (address) newResume.address = address;
  if (website) newResume.website = website;
  if (bio) newResume.bio = bio;
  if (technologies) {
    newResume.technologies = technologies.split(',').map(tech => tech.trim());
  }
  newResume.address = {};
  if (number) newResume.address.number = number;
  if (street) newResume.address.street = street;
  if (apartment) newResume.address.apartment = apartment;
  if (city) newResume.address.city = city;
  if (state) newResume.address.state = state;
  if (zip) newResume.address.zip = zip;

  try {
    let resume = await Resume.findOne({ user: req.user.id });

    if (resume) {
      resume = await Resume.findOneAndUpdate(
        { user: req.user.id },
        { $set: newResume },
        { new: true }
      );

      return res.json({ resume });
    }

    resume = new Resume(newResume);
    await resume.save();
    res.json({ resume });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  PUT /api/resumes/employment
// @desc   Create or update employment
// @access Private
router.put('/employment', [auth, [
  check('title', 'Title is required')
  .not()
  .isEmpty(),
  check('company', 'Company is required')
  .not()
  .isEmpty(),
  check('location', 'Location is required')
  .not()
  .isEmpty(),
  check('from', 'Start date is required')
  .not()
  .isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

  const {
    title,
    company,
    location,
    from,
    to,
    current,
    desc
  } = req.body;

  const newEmployment = {
    title,
    company,
    location,
    from,
    to,
    current,
    desc
  };

  try {
    let portfolio = Portfolio.findOne({ user: req.user.id });
    portfolio.employment.unshift(newEmployment);
    await portfolio.save();
    res.json({ portfolio });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  PUT /api/resumes/education
// @desc   Create or update education
// @access Private
router.put('/education', [auth, [
  check('school', 'School is required')
  .not()
  .isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

  const {
    school,
    degree,
    from,
    to,
    desc
  } = req.body;
  const newEducation = {
    school,
    degree,
    from,
    to,
    desc
  };

  try {
    let portfolio = Portfolio.findOne({ user: req.user.id });
    portfolio.education.unshift(newEducation);
    await portfolio.save();
    res.json({ portfolio });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  PUT /api/resumes/experience
// @desc   Create or update experience
// @access Private
router.put('/experience', [auth, [
  check('title', 'Title is required')
  .not()
  .isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

  const {
    title,
    year,
    desc,
    technologies
  } = req.body;

  const newExperience = {};
  if (title) newExperience.title = title;
  if (year) newExperience.year = year;
  if (desc) newExperience.desc = desc;
  if (technologies) {
    newExperience.technologies = technologies.split(',').map(tech => tech.trim());
  };

  try {
    let portfolio = Portfolio.findOne({ user: req.user.id });
    portfolio.experience.unshift(newExperience);
    await portfolio.save();
    res.json({ portfolio });    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
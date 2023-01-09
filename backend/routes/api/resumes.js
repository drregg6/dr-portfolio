// Resume should only be populated by ONE resume
// My own resume

const Resume = require('../../models/Resume');
const auth = require('../../middleware/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// @route  GET /api/resumes
// @desc   Get first resume
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  let resumes = await Resume.find();
  res.status(200).json({
    resume: resumes[0],
    message: 'Resume found'
  });
}));

// @route  POST /api/resumes
// @desc   Create or update resume
// @access Private
router.post('/', auth, asyncHandler(async (req, res) => {
  let {
    name,
    email,
    phone,
    number,
    street,
    apartment,
    city,
    state,
    zip,
    website,
    technologies,
    bio,
    goals,
    github,
    instagram,
    twitter,
    linkedin
  } = req.body;

  let newResume = {};
  newResume.user = req.user.id;
  if (name) newResume.name = name;
  if (phone) newResume.phone = phone;
  if (email) newResume.email = email;
  if (website) newResume.website = website;
  if (bio) newResume.bio = bio;
  if (goals) newResume.goals = goals;
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
  newResume.social = {};
  if (instagram) newResume.social.instagram = instagram;
  if (github) newResume.social.github = github;
  if (linkedin) newResume.social.linkedin = linkedin;
  if (twitter) newResume.social.twitter = twitter;

  try {
    let resume = await Resume.findOne({ user: req.user.id });

    if (resume) {
      resume = await Resume.findOneAndUpdate(
        { user: req.user.id },
        { $set: newResume },
        { new: true }
      );

      return res.json(resume);
    }

    resume = new Resume(newResume);
    await resume.save();
    res.status(200).json({
      resume,
      message: 'Resume updated'
    });
  } catch (err) {
    res.status(500);
    throw new Error('Server error');
  }
}));

// @route  PUT /api/resumes/employment
// @desc   Create or update employment
// @access Private
router.put('/employment', auth, asyncHandler(async (req, res) => {
  if (!req.body.title ||
  !req.body.company ||
  !req.body.location ||
  !req.body.from) {
    res.status(400);
    throw new Error('Please add all information');
  }

  const {
    title,
    company,
    location,
    from,
    to,
    current,
    desc
  } = req.body;

  const newEmployment = {};
  if (title) newEmployment.title = title;
  if (company) newEmployment.company = company;
  if (location) newEmployment.location = location;
  if (from) newEmployment.from = from;
  if (to) newEmployment.to = to;
  if (current) newEmployment.current = current;
  if (desc) {
    newEmployment.desc = desc.split('-').map(task => task.trim()).filter(task => task !== '');
  }

  let resume = await Resume.findOne({ user: req.user.id });

  if (!resume) {
    res.status(400);
    throw new Error('Resume not found');
  }

  resume.employment.unshift(newEmployment);
  await resume.save();
  res.status(200).json({
    resume,
    message: 'Employment created'
  });
}));

// @route  DELETE /api/resumes/employment/:id
// @desc   Remove an employment
// @access Private
router.delete('/employment/:emp_id', auth, asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ user: req.user.id });

  if (!resume) {
    res.status(400);
    throw new Error('Resume not found');
  }

  const index = resume.employment.map(item => item.id).indexOf(req.params.emp_id);
  resume.employment.splice(index, 1);

  await resume.save();
  res.json({
    resume,
    message: 'Employment deleted'
  });
}));

// @route  PUT /api/resumes/education
// @desc   Create or update education
// @access Private
router.put('/education', auth, asyncHandler(async (req, res) => {
  if (!req.body.school) {
    res.status(400);
    throw new Error('Please add required information')
  }

  const {
    school,
    degree,
    focus,
    location,
    from,
    to
  } = req.body;
  const newEducation = {};
  if (school) newEducation.school = school;
  if (degree) newEducation.degree = degree;
  if (focus) newEducation.focus = focus;
  if (location) newEducation.location = location;
  if (from) newEducation.from = from;
  if (to) newEducation.to = to;

  let resume = await Resume.findOne({ user: req.user.id });

  if (!resume) {
    res.status(400);
    throw new Error('Resume not found');
  }

  resume.education.unshift(newEducation);
  await resume.save();
  res.json({
    resume,
    message: 'Education created'
  });
}));

// @route  DELETE /api/resumes/education/:id
// @desc   Remove an education
// @access Private
router.delete('/education/:ed_id', auth, asyncHandler(async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    
    if (!resume) {
      res.status(400);
      throw new Error('Resume not found');
    }
    
    const index = resume.education.map(item => item.id).indexOf(req.params.ed_id);
    resume.education.splice(index, 1);

    await resume.save();
    res.json({
      resume,
      message: 'Education deleted'
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}));

// @route  PUT /api/resumes/experience
// @desc   Create or update experience
// @access Private
router.put('/experience', auth, asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Erorr('Please add required information')
  }
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
  
  let resume = await Resume.findOne({ user: req.user.id });
  
  if (!resume) {
    res.status(400);
    throw new Error('Resume not found');
  }
  
  resume.experience.unshift(newExperience);
  await resume.save();
  res.json({
    resume,
    message: 'Experience added'
  });
}));

// @route  DELETE /api/resumes/experience/:id
// @desc   Remove an experience
// @access Private
router.delete('/experience/:exp_id', auth, asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ user: req.user.id });
  
  if (!resume) {
    res.status(400);
    throw new Error('Resume not found');
  }
  
  const index = resume.experience.map(item => item.id).indexOf(req.params.exp_id);
  resume.experience.splice(index, 1);

  await resume.save();
  res.json({
    resume,
    message: 'Experience deleted'
  });
}));

module.exports = router;
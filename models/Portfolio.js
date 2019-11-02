// Made a mistake with the Portfolio
// Since it will be an arr of objs
// With the array owned by a user
// All routes and payloads need to be updated
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfoliosSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  live: {
    type: String
  },
  code: {
    type: String
  },
  technologies: {
    type: [String]
  },
  image: {
    type: String
  },
  desc: {
    type: String
  }
  // year: { type: String }
});

const portfolioSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  portfolios: [portfoliosSchema]
});

module.exports = Portfolio = mongoose.model('Portfolio', portfolioSchema);

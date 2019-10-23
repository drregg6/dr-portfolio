const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
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
});

module.exports = Portfolio = mongoose.model('Portfolio', portfolioSchema);
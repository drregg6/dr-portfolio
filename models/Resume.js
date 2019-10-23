// Placed on hold

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = Resume = mongoose.model('Resume', resumeSchema);
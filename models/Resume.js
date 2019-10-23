// Placed on hold

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  website: {
    type: String
  },
  technologies: {
    type: [String]
  },
  bio: {
    type: String
  },
  employment: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean
      },
      desc: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String
      },
      from: {
        type: Date
      },
      to: {
        type: String
      },
      desc: {
        type: String
      }
    }
  ],
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      date: {
        type: Date
      },
      desc: {
        type: String
      },
      tech: {
        type: [String]
      }
    }
  ]
});

module.exports = Resume = mongoose.model('Resume', resumeSchema);
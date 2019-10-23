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
    number: {
      type: String
    },
    street: {
      type: String
    },
    apartment: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
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
        type: Boolean,
        default: false
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
      year: {
        type: String
      },
      desc: {
        type: String
      },
      technologies: {
        type: [String]
      }
    }
  ]
});

module.exports = Resume = mongoose.model('Resume', resumeSchema);
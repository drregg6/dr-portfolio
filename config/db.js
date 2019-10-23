require('dotenv').config();

const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;
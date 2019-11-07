const connectDB = require('./config/db');
const express = require('express');
const path = require('path');
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json({ extended: false }));

// Get the routes
app.use('/api/portfolios', require('./routes/api/portfolios'));
app.use('/api/resumes', require('./routes/api/resumes'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Launch
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
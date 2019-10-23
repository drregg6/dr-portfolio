const connectDB = require('./config/db');
const express = require('express');
const app = express();

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello from server! :)');
});
app.use(express.json({ extended: false }));

// Get the routes
app.use('/api/users', require('./routes/api/users'));

// Launch
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
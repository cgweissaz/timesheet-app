const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
const timesheets = [];

// POST endpoint to save a timesheet
app.post('/api/timesheet', (req, res) => {
  const { employeeName, hours } = req.body;
  timesheets.push({ employeeName, hours });
  res.status(201).send('Timesheet saved');
});

// GET endpoint to retrieve all timesheets
app.get('/api/timesheet', (req, res) => {
  res.json(timesheets);
});

// Start the server
app.listen(5000, () => {
  console.log('Backend running on port 5000');
});

const express = require('express');

const app = express();
const port = 1245;

// Defining a route for handling client communication
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;

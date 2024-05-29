const express = require('express');

const app = express();
const port = 1245;

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));
// Defining a route for handling client communication
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Defining a route for handling client communication
app.use('/', router);

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;

Node.js Project README
Overview
This project demonstrates the basics of Node.js, including file reading, environment access, creating HTTP servers with and without Express.js, and using modern JavaScript with Babel. It also showcases how to speed up development with Nodemon.

Prerequisites
Node.js (v14+)
npm
Nodemon
Babel
Installation

Install dependencies:

bash
npm install
Install Nodemon globally (if not already):

bash
npm install -g nodemon
Usage
Running JavaScript with Node.js
bash
node your-script.js
Using Node.js Modules
Import and use modules:

javascript
const fs = require('fs');
Reading Files
javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
Accessing Command Line Arguments and Environment
javascript
console.log(process.argv);
console.log(process.env);
Creating an HTTP Server
javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
Creating an HTTP Server with Express.js
Install Express:

bash
npm install express
javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(3000, () => {
  console.log('Express server running at http://127.0.0.1:3000/');
});
Advanced Routes with Express.js
javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});
Using ES6 with Babel
Install Babel:

bash
npm install --save-dev @babel/core @babel/preset-env @babel/node
Create .babelrc:

json
{
  "presets": ["@babel/preset-env"]
}
Run with Babel:

bash
npx babel-node your-script.js
Developing Faster with Nodemon
bash
nodemon your-script.js
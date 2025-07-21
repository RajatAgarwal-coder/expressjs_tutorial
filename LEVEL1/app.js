/* Core Modules
const http = require('http');*/

// External/Third-party Modules
const express = require('express'); // Used for importing express


// npm is a package manager for Node.js So to install it npm install express
// Don't add Dev Dependencies because we also need it in production

// Internal/Local Modules
const reqhandler = require('./PracticeTest.js');

// To use Expreess firstly we have to execute it
const app = express(); // And pass 

// Adding a Middleware
// Routing the Request app.user((path,callback,callback....))

app.use("/",(req,res,next) => {

  console.log('First Middleware Executed ', req.url , req.method);
  res.send("<h1>This is my Home Page</h1>")
  next(); // This is important to call next() to pass control to the next middleware or route handler

})

// If we take "/" for path with "use" it will be executed for every
// But if we take "/" for path with "use" or "get" it will be executed for / only

app.use("/submit",(req, res, next) => { // Ye / ho ya uske baad koi bhi ho sab ke liye chal jaaega

  console.log('Second Middleware Executed ', req.url, req.method);

  // Sending a response
  res.send('<h1>Hello and Welcome on my Express Tutorial!</h1>'); // This is used to send a response back to the client

  next(); 

})

// For method like GET and POST we can write it at the place of use

// Using Express we also not want to create server
// const server = http.createServer(app); // In place of reqhandler we can pass app

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
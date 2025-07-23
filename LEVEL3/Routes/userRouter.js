const express = require("express");

const path = require("path");

const userRouter = express.Router();

const rootdir = require("../utils/pathUtils");

userRouter.use((req,res,next) => {

  console.log(`Requested URL: ${req.url}`)
  next();
  

})

userRouter.use((req,res,next) => {

  console.log(`Requested Method: ${req.method}`)
  next();

})

// app.use((req,res,next) => {

//   res.send("<h1>Hello this is my Practice Set</h1>")

// })

userRouter.get("/",(req,res,next) => {

  console.log(registereduser);
  // Now we have to show this user on home.html
  res.render("home" ,{registereduser});

})

userRouter.get("/contact-us",(req,res,next) => {

  res.sendFile(path.join(rootdir ,"views" ,"contact-details.html"))

})


const registereduser = []; // Object to store User Name

userRouter.post("/contact-us",(req,res,next) => {

  console.log(req.body , req.body.name);
  registereduser.push({ userName: req.body.name});

  res.sendFile(path.join(rootdir ,"views" ,"Response.html"))

})

// module.exports = userRouter;  We want to export 2 module so it will not work

exports.userRouter = userRouter;
exports.registereduser = registereduser;
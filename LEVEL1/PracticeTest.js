const express = require("express");

const app = express();

app.use((req,res,next) => {

  console.log(`Requested URL: ${req.url}`)
  next();

})

app.use((req,res,next) => {

  console.log(`Requested Method: ${req.method}`)
  next();

})

// app.use((req,res,next) => {

//   res.send("<h1>Hello this is my Practice Set</h1>")

// })

app.get("/",(req,res,next) => {

  res.send(`<h1>Hello This is my Practice of Express JS</h1>`)

})

app.get("/contact-us",(req,res,next) => {

  res.send(`
    <h1>Please give Your Contact Details</h1>

    <form action="/contact-us" method="post">

        <input type="text" name="name" placeholder="Enter your Name: "/ required>
        <input type="email" name="email" placeholder="Enter Your Email"/ required><br><br>
        <input type="Submit"></input>

    </form>`
  )

})

app.post("/contact-us",(req,res,next) => {

  res.end(`<h1>We will Contact you shortly</h1>`)

})

app.listen(3001, () => {

  console.log('Server is running at http://localhost:3001/');
})
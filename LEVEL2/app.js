const express = require("express");
const app = express()

// For routes it is suggested to create another folder and define other routes inside it

const bodyparser = require("body-parser") // Used for Parising the Request

// Parsing Request

app.get("/details", (req, res, next) => {

    res.send(`
        <form action="/submit-details" method="POST">
        <input type="text" name="username" placeholder="Enter Your Name"/><br>
        <input type="Submit" value="submit">
        </form>
        `)

})

app.use(bodyparser.urlencoded()); // It should be used only just up of post method. So it will give the object to request
// If any log before it then he will not get

app.post("/submit-details" , (req, res, end) => {

    console.log(req.body);

})

// Some Concepts we have learn in airbnb Project

app.listen(3001 , () => {
    console.log("Server is running at http://localhost:3001/")
} )
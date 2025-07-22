// Serving HTML Files
const path = require("path");

const express = require("express");

const rootDir = require("../utils/pathUtils")

// We cannot create one more app because of only 1 server
const userRouter = express.Router(); // So we will create another router for the app

userRouter.get("/", (req, res, next) => {

    res.sendFile( path.join( rootDir,'views', 'home.html') )

})

module.exports = userRouter;
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const rootDir = require("./utils/pathUtils")

const userRouter = require("./Routes/userRouter")

const app = express();

app.use(bodyParser.urlencoded());

app.use(userRouter)

app.use((req,res,next) => {
    res.status(404).sendFile( path.join( rootDir, 'views', '404.html') )
})

app.listen(3001, () => {

  console.log('Server is running on http://localhost:3001/');
  
})
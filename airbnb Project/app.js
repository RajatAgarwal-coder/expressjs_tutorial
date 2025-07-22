const express = require("express");
const path = require("path");

// Local Module
const userRouter = require("./Routes/userRouter")
const hostRouter = require("./Routes/hostRouter")

const app = express();

app.use(express.urlencoded()); // At place pf bpdyparser we can use Express

app.use(userRouter);
app.use("/host",hostRouter); // Common Paths if you dont want to write /host every time
const rootDir = require("./utils/pathUtils")

// Adding 404
app.use((req,res,next) => {
    res.status(404).sendFile( path.join( rootDir, 'views', '404.html') )
})

// To add html files create a folder name Views
// And Import module name path

app.listen(3001, () => {
    console.log("Server is running at http://localhost:3001/")
})
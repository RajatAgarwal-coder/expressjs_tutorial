    const express = require("express");
    const app = express();
    const path = require("path");
    const fs = require("fs");

    app.use(express.static(path.join(__dirname,'public')))

    app.set("view engine","ejs");
    app.set("views","views")

    app.get("/",(req,res) => {

        fs.readdir("./files", (err , files) => { // Used to read the folders
            res.render("index", {files : files});  // Sending data to html {isNameSe : yahaBhejNaHai}
            console.log("Server Started");
        })

    })

    // Making Route Dynamic

    app.get("/profile/:username",(req,res) => { // here raj have become dynamic i.e. iski place par kuch bhi likh sakte hai

        res.send(req.params.username); // It is used to get the dynamic route

    })

    app.get("/profile/:username/:age",(req,res) => { // here raj have become dynamic i.e. iski place par kuch bhi likh sakte hai

        res.send(`Welcome ${req.params.username} of age ${req.params.age}`);

    })

    app.use(express.urlencoded())

    app.get("/file/:filename",(req,res) => {

        fs.readFile(`./files/${req.params.filename}`,'utf-8', (err,filedata) => {

            res.render('show',{filename: req.params.filename , filedata : filedata});

        })

    })

    app.post("/edit", (req, res) => {
        const oldName = `./files/${req.body.previous}`;
        const newName = `./files/${req.body.newname.split(' ').join('')}.txt`;

        fs.rename(oldName, newName, (err) => {
            if (err) {
                console.error("Error renaming file:", err);
                return res.status(500).send("Error renaming file.");
            }
            res.redirect("/");
        });
    });

    app.post("/create",(req,res) => {

        fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
            res.redirect("/")
        } )

        // res.send("Thank You we will Contact You Shortly")
        console.log(req.body)

    })

    app.get("/edit/:filename",(req,res) => {

        res.render('edit', {filename : req.params.filename});

    })

    app.listen(3005, () => {
        console.log("Server is Listening on http://localhost:3005/")
    })
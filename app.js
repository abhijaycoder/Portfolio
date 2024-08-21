const express = require('express');
const app = express();
const path = require('path');
const userModel = require("./models/client");


// setting up the ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res){
    res.render("index")
})

app.post("/create",async(req,res) => {
    let {name,email,message}=req.body;
    let user = await userModel.create({
        name,
        email,
        message,
    })

    res.redirect("/")
})

app.get("/project/bookbind", (req,res) => {
    res.render("book bind")
})

app.get("/project/movify-app", (req,res) => {
    res.render("movify")
})

app.listen(3000, function(){
    console.log("its running on port 3000")
})
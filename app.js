
let express = require("express");
let mongoose = require('mongoose');
let path = require("path");
const Post = require("./models/postModel");
const postRoutes = require('./routes/post-routes');
let methodOverride = require("method-override");

let app = express();

require("dotenv").config();

let db = process.env.MONGO_URL;
let PORT = process.env.PORT;



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'views')))

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.use(postRoutes); 

async function start() {
    try{
        await mongoose.connect(db);
        console.log('Connected to Database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}....`);
        });
    } catch (error) {
        console.log("Error in Connecting to Database");
    }
};


start();




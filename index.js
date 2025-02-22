import express from "express";
import routes from "./routes/routes.js";
import connectDB from "./db/connectDB.js";
import path from  "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const DATABASEURL = process.env.DATABASEURL || 'mongodb://localhost:27017/portfolio'
connectDB(DATABASEURL);

app.use(bodyParser.urlencoded({extended:false}));

//setup for static files 
app.use(express.static(path.join(process.cwd(),'public')))

//ejs setup 
app.set("view engine","ejs");
app.set("views","./views");
//routes
app.use("/",routes);

app.listen(port,() =>{
    console.log(`Server running on port ${port} `)
})
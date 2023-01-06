const experss = require("express");
const path = require("path");
const helmet = require('helmet');
const ejs = require('ejs');
const projectsRouter = require('./routes/Projects')
const UsersRouter = require('./routes/Users')
const AuthRouter = require('./routes/Auth')
const AdminRouter = require('./routes/Admin')
const logginMiddelware = require("./middlewares/logging")
const mongoose = require('mongoose');
const cors = require('cors');
const ErrorMW = require("./middlewares/ErrorMW");
require('dotenv').config();

const app = experss();

/*  */
//set connection
mongoose.connect("mongodb+srv://mahmoudalmoukhtar:R02m8QZ8AB7GqH4v@cluster0.bffsz32.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("correct database Connection")
}).catch(()=>{
    console.log("error in database Connection")
});

app.use(cors());
app.use(experss.json());
app.use(experss.urlencoded({extended: true}));
app.use("/api/images",experss.static('public'));
//app.use(cookieParser());
//3red party middle
helmet({
  crossOriginResourcePolicy: false,
})
app.use("/api/users",UsersRouter)
app.use("/api/projects",projectsRouter)
app.use("/api/login",AuthRouter)
app.use("/api/admin",AdminRouter)
app.use(ErrorMW)//express error MW

//app.set("templating engine","ejs");
//router.set("views","templates");

//custom middleware
app.use(logginMiddelware)
const port = process.env.PORT || 3001;

app.get("*",(req,res,nxt)=>{
  console.log("request * Resieved")
  nxt()
})

// app.get("/", (req,res, nxt)=>{
//   console.log("stage #1")
//   nxt()
// },(req, res) => {
//   console.log("request resieved");
//   //res.send("test server response");

//   res.sendFile(path.join(__dirname, "/index.html"));
// });


app.listen(port, () => {
  console.log(`listening server ${port} !!!`);
});


/* 

app.get("/Welcome.html", (req, res) => {
  const {name, email} = req.query;
  console.log(name);
  console.log(email);
  res.sendFile(path.join(__dirname, "/Welcome.html"));
});

app.post("/Welcome.html", (req, res) => {
  const {name, email} = req.body;
  res.cookie("userName", Buffer.from(name).toString('base64') ,{httpOnly:true})
  res.cookie("userEmail", Buffer.from(email).toString('base64'),{httpOnly:true})
  res.send(`Thanks ${name} for sending required data`);
});

app.get("/cookie",(req,res)=>{
  console.log(Buffer.from(req.cookies.userName, 'base64').toString())
  res.sendStatus(200)
})

*/
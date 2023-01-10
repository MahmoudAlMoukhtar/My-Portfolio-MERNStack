const express = require("express");
const path = require("path");
const projectsRouter = require("./routes/Projects");
const UsersRouter = require("./routes/Users");
const AuthRouter = require("./routes/Auth");
const AdminRouter = require("./routes/Admin");
const mongoose = require("mongoose");
const cors = require("cors");
const ErrorMW = require("./middlewares/ErrorMW");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use("/api/images",express.static('public'));
//app.use("/api/images", express.static(path.join(__dirname, "./tmp")));
//app.use(cookieParser());
//3red party middle
// helmet({
//   crossOriginResourcePolicy: false,
// });

app.use("/api/users", UsersRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/login", AuthRouter);
app.use("/api/admin", AdminRouter);
app.use(ErrorMW); //express error MW

/*  */
//set connection
const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb+srv://mahmoudalmoukhtar:R02m8QZ8AB7GqH4v@cluster0.bffsz32.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    console.log("correct database Connection");
    app.listen(port, () => {
      console.log(`listening server ${port} !!!`);
    });
  })
  .catch(() => {
    console.log("error in database Connection");
  });

app.get("*", (req, res, nxt) => {
  console.log("request * Resieved");
  nxt();
});

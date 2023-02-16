const express = require("express");
const nodemailer = require("nodemailer");
let hbs = require("nodemailer-express-handlebars");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
  const dataEmail = req.body;
  console.log(dataEmail);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD_EMAIL, // generated ethereal password
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));
  //console.log("testttttttttttt");

  transporter.sendMail({
    from: dataEmail.email,
    to: process.env.EMAIL,
    subject: "New Message project from Client!",
    template: "index",
    context: {
      nameSender: dataEmail.name,
      message: dataEmail.message,
    },

    // html: mail,
  });
  res.status(200).json({message: "you should recive email"});
});

module.exports = router;

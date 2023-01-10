const express = require("express");
const UserValidtor = require("../middlewares/UserValidatorMW");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const AuthPermissionMW = require("../middlewares/AuthPermissionMW");

const router = express.Router();
router.post("/", UserValidtor, async (req, res, nxt) => {
  try {
    let user = await User.findOne({email: req.body.email}).exec();
    if (user) {
      res.status(400).send("User already Registered");
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        // Store hash in your password DB.
        user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          isAdmin: false,
        });
        user.save();
        const token = user.getAuthToken();
        //send resonse
        res.header("x-auth-token", token);
        res.status(200).send("Success Registered User");
      });
    });
  } catch (err) {
    nxt(err);
  }
});

module.exports = router;

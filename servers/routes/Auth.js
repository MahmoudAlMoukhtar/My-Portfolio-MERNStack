const express = require('express')
const User = require('../models/UserModel')
const AuthValidatorMW = require('../middlewares/AuthValidatorMW')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const config = require('config');
const router = express.Router();

router.post("/", AuthValidatorMW,async (req,res,nxt)=>{
    const {email, password} = req.body
    //check email
    try{

        const user = await User.findOne({email}).exec();
        if(!user) return res.status(400).send("Invalid email or password")
    //check password
    const validPassword = await bcrypt.compareSync(password, user.password);
    if(!validPassword) return res.status(400).send("Invalid email or password")

    //if(!config.get("jwtsec")) return res.status(500).send("request cant be fullfilled.. token is not defined")
    const token = user.getAuthToken()
    //send resonse
    res.header("x-auth-token",token);
    res.json({token,isAdmin:user.isAdmin});
    //res.status(200).send("success logged-in");
}catch(err){
nxt(err);
}
})

module.exports = router;
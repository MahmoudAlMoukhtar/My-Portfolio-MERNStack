const mongoose = require('mongoose')
const valid = require('validator');
const jwt = require('jsonwebtoken');

const UserSechma = new mongoose.Schema({    
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,       
        minlength:3,
        maxlength:50
    },
    isAdmin:{
        type:Boolean
    },
    password:{
        type:String,
        required:true,
        minlength:5,
    },
})

UserSechma.methods.getAuthToken = function(){
    const token = jwt.sign({userid:this._id, adminRole:this.isAdmin},process.env.JWT_SECRET,{expiresIn:'3d'})
    return token
}

const User = mongoose.model("Users",UserSechma);

module.exports = User;

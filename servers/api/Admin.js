const express = require('express');
const AuthPermissionMW = require('../middlewares/AuthPermissionMW');
const User = require('../models/UserModel');

const router = express.Router();


router.put("/:id",AuthPermissionMW,(req,res)=>{
    const {id} = req.params
    //get user should update by id
    User.findByIdAndUpdate(id,{isAdmin:req.body.isAdmin},(err, data)=>{
        if(!err){
            if(data){
                res.status(200).send("success update user from reguler to admin")
            }else{
                res.status(400).send("user not found!!!")
            }
        }else{
            res.status(500).send("internal server error")
        }
    })
})


module.exports = router;
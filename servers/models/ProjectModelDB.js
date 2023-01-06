//require mongoose
const mongoose = require('mongoose');

//create schema
const projectSchema = new mongoose.Schema( {
    title:{
        type:String,
        required:true,
        uppercase:true,
        trim:true
    },
    
    description:String,
    demoLink:String,
    githubLink:String,
    image:String,
    // id:{
    //     type:Number,
    //     unique:true,
    //     required:true,
    // }
})

//create model
const Project = mongoose.model("projects",projectSchema)


module.exports = Project;
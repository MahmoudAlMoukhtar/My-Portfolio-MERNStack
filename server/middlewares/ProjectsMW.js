const validator = require('../util/ProjectsValidator')

module.exports = (req,res,nxt)=>{
    const valid = validator(req.body);
    if(valid){
        req.valid = 1;
        nxt();
    }else{
        
        res.status(400).send("error in validator");
    }
}
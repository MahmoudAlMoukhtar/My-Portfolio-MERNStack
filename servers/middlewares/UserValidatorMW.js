const validator = require('../util/UserValidator')

module.exports = (req,res,nxt)=>{
    const valid = validator(req.body)

    if(valid){
        req.valid = 1;
        nxt();
    }else{
        res.status(403).send("error in user validatorMW")
    }
}
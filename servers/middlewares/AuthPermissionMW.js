const jwt = require('jsonwebtoken')
module.exports = (req,res,nxt)=>{
    //check user role (Admin or not)
    //get x-auth-token header
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send("Access Denied..");
    try{
        const decodedPayload = jwt.verify(token,process.env.JWT_SECRET)        
        if(!decodedPayload)return res.status(401).send("Access Denied..");
        if(!decodedPayload.adminRole) res.status(401).send("You cant access to this page");
        //if decoded token header
        nxt();
    }catch(err){
        res.status(400).send("Invalid Token..")
    }
}


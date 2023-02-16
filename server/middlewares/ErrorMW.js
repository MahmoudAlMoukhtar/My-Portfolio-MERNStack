module.exports = (err,req,res,nxt)=>{    
        for(let i in err.errors){
            console.log(err.errors[i].message)
            res.status(500).send("Error in Internal server...")
        }
}
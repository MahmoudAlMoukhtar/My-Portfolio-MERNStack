const logginMiddelware = (req,res,nxt)=>{
  console.log("loging..............")
  nxt()
}

module.exports = logginMiddelware
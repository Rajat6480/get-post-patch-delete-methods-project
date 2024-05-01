const fs = require("fs")

 function logReqRes(fileName ){
  return (req,res,next)=>{fs.appendFile(fileName,`${Date.now()} : ${req.method} : ${req.path}\n`,(err,result)=>{
        next();
  })}
}

module.exports = {
    logReqRes,
}
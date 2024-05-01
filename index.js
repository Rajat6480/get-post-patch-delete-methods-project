const express = require('express')
const userRouter = require("./routes/user")
const app = express();
const PORT = 7001;
const {handleConnection} = require("./connection")
const {logReqRes} = require('./middlewares/userLog')

handleConnection("mongodb://127.0.0.1:27017/remoteStorage").then(()=>console.log("MongoDb Connected..."))
app.use(express.urlencoded({extended:false}))

app.use(logReqRes("entry.txt"));


app.use("/api/users",userRouter)
app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))
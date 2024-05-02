const express = require('express')
const userRouter = require("./routes/user")
const app = express();
const PORT = 7001;
const {handleConnection} = require("./connection")
const {logReqRes} = require('./middlewares/userLog')

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



const options = {
    definition :{
        openapi : '3.0.0',
        info : {
            title : 'Api project for mongodb using Node Js',
            version : '1.0.0'
        },
        servers : [{
            url : "http://localhost:7001/"
        }]
    },
    apis : ['./routes/*.js']
}



const  swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve , swaggerUi.setup(swaggerSpec))

handleConnection("mongodb://127.0.0.1:27017/remoteStorage").then(()=>console.log("MongoDb Connected..."))
app.use(express.urlencoded({extended:false}))

app.use(logReqRes("entry.txt"));


app.use("/api/users",userRouter)
app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))
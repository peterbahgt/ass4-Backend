const express=require("express")
const app =express()
app.use(express.json())
const bootStrap=require("./src/bootstrapp")
bootStrap(app)
 app.listen(3000,()=>{
    console.log("server runing 30000")
 })
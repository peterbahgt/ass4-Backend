
import express from "express"
import bootStrap from "./src/bootstrapp.js"
const app =express()
app.use(express.json()) 
bootStrap(app)
 app.listen(3000,()=>{
    console.log("server runing 30000")
 })
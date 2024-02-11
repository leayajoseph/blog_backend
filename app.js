const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signupRoute=require("./controller/signupRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://leaya:Leaya231@cluster0.sxtvlhw.mongodb.net/blogDb?retryWrites=true&w=majority",{
useNewUrlParser: true
})

app.use("/api/signup",signupRoute)

app.listen(3001,()=>{
    console.log("server running")
})

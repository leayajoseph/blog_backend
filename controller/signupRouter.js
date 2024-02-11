const express = require("express")

const router=express.Router()
const signupModel =require("../module/signupModel")

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
   // let data=req.body
   
    let {data}={"data":req.body}
    let password=req.body.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let signup=new signupModel(data)
    let result = signup.save()
    res.json(
        {status:"success"}
    )
        }

    )
})


module.exports=router
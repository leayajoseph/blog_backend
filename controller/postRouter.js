const express=require("express")

const router =express.Router()

const postModel=require("../module/postModel")

router.post("/addpost",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
            status:"success"
        })
})

router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userId","name mobile address  -_id" )
    .exec()
    res.json(result)
})

module.exports=router
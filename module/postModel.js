const mongoose =require("mongoose")

const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"signup"
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)
//here we are giving 3 fields we only need to give userid and post the date is automaticaly updated
module.exports=mongoose.model("blogposts",postSchema)
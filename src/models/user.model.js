import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is Required."],
        unique:[true,"username is Required"]
    },
    email:{
        type:String,
        required:[true,"email is Required"],
        unique:[true,"email is Required"]
    },
    password:{
        type:String,
        requierd:[true,"password is Required"],
        unique:[true,"password is Required"]
    }
})

const userModel = new mongoose.model("user",userSchema)
export default userModel;
import userModel from "../models/user.model.js";
import status from "http-status";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import config from "../config/config.js";


const register = async(req,res)=>{
   const {username,email,password} = req.body;
   try {
      const isAlreadyexist = await userModel.findOne({
         $or:[
            {email},
            {username}
         ]
      })
      if(isAlreadyexist){
         return res.status(status.CONFLICT).json({
            message:"User Exist!"
         })
      }
      
      const hashedPass = await bcrypt.hash(password,10)
      const user = await userModel.create({
         username,
         email,
         password:hashedPass
      })
      if(!user){
         throw new Error("User Craetion failed.")
      }
      

      const token = jwt.sign({id:user._id},config.JWT_SECRET,{ expiresIn: '1h' })

      res.status(201).json({
         message:"User Created",
         user,
         token
      })
      

   } catch (error) {
      console.log(error)
      res.status(401).json({
         message:error.message
      })
   }
}
export {register}
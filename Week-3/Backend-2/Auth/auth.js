import {UserModel} from "../models/userModel.js";
import {compare} from "bcryptjs";
import jwt from "jsonwebtoken";
const {sign}=jwt;

//user authentication(login)
//submit credentials & get tokens
export async function userLogin(req,res){
    //get user cred object  from client
       const {email,password}=req.body
       //verify email
       let user=await UserModel.findOne({email:email})
       //if email not existed
       if(user===null){
          return res.status(400).json({message:"Invalid email"})
       }
       //compare passwords
       let result=await compare(password,user.password)
       if(result===false){
          return res.status(400).json({message:"Invalid password"})
       }
       //if passwords are matched
       //create token(jsonwebtoken-jwt-jaat)
       const signedToken=sign({email:user.email},"abcdef",{expiresIn:1500})
       //send token to respnse
      //store token as httpOnly cookie
      res.cookie("token",signedToken,{
       httpOnly:true,
       sameSite:"lax",
       secure:false
      })
      res.status(200).json({message:"login success",payload:user})
    }
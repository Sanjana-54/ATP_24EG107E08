//create min-express app(seperate route)
import exp from 'express'
import {UserModel} from "../models/userModel.js"
import { hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyToken.js'
import { connect} from 'mongoose';
import {userLogin} from "../Auth/auth.js"
const {sign}=jwt
export const userApp=exp.Router()


//DEFINE USER REST API

//user login
userApp.post('/auth',userLogin)  
 
//create new user
 userApp.post("/users",async(req,res)=>{
       //get new user obj from req
       const newUser=req.body;
       //hash the pasword
       const hashedPassword=await hash(newUser.password,10)
       //replace plain password with hashed password
       newUser.password=hashedPassword
       //create new user document
       const newUserDocument=new UserModel(newUser)
       //save
       const result=await newUserDocument.save();
       console.log("result:",result)
       //send response
       res.status(201).json({message:"User created"}); 
       //no need to write try catch it has inbulit

 })
 //Read all users
 userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let usersList=await UserModel.find();
    //send res
    res.status(200).json({message:"users",payload:usersList})
 });

 //read a user by object id
 userApp.get("/user",verifyToken,async(req,res)=>{
   //read user email from req
   const emailOfUser=req.user?.email

    //find user by id
    const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")
                                 //findById(uid) - based on obj id 
   //if user not found
   if(!userObj){
      return res.status(404).json({message:"user not found"})
   }
    //send res
    res.status(200).json({message:"user",payload:userObj})
 })


//update a user by id
 userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;
   //find user by id & update
   const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true});
   res.status(200).json({message:"user modified",payload:updatedUser})
   //compare passwords
   
});

//delete user by id
userApp.delete('/users/:id',verifyToken,async(req,res)=>{
    //get id of user from req params
    let uid=(req.params.id)
    //find & delete user by id
   let  deletedUser=await UserModel.findByIdAndDelete(uid);
   if(!deletedUser){
    return res.status(404).json({message:"User not found"})
   }
   //send res
     res.status(200).json({message:"user deleted",payload:deletedUser})
})

//add product to cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
   //get product id from url param
   let productId=req.params.pid
   //get current user details
   const emailOfUser=req.user?.email
   //add product to cart
   let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
   //if user invalid
   if(!result){
      return res.status(404).json({message:"user not found"})
  }
  res.status(200).json({message:"product added to cart"})
})


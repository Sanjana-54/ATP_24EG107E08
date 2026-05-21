import exp from 'express'
import {articleModel} from "../models/articleModel.js"
import { verifyToken } from '../middlewares/verifyToken.js'
export const userApp=exp.Router()

//read articles of all authors
userApp.get("/articles",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
//read articles
const articlesList=await articleModel.find({isArticleActive:true});
//send res
res.status(200).json({message:"Articles",payload:articlesList})
})


//add comment to an article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
//get body from client req
const {articleId,comment}=req.body;
//check article
const articleDocument=await articleModel.findOne({_id:articleId,isArticleActive:true}).populate("comments.user");

//if article not found
if(!articleDocument){
   return res.status(404).json({message:"Article not found"})
}
//get user id
const userId=req.user?.id;

if (!articleDocument.comments) {
  articleDocument.comments = [];
}
//add
articleDocument.comments.push({
   user:userId,
   comment:comment
})
//save
await articleDocument.save()
//send res
res.status(200).json({message:"comment added succesfully",payload:articleId})
})
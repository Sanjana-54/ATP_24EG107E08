import exp from 'express';
import {userModel} from '../models/userModel.js';
import {articleModel} from '../models/articleModel.js';
import { verifyToken } from '../middlewares/verifyToken.js';
export const authorApp=exp.Router();

//write article
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{
//get artcle obj from client
const articleObj=req.body;
//get user from decodedToken
let user=req.user;
//check author
let author=await userModel.findById(articleObj.author);
//cross check emails
if(!author){
     return res.status(404).json({message:"Invalid author"})
}
if(author.email!==user.email){
    return res.status(403).json({message:"You are not authorized"})
}

//create article document
const newArticleObj=new articleModel(articleObj);
//save
await newArticleObj.save();
//send res
res.status(201).json({message:"article published successfully"})
});

//read an article 
authorApp.get("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded token
    const authorIdOfToken=req.user?.id;
    //get article by author id
    const articleList=await articleModel.find({author:authorIdOfToken}) 
    //send res
     return res.status(200).json({message:"articles",payload:articleList})
});

//edit article
authorApp.put("/articles",verifyToken("AUTHOR"),async(req,res)=>{
//get author id from decoded token
    const authorIdOfToken=req.user?.id;
//get modified article from client
  const {articleId,title,category,content}=req.body;
  const modifiedArticle = await articleModel.findOneAndUpdate(
  { _id: articleId, author: authorIdOfToken },
  { $set: { title, category, content } },
  { new: true }
);
//if either article id or author not correct
if(!modifiedArticle){
    return res.status(403).json({message:"Not authorized to edit article"});
}
//send res
res.status(200).json({message:"Article modified",payload:modifiedArticle});
});

//delete 
authorApp.patch("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded token
    const authorIdOfToken=req.user?.id;
    //get modified article from client
  const {articleId, isArticleActive}=req.body;
  //get article by id
  const articleOfDB=await articleModel.findOne({_id:articleId,author:authorIdOfToken});
//check status
if(isArticleActive===articleOfDB.isArticleActive){
    return res.status(200).json({message:"Article already in the same state"});
}
articleOfDB.isArticleActive=isArticleActive;
await articleOfDB.save();
//send res
res.status(200).json({message:"Article modified",payload:articleOfDB})
})

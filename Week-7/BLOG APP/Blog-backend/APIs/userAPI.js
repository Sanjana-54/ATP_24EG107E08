import exp from 'express'
import {articleModel} from "../models/articleModel.js"
import { verifyToken } from '../middlewares/verifyToken.js'
export const userApp=exp.Router()

//read articles of all authors
userApp.get("/articles",async(req,res)=>{
//read articles
const articlesList = await articleModel
  .find({ isArticleActive: true })
  .populate("author", "firstname email");
//send response
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

// like article
userApp.put(
  "/like/:articleId",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {

    const { articleId } = req.params;

    const userId = req.user.id;

    // find article
    const article = await articleModel.findById(articleId);

    if (!article) {
      return res.status(404).json({
        message: "Article not found"
      })
    }

    // initialize likes array
    if (!article.likes) {
      article.likes = [];
    }

    // already liked
    const alreadyLiked = article.likes.includes(userId);

    if (alreadyLiked) {

      return res.status(200).json({
        message: "Already liked",
        payload: article
      })
    }

    // add userId to likes array
    article.likes.push(userId);

    await article.save();

    res.status(200).json({
      message: "Article liked successfully",
      payload: article
    })
  }
)
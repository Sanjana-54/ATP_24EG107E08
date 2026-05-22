import { Schema ,model,Types} from "mongoose";


const commentSchema=new Schema({
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"User ID is required"],
    },
    comment:{
        type:String,
        required:[true,"Enter comment"],
    },
});

const articleSchema=new Schema({
      author:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"Author ID is requird"],
      },
    title:{
        type:String,
        required:[true,"Title is required"],
    },
    category:{
        type:String,
        required:[true,"Category is required"],
    },
    content:{
        type:String,
        required:[true,"Content is required"],
    },
    likes:{
   type:Number,
   default:0
},
    comments:[commentSchema],
    isArticleActive:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
}
)
export const articleModel=model("article",articleSchema)
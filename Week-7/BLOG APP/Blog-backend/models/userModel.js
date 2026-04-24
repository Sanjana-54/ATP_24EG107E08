import {Schema,model} from 'mongoose'
const userSchema=new Schema({
    firstname:{
        type:String,
        required:[true,"First name is required"],
    },
     lastname:{
            type:String,
        },
    email:{
        type:String,
        required:[true,"invalid email"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        required:[true,"Invalid role"]
    },
    profileImageUrl:{
        type:String
    },
    isUserActive:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
});

export const userModel=model("user",userSchema)
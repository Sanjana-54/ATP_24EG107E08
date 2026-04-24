import { Schema,model,Types } from "mongoose";
//cartschema is object 
//create cart schema(product,count)
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of product model
    },
    count:{
        type:Number,
        default:1
    }
})


//create user schema(username,password,email,age)
const userSchema=new Schema({
    //Structure of user schema
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of useranme is 4 chars"],
        maxLength:[6,"username size exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    email:{
       type:String,
       required:[true,"Email Required"],
       unique:[true,"Email already existed"]   //unique is option not a validator// search is speed and avoids duplication
    },
    age:{
        type:Number,  
    },
    cart:[cartSchema],
},{
    versionKey:false,
    timestamps:true,
})

//generate usermodel
export const UserModel=model("user",userSchema)

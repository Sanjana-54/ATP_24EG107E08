import { Schema,model } from "mongoose";
//create product schema(username,password,email,age)
const productSchema=new Schema({
    //Structure of product schema
    productId:{
        type:Number,
        required:[true,"ProductId is required"],
    },
    name:{
        type:String,
        required:[true,"Product name is required"],
    },
    price:{
        type:Number,
        required:[true,"Product price is required"],
        min:[10000 ,"min price 10000 is required"],
        max:[50000,"max price 50000 is required"],
    },
    brand:{
        type:String,
        required:[true,"Product brand is required"],
    }
},{versionKey:false,
    timestamps:true,
})

//generate usermodel
export const ProductModel=model("product",productSchema)

import { Schema,model } from "mongoose";

//structure of model
const empSchema=new Schema(
    {
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    mobile:{
        type:Number,
        required:[true,"Mobile number is required"],
    },
    designation:{
        type:String,
        required:[true,"Designation is required"],
    },
    companyName:{
        type:String,
        required:[true,"Company Name is required"],
    },
},{
    strict:"throw",
    versionKey:false,
    timestamps:true,
})

export const EmpModel=model("emp",empSchema);
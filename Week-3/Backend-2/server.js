import exp from 'express'
import {connect} from 'mongoose';
import {userApp} from "./APIs/userAPIs.js";
import { productApp } from './APIs/productAPIs.js';
import cookieParser from 'cookie-parser';
const app=exp();
app.use(exp.json());
//add cookie parser middleware
app.use(cookieParser())
//forward req 
app.use("/user-api",userApp)
//connect to DB server
//connect("").then().catch()
app.use("/product-api",productApp)
//then and catch fetch
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/anuragdb");
        console.log("DB connection success")
        //start server
app.listen(4000,()=>console.log("server on port 4000...."))
    }catch(err){
        console.log("error in DB connection:",err)
    }
} 
connectDB();

app.use((err, req, res, next) => {
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
//send server side error
  res.status(500).json({ message: "error occurred", error: err.message });
});
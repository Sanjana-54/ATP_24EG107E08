import exp from "express"
import {config} from 'dotenv';
import { connect } from "mongoose"
import {empApp} from "./API/empAPI.js"

import cors from 'cors';

config();

const app=exp();

//add cors middleware
app.use(
  cors(),
);


//body parser middleware
app.use(exp.json())

//emp spi middleware
app.use("/emp-api",empApp)

//DB connection
const connectDB=async()=> {
   try{
        await connect(process.env.DB_URL);
        console.log("DB connection success")
        const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on ${port}`))
    }catch(err){
        console.log("error in DB connection:",err.message);
    }
} ;
connectDB();

//Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Error cause:", err.cause);
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value} already exists`,
    });
  }

//send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
})
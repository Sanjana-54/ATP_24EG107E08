//create min-express app(seperate route)
import exp from 'express'
import { ProductModel } from "../models/productModel.js"
import { verifyToken } from  '../middleware/verifyToken.js'

export const productApp=exp.Router()

// DEFINE PRODUCT REST API
    //Create product
productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body;
    //create new product document
    const newProductDocument=new ProductModel(newProduct)
    //save
    const result1=await newProductDocument.save();
    console.log("result:",result1)
    //send response
    res.status(201).json({message:"Product created"});
})

    //Read all products
productApp.get("/products",verifyToken,async(req,res)=>{
    //read all products from db
    const productsList=await ProductModel.find();
    //send res
    res.status(200).json({message:"products",payload:productsList})
    });

    //Read a product by productId
productApp.get("/products/:id",verifyToken,async(req,res)=>{
    //read object id from req params
    const productid=req.params.id
    //find product by id
    const productObj=await ProductModel.findById(productid)
     //send res
    res.status(200).json({message:"products by id",payload:productObj})
 })

    //Update a product by productId
productApp.put("/products/:id",verifyToken,async(req,res)=>{
    // Get updated product data from request body
    const modifiedProduct=req.body
    //  modified data to console f
    console.log(modifiedProduct)
    const pid=(req.params.id)
    const updatedProduct=await ProductModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{new:true,runValidators:true})
    // If product not found
    if(!updatedProduct){
        return res.status(404).json({message:"Product Not found"})
    }
    // Send response
    res.status(200).json({message:"Product Updated",payload:updatedProduct})
})



     //Delete a product by productId
productApp.delete('/products/:id',verifyToken,async(req,res)=>{
    //get id of product from req params
    let productid=(req.params.id)
    //find & delete product by productid
   let  deletedProduct=await ProductModel.findByIdAndDelete(productid);
   if(!deletedProduct){
    return res.status(404).json({message:"Product not found"})
   }
   //send res
     res.status(200).json({message:"Product deleted",payload:deletedProduct})
})


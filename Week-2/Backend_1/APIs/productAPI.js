//create mini-express app(seperate route)
import exp from 'express'
export const productApp=exp.Router()
//PRODUCT
let products=[]
     
//Create product API with below operations

   /*Create a new Product(productid,name,brand,price)*/

      productApp.post('/products',(req,res)=>{
    //get product from client
     const newProduct=req.body
     //push product into products
     products.push(newProduct)
       //send response
     res.json({msg:"Product Created"})
   })

    /*Read all products*/

      //Route to handle GET req of Client(http://localhost:3000/products)
   productApp.get('/products',(req,res)=>{
    //send response to client
    res.json({msg:"all products",payload:products})
   })

    /*read all products by brand*/

    productApp.get('/products/brand/:brand',(req,res)=>{
    //get proudct if url params
    let brand=(req.params.brand) //params for URL parameters
    //find product
    let prod=products.filter(prodObj=>prodObj.brand==brand)
     //if product not found
     if(prod===undefined){
        return res.json({msg:"Product not found"})
      }
     //send response
    res.json({msg:"product by brand",payload:prod})
 })

    /*update a product*/

     productApp.put('/products',(req,res)=>{
    //get modified product from client {}
    let modifiedProduct=req.body;
    modifiedProduct.id=Number(modifiedProduct.id)
    //get index of existing product in products array
    let index=products.findIndex(prodObj=>prodObj.id===modifiedProduct.id)
    //if product not found
    if(index==-1){
        return res.json({msg:"Product not found"})
    }
     //update product with index
    products.splice(index,1,modifiedProduct) 
    res.json({msg:"Product updated"})
})

    /*delete a product by id*/

    productApp.delete('/products/:id',(req,res)=>{
      //get brand of product  from url parameter
       let idOfUrl=Number(req.params.id)
      //find index of product
      let index=products.findIndex(prodObj=>prodObj.id===idOfUrl)
      //if product not found
      if(index==-1){
        return res.json({msg:"Product not found"})
    }
      //delete product by index
      products.splice(index,1)
      //send response
     res.json({msg:"Product removed"})
   }) 
   




//Create HTTP server
import exp from 'express'
const app=exp() //creating server application
import {userApp} from "./APIs/userAPI.js"
import {productApp} from "./APIs/productAPI.js"

//use body parser midddleware(in-built)
app.use(exp.json())//takes req before reaching route //can't handle post and put
//json returns a fn
  //get and delete don't have body & post and put have body

  //create custom middleware-fn
function middleware1(req,res,next){
  //send res from middleware
  //res.json({msg:"this res from middleware1"})
  //forward req to nxt
  console.log("m1 executed")
  next()
}
function middleware2(req,res,next){
  //send res from middleware
  //res.json({msg:"this res from middleware1"})
  //forward req to nxt
  console.log("m2 executed")
  next()
}
//use middleware
app.use(middleware1)
app.use(middleware2)

  //forward req to userAPI if path starts with /user-api
  app.use('/user-api',userApp)
   //forward req to userAPI if path starts with /user-api
  app.use('/product-api',productApp)
 //set a port number
 const port=3000
 //assign port number to HTTP server
 app.listen(port,()=>console.log(`server listening port ${port}...`))

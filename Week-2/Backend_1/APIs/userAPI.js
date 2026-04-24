//create mini-express app(seperate route)
import exp from 'express'
export const userApp=exp.Router()


let users=[];
 //Create API(REST API)-representational state transfer

   //Route to handle GET req of Client(http://localhost:3000/users)
   userApp.get('/users',(req,res)=>{
    //send response to client
    res.json({msg:"all users",payload:users})
   })

    //route to read user by id
 userApp.get('/users/:id',(req,res)=>{
    //get user if url params
    let idOfUrl=Number(req.params.id) //params for URL parameters
    //find user
    let user=users.find(userObj=>userObj.id==idOfUrl)
     //if user not found
     if(user===undefined){
        return res.json({msg:"User not found"})
      }
     //send response
    res.json({msg:"a user",payload:user})
 })

   //Route to handle POST req of Client
   userApp.post('/users',(req,res)=>{
    //get user from client
     const newUser=req.body
     //push user into users
     users.push(newUser)
       //send res
     res.json({msg:"User Created"})
   })


   //Route to handle PUT req of Client
   userApp.put('/users',(req,res)=>{
    //get modified user from client {}
    let modifiedUser=req.body;
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found
    if(index==-1){
        return res.json({msg:"User not found"})
    }
//updateuser with index
users.splice(index,1,modifiedUser) 
    res.json({msg:"user updated"})

   })


   //Route to handle DELETE req of Client
   userApp.delete('/users/:id',(req,res)=>{
      //get id of user from url parameter
       let idOfUrl=Number(req.params.id)
      //find index of user
      let index=users.findIndex(userObj=>userObj.id===idOfUrl)
      //if user not found
      if(index==-1){
        return res.json({msg:"User not found"})
    }
      //delete user by index
      users.splice(index,1)
      //send res
     res.json({msg:"user removed"})
   })


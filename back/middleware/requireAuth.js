const jwt= require('jsonwebtoken')
const asyncHandler= require('express-async-handler')
const User= require('../models/userModel')

const requireAuth =async(req,res,next)=>{
     //verify USER IS AUTHENTICATED by checking headers for token
     const {authorization}= req.headers
   
     if(!authorization){
        return res.status(401).json({error:'AUTHORIZATION TOKEN REQUIRED'})
     }
    
     const token=authorization.split(' ')[1]
    
     try{ 
        //get id from token and check id to return us   
        const {id}=jwt.verify(token,process.env.JWT_SECRET)
        //switching these _id=id IS FRICKING KEY!!!
        const _id=id
       
        req.user= await User.findOne({_id}).select('_id') 
        next()
      
        
     }

     catch(error){
        res.status(401).json({error:'Request is not authorized by me'})
     }
    }

    module.exports= requireAuth
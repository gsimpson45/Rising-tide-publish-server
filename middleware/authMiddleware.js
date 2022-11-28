const jwt = require("jsonwebtoken");


const User= require("../models/user.model");

async function isValidToken(req,res,nex){
    
    let token=req;

    
       if(token==null){
        return null;
       }
        
       try{
        if(jwt.verify(token, process.env.JWT_SECRET)==null)
            return null;
        const decoded =  jwt.decode(token, process.env.JWT_SECRET);
       
        const user= await User.find({username: decoded.user.username, password: decoded.user.password});
        if(user!=null){
            return decoded.user.username;
        }else
             return null;
    }catch(error){
        
        return null;
    }

        
     
    

    
}
module.exports= {isValidToken}
import { Request, Response, NextFunction } from 'express';
import { ServiceHandler } from "../service_response";


export const generateToken = (username:string,password:string)=>{

    if(!username  ||!password){
        throw ServiceHandler.FAIL("body is required", 400)
    }

    let jwt = require('jsonwebtoken');
    try {
       const payload = {
      username, 
      password
    };

    return jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN})
        
    } catch (error) {
        throw error;
        
    }

 

} 




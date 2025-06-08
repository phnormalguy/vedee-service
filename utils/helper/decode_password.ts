import * as bcrypt from 'bcrypt';


export const  bcrptPassword = async (bodyPassword:string,password : string)=>{
    const correct_password = await bcrypt.compare(bodyPassword, password);
    
    console.log("correct password" ,correct_password)
    if(correct_password){
        return true
    }
    return false

}
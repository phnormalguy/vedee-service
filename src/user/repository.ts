import { PrismaClient, mUser } from "../../prisma/generated/prisma";
import db from "../../db_instance";
import { CUserBody, CUserBodySchema } from "./model";
import { STATUS_CODES } from "http";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "../../utils/hash";

export const userRepository = {


    create: async (data: CUserBody) => {

        if (data) {
            const existUser = await db.mUser.findUnique({
                where: { username: data.username }
            })
            if(existUser){
                return {success:false,message:'THIS USERNAME HAVE HEEN USED'}
            }
            // Check password length
            if (!data.password || data.password.length < 6) {
                return { success: false, message: 'Password must be at least 6 characters long' };
            }

            // Modern password pattern: at least 1 uppercase, 1 lowercase, 1 digit, 1 special char
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
            if (!passwordRegex.test(data.password)) {
                return { success: false, message: 'Password must contain uppercase, lowercase, digit, and special character' };
            }
            const hashedPassword: string =  await hashPassword(data.password);
            
            const user = await db.mUser.create({
                data: {
                    ...data,
                    password: hashedPassword,
                    follwing_id: [],
                    folower_id: []
                }
            })
 
            return {data:user}

        }
        return {message:"body is required",success : false}

    },
    getOne:async (id:string)=>{
        const user = await db.mUser.findUnique({
            where:{
                id : id
            }
            
        })
        if(!user){
            return {message:"not found this user",success:false}
            }
        return  {data:user}
    }

}
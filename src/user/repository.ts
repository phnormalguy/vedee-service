import { PrismaClient, mUser } from "../../prisma/generated/prisma";
import db from "../../db_instance";
import { CUserBody, CUserBodySchema, UUserBody, User, loginBody } from "./model";
import { STATUS_CODES } from "http";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "../../utils/helper/hash";
import { ServiceHandler, ServiceResponse } from '../../utils/service_response'
import { PaginatedData } from "../../utils/model/pagetinate_data";
import { bcrptPassword } from "../../utils/helper/decode_password";
import { generateToken } from "../../utils/helper/jwt-generate";

export class UserRepository  {
    constructor(private db: PrismaClient) {}


    async create (data: CUserBody): Promise<ServiceHandler>  {

        if (data) {
            const existUser = await db.mUser.findUnique({
                where: { username: data.username }
            })
            if (existUser) {
                return { success: false, message: 'THIS USERNAME HAVE HEEN USED' }
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
            const hashedPassword: string = await hashPassword(data.password);

            const user = await db.mUser.create({
                data: {
                    ...data,
                    password: hashedPassword,
                    follwing_id: [],
                    folower_id: []
                }
            })

            return { data: user }

        }
        return { message: "body is required", success: false }

    };
   async getOne (id: string): Promise<ServiceHandler>  {
        const user = await db.mUser.findUnique({
            where: {
                id: id
            }

        })
        if (!user) {
            return { message: "not found this user", success: false }
        }
        return { data: user }
    };

    async update  (data: UUserBody): Promise<ServiceHandler>  {
        if (!data) {
            throw ServiceHandler.FAIL("body is required", 400)
        }
        const user = await db.mUser.findUnique({
            where: {
                id: data.id,
            }
        })
        if (!user) {
            throw ServiceHandler.FAIL("not found user", 400)
        }
        const updateUser = db.mUser.update({
            where: {
                id: data.id
            },
            data: {
                email: data.email,
                password: data.password,
                display_name: data.display_name

            }
        })
        return { data: updateUser }
    };
 
   async getDataTable  (page?: number, pageSize?: number): Promise<ServiceHandler> {
        console.log('come here repo')

        const currentPage = Math.max(1, page || 1);
        const itemsPerPage = Math.max(1, pageSize || 10);

        const skip = (currentPage - 1) * itemsPerPage;
        const take = itemsPerPage;

        const users = await db.mUser.findMany({ // Use await as db.mUser.findMany is async
            skip: skip,
            take: take,
            orderBy: {
                createdAt: 'desc',
            },

        });

        const totalCount = await db.mUser.count();
        const totalPages = await Math.ceil(totalCount / itemsPerPage)
        const pagetinatedData: PaginatedData = {
            data: users,
            totalCount: totalCount,
            totalPages: totalPages,
            currentPage: currentPage,
            pageSize: itemsPerPage
        }

        return {data:pagetinatedData}


    };

    async login (data : loginBody):Promise<ServiceHandler> {

        if(!data) { 
           return { message: "body is required", success: false }
        }
        const user = await db.mUser.findUnique({
            where:{
                username:data.username
            }
        })

        if(!user){
           return { message: "Not Found this username", success: false }

        }
        
        const correct_password = await bcrptPassword(data.password,user.password)

        if(correct_password){
            const token = generateToken(user.username,user.password)
            return {data:token ,message:"Login successfully",success :true}
        }
        return {message:"Login failed please try again.",success:false}




    }



}
 
export const userRepository = new UserRepository(db)
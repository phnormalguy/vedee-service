import { DataTableQuery } from "../../utils/model/data_table_query";
import { ServiceHandler } from "../../utils/service_response";
import type { CUserBody, loginBody, User, UUserBody } from "./model";
import { userRepository } from "./repository";

class UserService {
    constructor(private userRepository: any) {}

    async getOne(id: string) {
        try {
            const user = await this.userRepository.getOne(id);
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
        } catch (error) { 
            return ServiceHandler.FAIL
        }
    }

    async createUser(body: CUserBody) {
        try {
            const user = await this.userRepository.create(body);
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
        } catch (error) {
            return ServiceHandler.FAIL

        } 
    }

    async update(body:UUserBody){
        try {
            const user = await this.userRepository.update(body);
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
        } catch (error) {
            return ServiceHandler.FAIL
            
        }
    }
    async getDataTable(query:DataTableQuery){
        try {
            const user = await this.userRepository.getDataTable(query);
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
            
        } catch (error) {
            return ServiceHandler.FAIL
            
        }
    }

    async login (data:loginBody){
        try{
            const user = await this.userRepository.login(data);
            console.log('user is',user)
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
        }
        catch(error){
            return ServiceHandler.FAIL

        }
    }


  
}


export const userService = new UserService(userRepository)
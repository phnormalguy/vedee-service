import { ServiceHandler } from "../../utils/service_response";
import type { User } from "./model";
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

    async createUser(body: User) {
        try {
            const user = await this.userRepository.create(body);
            return ServiceHandler.SUCCESS(user.success,user.data,user.message)
        } catch (error) {
            return ServiceHandler.FAIL

        } 
    }

  
}


export const userService = new UserService(userRepository)
import { userService } from "./service";

class UserController {
    constructor(private userService: any) {}

    async createUser(req: any, res: any) { 
        const result = await this.userService.createUser(req.body);
        res.status(result.status_code || 200).json(result);
    }
 
    async getOne(req:any,res:any){
        const {id} = req.params
        const result = await this.userService.getOne(id)
        console.log(`result is : ${result}`)
      return  res.status(result.status_code || 200).json(result);
 
    }
}

export const userController = new UserController(userService); 
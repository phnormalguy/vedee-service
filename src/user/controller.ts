import { userService } from "./service";

class UserController {
    constructor(private userService: any) {}

    async createUser(req: any, res: any) {
        const result = await this.userService.createUser(req.body);
        res.status(result.status_code || 200).json(result);
    }
}

export const userController = new UserController(userService); 
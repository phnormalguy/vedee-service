import { postService } from "./service";

class PostController {
    constructor(private postService :any ) {}
    async create(req:any,res:any){
        const result = await this.postService.create(req.body);
        res.status(result.status_code||200).json(result)
    }

}

export const postController = new PostController(postService)
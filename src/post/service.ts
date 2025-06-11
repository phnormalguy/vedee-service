import { ServiceHandler } from "../../utils/service_response";
import { CPostBody } from "./model";
import { postRepository } from "./repository";

class PostService {
    constructor(private postRepository: any) { }
    async create(body: CPostBody) {
        try {
            const post = await this.postRepository.create(body)
            return ServiceHandler.SUCCESS(post.success, post.data, post.message)
        } catch (error) {
            if (
                error instanceof Error
            )
                return ServiceHandler.FAIL(error.message)
            return ServiceHandler.FAIL
        }
    }


}

export const postService = new PostService(postRepository)
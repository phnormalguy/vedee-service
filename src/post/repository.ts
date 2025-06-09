import { PrismaClient } from "@prisma/client";
import { CreatePost } from "./model";
import { ServiceHandler } from "../../utils/service_response";

class PostRepository {
    constructor(private db:PrismaClient){}

     async create(data: CreatePost): Promise<ServiceHandler> { 
            if (!data.url) {
                return ServiceHandler.FAIL("Video URL is required to create a post.", 400); 
            }

            const post = await this.db.mPost.create({ 
                data: {
                    url: data.url,
                    title: data.title || null,
                    post_owner: data.post_owner,
                    hashtage: data.hashtage ? JSON.stringify(data.hashtage) : null, 
                    like_num: 0, 
                  
                }
            });

            return ServiceHandler.SUCCESS(true, post, "Post created successfully.", 201); // 201 Created

      
    }
}
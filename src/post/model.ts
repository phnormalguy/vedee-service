import {z} from 'zod'


export const CreatePostSchma = z.object({
    title : z.string(),
    post_owner:z.string(),
    url:z.string(),
    hashtage:z.array(z.string())
    
})

export type CreatePost = z.infer<typeof CreatePostSchma>
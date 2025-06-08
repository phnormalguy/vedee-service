import { z } from 'zod';


//base model
export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    display_name :z.string()
});
export type User = z.infer<typeof UserSchema>;


//create 
export const CUserBodySchema = UserSchema.omit({ id: true });
export type CUserBody = z.infer<typeof CUserBodySchema>;


//update
export const UUserBodySchema = z.object({
    id: z.string(),
    email: z.string().email().optional(),
    password : z.string().optional(),
    display_name: z.string().optional()
});
export type UUserBody = z.infer<typeof UUserBodySchema>;


export const loginSchema = z.object({
    username : z.string(),
    password: z.string(),
})

export type loginBody = z.infer<typeof loginSchema>


// export const GetUserParamsSchema = z.object({
//     id: z.string(),
    
// });
// export type GetUserParams = z.infer<typeof GetUserParamsSchema>;
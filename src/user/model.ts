import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    display_name :z.string()
    
    // add other fields as needed
    // firstName: z.string().optional(),
    // lastName: z.string().optional(),
    // isActive: z.boolean().optional(),
});

export type User = z.infer<typeof UserSchema>;
// Body for creating a user: all fields except id
export const CUserBodySchema = UserSchema.omit({ id: true });
export type CUserBody = z.infer<typeof CUserBodySchema>;

// Body for updating a user: only updatable fields (e.g. username, email)
export const UUserBodySchema = z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password : z.string().optional()
});
export type UUserBody = z.infer<typeof UUserBodySchema>;

// Params for getting a user (e.g. by id)
export const GetUserParamsSchema = z.object({
    id: z.string(),
    
});
export type GetUserParams = z.infer<typeof GetUserParamsSchema>;
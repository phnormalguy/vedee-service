import {z } from 'zod'

export const DataTableQuerySchema = z.object({
    page: z.number().default(1).optional(),
    pageSize: z.number().default(10).optional()
    
})

export type DataTableQuery = z.infer<typeof DataTableQuerySchema>
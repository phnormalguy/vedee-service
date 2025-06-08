
import {z} from 'zod'

export const PaginatedDataSchema = z.object({
  data: z.any(),
  totalCount: z.number(),
  currentPage: z.number(),
  pageSize: z.number(),
  totalPages: z.number()

})
export type PaginatedData = z.infer<typeof PaginatedDataSchema>
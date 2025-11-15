import {z} from "zod";

export const SearchInputSchema = z.object({
  input: z.string().min(1, 'Content is required')
})

export type SearchInputValues = z.infer<typeof SearchInputSchema>;
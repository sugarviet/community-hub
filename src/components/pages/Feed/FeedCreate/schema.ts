import {z} from 'zod';

export const FeedCreateSchema = z.object({
  content: z.string().min(1, 'Content is required').max(280, 'Content must be at most 280 characters'),
});

export type FeedCreateValues = z.infer<typeof FeedCreateSchema>;
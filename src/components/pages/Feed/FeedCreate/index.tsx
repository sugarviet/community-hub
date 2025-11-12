'use client';
import React from 'react'
import { Avatar } from '@/components/_share'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { FeedCreateValues, FeedCreateSchema } from './schema';

const FeedCreate = () => {
  const form = useForm<FeedCreateValues>({
    resolver: zodResolver(FeedCreateSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = (formData: FeedCreateValues) => {
    console.log('✅ Submit data:', formData);
  };

  return (
    <div className="border-b-2 flex flex-col gap-2 pb-2">
      <div className="flex gap-2">
        <Avatar />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What's happening..."
                      className="
                        border-none
                        outline-none
                        focus-visible:ring-0
                        focus-visible:ring-offset-0
                        shadow-none
                        resize-none
                        bg-transparent
                        text-base
                        placeholder:text-muted-foreground
                      "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />
            <div className="flex justify-end">
              <Button type="submit">Post</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FeedCreate;

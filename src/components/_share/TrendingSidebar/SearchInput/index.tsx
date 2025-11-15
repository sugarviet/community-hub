'use client';

import React from 'react'
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import Icon from '../../Icon';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

import { SearchInputValues, SearchInputSchema } from './schema';

const SearchInput = () => {
  const form = useForm<SearchInputValues>({
    resolver: zodResolver(SearchInputSchema),
    defaultValues: {
      input: ''
    }
  })

  const onSubmit = (formData: SearchInputValues) => {
    console.log('search', formData)
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-full">
                    <Icon
                      name="search"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4"
                    />

                    <Input
                      placeholder="Search Community"
                      className="
                        pl-10
                        rounded-full
                        bg-muted
                        border-none
                        focus-visible:ring-1
                        focus-visible:ring-primary
                      "
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* hidden submit button để Enter hoạt động */}
          <button type="submit" className="hidden"></button>
        </form>
      </Form>
    </div>
  );
};

export default SearchInput;

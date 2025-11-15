import { Card, FeedCreate, FeedList } from '@/components/pages/Feed';
import React from 'react'

const Feed = () => {
  return (
    <div className='flex flex-col pt-2'>
      <FeedCreate />

      <section id="feeds">
        <FeedList />
      </section>
    </div>
  )
}

export default Feed;
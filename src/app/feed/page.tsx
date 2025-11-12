import { Card, FeedCreate } from '@/components/pages/Feed';
import React from 'react'

const Feed = () => {
  return (
    <div className='px-4 flex flex-col gap-2 pt-2'>
      <FeedCreate />

      <section id="feeds">

        <Card />
      {/* <div className='bg-red-400 h-[20rem]'>
        feed 1
      </div>
      <div className='bg-blue-500 h-[20rem]'>
        feed 2
      </div>
      <div className='bg-yellow-400 h-[20rem]'>
        feed 3
      </div> */}
      </section>
    </div>
  )
}

export default Feed;
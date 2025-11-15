import React from 'react'
import Icon from '../../Icon'

const Trending = () => {
  return (
    <div className='border w-full p-2 mt-4'>
      <h3 className='font-bold text-2xl'>What&apos;s happening</h3>

      <div id='list-trending' className='mt-6'>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />

      </div>
    </div>
  )
}

const TrendingCard = () => {
  return (
    <div className='flex p-2 hover:bg-secondary/5 transition-colors cursor-pointer items-center'>
    <div className='flex-1 flex flex-col gap-2'>
        <span id='category-type' className='text-muted-foreground'>Trending</span>
        <h4 id='category' className='font-semibold'>SHIB</h4>
        <span id='number-of-post' className='text-muted-foreground'>17.4K posts</span>
    </div>
    <div className='w-10 h-h-10'>
      <Icon name='ellipsis'/>
    </div>
  </div>
  )
}

export default Trending
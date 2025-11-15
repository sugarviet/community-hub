import React from 'react'
import Trending from './Trending'
import SearchInput from './SearchInput'

const TrendingSidebar = () => {
  return (
    <div id="trending-sidebar" className='flex flex-col items-center px-4 pt-4'>
      <SearchInput />
      <Trending />
    </div>
  )
}

export default TrendingSidebar
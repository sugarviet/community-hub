import React from 'react'
import Avatar from '../Avatar';
import Icon from '../Icon';

const Profile = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer hover:bg-secondary/10 p-4 rounded-2xl'>
      <Avatar />
      <div className='flex-1'>
        <span className='font-semibold'>Viet Dang</span>
      </div>
      <Icon name='ellipsis' size={18}/>
    </div>
  )
}

export default Profile
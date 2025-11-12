import React from 'react'

type AvatarProps = {
  url: string | undefined;
}

const Avatar:React.FC<AvatarProps> = ({url}) => {
  return (
    <div className='w-8 h-8 rounded-full bg-white'>
      
    </div>
  )
}

export default Avatar
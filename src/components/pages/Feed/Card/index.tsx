import React from 'react';
import { Avatar, Icon } from '@/components/_share'

const post = {
  liked: true,
}

type CardProps = {
  avatarUrl?: string;
  userName?: string;
  userHandle?: string;
  content?: string;
  timePosted?: string | number;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    userName,
    avatarUrl,
    userHandle,
    content,
    timePosted
  } = props;
  return (
    <div className='p-6 flex gap-2 border-b cursor-pointer hover:bg-secondary/10 transition-colors'>
      <Avatar url={avatarUrl} />
      <div id='content'>
        <UserInfo />
        <Content />
        <Actions />
      </div>

    </div>
  )
}


const UserInfo: React.FC<Pick<CardProps, 'userName' | 'timePosted' | 'userHandle'>> = () => {
  return (
    <div className='flex items-baseline gap-2'>
      <p id='username' className='font-bold hover:underline'>Sarah Chen</p>
      <span className='text-muted-foreground'>@sarahchen</span>
      <span className='text-muted-foreground'>·</span>
      <span className='text-muted-foreground'>2h</span>
    </div>
  )
}

const Content = () => {
  return (
    <p>
      Just finished a 5K run in the park! Feeling great and energized. #fitness #running
    </p>
  )
}

const Actions = () => {
  return (
    <div className='flex items-center gap-6 mt-2'>
      <button className="flex items-center gap-2 group hover:text-red-500 transition-colors">
        <div className="p-2 group-hover:bg-red-500/10 rounded-full transition-colors">
          <Icon
            name='heart'
            className="w-4 h-4"
          />
        </div>
        <span>24</span>
      </button>

      <button className="group hover:text-blue-500 transition-colors">
        <div className="p-2 group-hover:bg-blue-500/10 rounded-full transition-colors">
          <Icon name='repeat' className="w-4 h-4" />
        </div>
      </button>
    </div>
  )
}

export default Card
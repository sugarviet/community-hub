import React from 'react'
import { Logo } from '@/components/_share';
import { Button } from '@/components/ui/button';

const SimpleNavbar = () => {
  return (
    <div className='hidden md:flex w-full justify-between items-center p-4 border-b'>
     <div>
        <Logo />
      </div>

      <Button variant={'secondary'}>
        Get Started
        </Button>
    </div>
  )
}

export default SimpleNavbar
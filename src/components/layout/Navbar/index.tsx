import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon, Logo } from '@/components/_share'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  )
}

const DesktopNavbar = () => {
  return (
    <div className='hidden md:flex w-full justify-between items-center p-4 border-b'>
     <div>
        <Logo />
      </div>
      <div>
        <ul className='flex gap-6'>
          <li>Features</li>
          <li>Benefits</li>
          <li>Community</li>
        </ul>
      </div>

      <div className='flex items-center gap-5'>
        <Icon name='heart'/>
      <Button>
        Get Started
        </Button>
      </div>
    </div>
  )
}

const MobileNavbar = () => {
  return (
    <div className='flex md:hidden w-full justify-between items-center p-4'>
      <div>
        <Logo />
      </div>
      <div>Icon</div>
    </div>
  )
}


export default Navbar
import React from 'react'
import { Icon, Profile } from '@/components/_share'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { IconName } from '@/components/_share/Icon/iconsMap';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: IconName;
}

const NAVBAR_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    icon: 'home',
  },
  {
    id: 'explore',
    label: 'Explore',
    href: '#explore',
    icon: 'search',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    href: '#notifications',
    icon: 'home',
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '#profile',
    icon: 'users',
  },
]

const Sidebar = () => {
  return (
    <aside className='h-screen sticky top-0 md:w-56 border-r-2'>
      <nav className='flex flex-col h-full md:px-4'>
        <ul className='flex flex-col p-2 md:p-4 gap-6'>
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.id} className='w-fit px-5 py-3 md:rounded-2xl rounded-full hover:bg-secondary/20 transition-colors duration-200'>
              <Link
                href={item.href}
                className='flex items-center gap-2.5 text-lg font-medium'
              >
                <Icon name={item.icon}/>
                <span className='hidden md:block'>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Button variant="secondary" className='hidden md:block font-semibold py-2'>Post</Button>

        <div className='mt-5'>
        <Profile />
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
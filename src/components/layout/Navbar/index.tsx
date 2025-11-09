'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Icon, Logo, Overlay, ThemeButton } from '@/components/_share';
import SimpleNavbar from './components/SimpleNavbar';

const NAVBAR_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Community', href: '#community' },
]

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
          {NAVBAR_ITEMS.map((item) => {
            return (
              <li key={item.href}>
                <Link href={item.href} className="relative group text-base font-medium hover:text-secondary transition-colors duration-300">
                  {item.label}
                  <span
                  className='absolute left-0 h-0.5 w-0 bg-current -bottom-1 ease-in-out duration-300 transition-all group-hover:w-full'
                />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='flex items-center gap-6'>
      <ThemeButton />
      <Button variant={'secondary'}>
        Get Started
        </Button>
      </div>
    </div>
  )
}

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative flex md:hidden w-full justify-between items-center p-4'>
      <div>
        <Logo />
      </div>
      <Icon name='menu' onClick={handleToggleMenu}/>

        <Overlay isOpen={isOpen} onClick={handleToggleMenu} type='blur'/>
      <AnimatePresence>
        {isOpen && (
          <>

            {/* Menu content */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-16 w-full h-[50vh] bg-white dark:bg-gray-900 border-t shadow-lg rounded-b-2xl z-50"
            >
              <ul className="flex flex-col items-center py-4 space-y-2">
                {NAVBAR_ITEMS.map((item) => (
                  <li key={item.href} className="w-full text-center">
                    <Link
                      href={item.href}
                      onClick={handleToggleMenu}
                      className="block w-full py-3 text-lg font-semibold hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="w-full px-6 pt-4">
                  <Button className="w-full py-3 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/80 transition">
                    Join Now
                  </Button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}


export { SimpleNavbar };
export default Navbar;
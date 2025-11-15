import React from 'react'
import { Sidebar } from '@/components/layout';
import { TrendingSidebar } from '@/components/_share';
import { SimpleNavbar } from '@/components/layout/Navbar';
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen'>
      <SimpleNavbar />
      <div className='flex'>
      <Sidebar />
      <main className='flex-1 border-r max-w-6xl'>
      {children}
      </main>
      <aside className='hidden lg:block w-100 max-w-100'>
        <TrendingSidebar />
      </aside>
      </div>
    </div>
  )
}

export default Layout
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
      <main className='flex-1 border-r border-border max-w-5xl'>
      {children}
      </main>
      <aside>
        <TrendingSidebar />
      </aside>
      </div>
    </div>
  )
}

export default Layout
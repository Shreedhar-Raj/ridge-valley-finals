import PageCard from '@/components/PageCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'
import { supabase } from '@/utils/supabaseClient.mjs';
function index() {
  const page = {
    page: "Notes"
  }
  const eco = {
    title: "Living Standards.pdf",
    description: "Notes on Living Standards",
    action: "Download"
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className=' w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className='p-7 gap-x-7 grid-cols-3'>
          <div className='flex'>
            <PageCard data={eco} />
          </div>
          <div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default index
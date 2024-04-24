import LongCard from '@/components/LongCard'
import NoImageCard from '@/components/NoImageCard'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function index() {
  const notifications = {
    title: "Not Enough Data",
    description: "You must have a minimum presence of 14 days on our platoform before you can request for this data.",
    component: <RemoveCircleIcon className='text-5xl text-[#197878]' />
  }
  const page  = {
    page: "Analytics",
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNav data={page} className="border-b max-w-100" />
        <div className="flex justify-center">
        <LongCard data={notifications} className='' />
        </div>
        
      </div>
    </div>
  )
}

export default index
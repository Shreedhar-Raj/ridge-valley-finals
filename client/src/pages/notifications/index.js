import LongCard from '@/components/LongCard'
import NoImageCard from '@/components/NoImageCard'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function index() {
  const notifications = {
    title: "Welcome to Study Sage",
    description: "Study sage is an app where you can enhance your learning experiance, check out our app!",
    component: <NotificationsActiveIcon className='text-5xl text-[#197878]' />
  }
  const page  = {
    page: "Notifications",
  }
  return (
    <div className='flex'>
      
      <div>
        <Sidebar className="shadow-md" />
      </div>
      <div className='w-full relative h-screen'>
        <TopNav data={page} className="border-b max-w-100" />
        <div className='pl-10 pt-10 text-xl font-bold'>
        <h1>Notifications | Past 14 Days</h1>
      </div>
        <div className="flex justify-center">
        <LongCard data={notifications} className='' />
        </div>
        <div className="flex justify-center">
        <LongCard data={notifications} className='' />
        </div>
        <div className="flex justify-center">
        <LongCard data={notifications} className='' />
        </div>
        <div className="flex justify-center">
        <LongCard data={notifications} className='' />
        </div>
      </div>
    </div>
  )
}

export default index
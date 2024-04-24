import LongCard from '@/components/LongCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function peerFinder() {
  const page  = {
    page: "Find Peers"
  }
  const ainotes = {
    title: "Harshiet Nanda",
    board: "ICSE",
    interests: "Tech, Sports, Business",
    component: <AccountCircleIcon className='text-5xl text-[#197878]' />
  }
  const summary = {
    title: "Shiv Chandra",
    board: "ICSE",
    interests: "Tech, Sports, Fitness",
    component: <AccountCircleIcon className='text-5xl text-[#197878]' />
  }
  const quiz = {
    title: "Aaryan Chaddha",
    board: "ICSE",
    interests: "Karate, Tech, Fitness ",
    component: <AccountCircleIcon className='text-5xl text-[#197878]' />
  }
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className="flex justify-center w-full">
        <div className='gap-y-5'>
        <LongCard data={ainotes} />
        <LongCard data={summary} />
        <LongCard data={quiz} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default peerFinder
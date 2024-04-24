import LongCard from '@/components/LongCard'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNav'
import React from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
function index() {
  const [lesson, setLesson] = useState("hello brother");
  const page  = {
    page: "AI Learning"
  }
  const ainotes = {
    title: "AI Notes Generator",
    link: "/ai-learning/upload",
    description: "Create interesting and useful notes with AI",
    component: <SmartToyIcon className='text-5xl text-[#197878]' />
  }
  const summary = {
    title: "AI Note Summary Generator",
    description: "Create interesting and useful summaries with AI",
    link: "/ai-learning/upload",
    component: <NoteAltIcon className='text-5xl text-[#197878]' />
  }
  const quiz = {
    title: "AI Note Question Generator",
    description: "Create interesting and useful questions with AI",
    link: "/ai-learning/upload",
    component: <HelpCenterIcon className='text-5xl text-[#197878]' />
  }
  const peer = {
    title: "Find Peers!",
    description: "Find peers to study with!",
    link: "/ai-learning/upload",
    component: <AccountCircleIcon className='text-5xl text-[#197878]' />
  }
  // Assuming this code is part of your React component or any JavaScript file in your Next.js application

  
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen'>
        <TopNavbar data={page} />
        <div className="flex justify-center w-full">


        <div className='gap-y-5 text-black' >
 
        <LongCard data={ainotes} />


        {/* {text} */}
        </div>

        </div>
      </div>
    </div>
  )
}

export default index
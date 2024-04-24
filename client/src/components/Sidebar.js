// Imports
import React from 'react'
import { useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import { SupervisedUserCircle } from '@mui/icons-material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { supabase } from '@/utils/supabaseClient.mjs';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", href: "/dashboard", component: <WindowIcon className='text-[#197878]' /> },
    { title: "Notifications", href: "/notifications", component: <NotificationsActiveIcon className='text-[#197878]' /> },

    { title: "Schedule ", href: "/schedule", component: <AccessTimeFilledIcon className='text-[#197878]' /> }, 
    { title: "Peer Finder ", href: "/schedule", component: <SupervisedUserCircle className='text-[#197878]' /> }, 
    { title: "AI Learning",href: "/ai-learning", component: <SmartToyIcon className='text-[#197878]' /> },
    { title: "Analytics", href: "/analytics", component: <TimelineIcon className='text-[#197878]' /> },
    { title: "Notes ", href: "/notes", component: <DescriptionIcon className='text-[#197878]' /> , gap: true },
    { title: "Settings", href: '/settings', component: <SettingsIcon className='text-[#197878]' /> },
    
  ];
  // const data = supabase.from('students').select('username').eq('id', ).then((res) => {
  //   if (res.error != null) {
  //     console.log(res.error)
  //   }
  //   else{
  //     return res.data[0]
  //   }
  // })
  // console.log(data)
  return (
  
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } border-r items-center h-screen h-full p-5 bg pt-8 relative duration-300`}
      >
        <KeyboardBackspaceIcon
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 bg-white top-9 w-7 border-[#197878] text-[#197878]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://media.discordapp.net/attachments/911835758745231360/1170739655289880616/image.png?ex=655a2345&is=6547ae45&hm=1a381016d0f5e0c5e2245ff02c33498b6164da559fec11a26ceaf0eedd4f0100&=&width=1068&height=1068"
            className={`cursor-pointer rounded-full duration-500 w-10 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Study Sage
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <a
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#cae6e6] transition-0.5s  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && ""
              } `}
              href={Menu.href}
            >
              {Menu.component}
              <span  href={Menu.href} className={`${!open && "hidden"} text-black text-lg origin-left duration-200`}>
                {Menu.title}
              </span>
            </a>
          ))}
        </ul>
         {/* <div className='bottom-0 m-12 p-5 w-5'>{localStorage.getItem('username')}</div> */}
      </div>
     
    </div>
  )
}

export default Sidebar
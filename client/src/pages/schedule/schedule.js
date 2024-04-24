import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNav";
import { Schedule, ScheduleTwoTone } from "@mui/icons-material";
import React from "react";

function index() {
  const page = {
    page: "Schedule",
  };
  const Schedule = [
    {
      day: 1,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Algebra)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "EXTRACURRICULAR (Soccer)",
          from: "10:30 AM",
          to: "11:30 AM",
        },
        {
          session: 4,
          title: "STUDY SESSION (Biology)",
          from: "11:30 AM",
          to: "1:00 PM",
        },
        {
          session: 5,
          title: "END OF DAY TEST (1:00 PM - 1:30 PM)",
          from: "1:00 PM",
          to: "1:30 PM",
        },
      ],
    },
    {
      day: 2,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Biology)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "EXTRACURRICULAR (Piano)",
          from: "10:30 AM",
          to: "11:30 AM",
        },
        {
          session: 4,
          title: "STUDY SESSION (World War II)",
          from: "11:30 AM",
          to: "1:00 PM",
        },
        {
          session: 5,
          title: "END OF DAY TEST (1:00 PM - 1:30 PM)",
          from: "1:00 PM",
          to: "1:30 PM",
        },
      ],
    },
    {
      day: 3,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (World War II)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "STUDY SESSION (Algebra)",
          from: "10:30 AM",
          to: "12:00 PM",
        },
        {
          session: 4,
          title: "END OF DAY TEST (12:00 PM - 12:30 PM)",
          from: "12:00 PM",
          to: "12:30 PM",
        },
      ],
    },
    {
      day: 4,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Algebra)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "STUDY SESSION (Biology)",
          from: "10:30 AM",
          to: "12:00 PM",
        },
        {
          session: 4,
          title: "END OF DAY TEST (12:00 PM - 12:30 PM)",
          from: "12:00 PM",
          to: "12:30 PM",
        },
      ],
    },
    {
      day: 5,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Biology)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "STUDY SESSION (World War II)",
          from: "10:30 AM",
          to: "12:00 PM",
        },
        {
          session: 4,
          title: "END OF DAY TEST (12:00 PM - 12:30 PM)",
          from: "12:00 PM",
          to: "12:30 PM",
        },
      ],
    },
    {
      day: 6,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Science Unit Test Preparation)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "STUDY SESSION (History Midterm Preparation)",
          from: "10:30 AM",
          to: "12:00 PM",
        },
        {
          session: 4,
          title: "END OF DAY TEST (12:00 PM - 12:30 PM)",
          from: "12:00 PM",
          to: "12:30 PM",
        },
      ],
    },
    {
      day: 7,
      sessions: [
        {
          session: 1,
          title: "STUDY SESSION (Algebra)",
          from: "8:00 AM",
          to: "10:00 AM",
        },
        {
          session: 2,
          title: "BREAK (10:00 AM - 10:30 AM)",
          from: "10:00 AM",
          to: "10:30 AM",
        },
        {
          session: 3,
          title: "STUDY SESSION (Biology)",
          from: "10:30 AM",
          to: "12:00 PM",
        },
        {
          session: 4,
          title: "END OF DAY TEST (12:00 PM - 12:30 PM)",
          from: "12:00 PM",
          to: "12:30 PM",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className=" w-full relative h-screen">
          <TopNavbar data={page} />

          {/* {Schedule.map((schedule, index) => (
          <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
            <h1 className='text-xl font-bold mb-7 '>DAY {schedule.day}</h1>
            {schedule.sessions.map((session, index) => (
              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='flex flex-col'>
                    <h1 className='text-lg font-bold'>{session.title}</h1>
                    <h1 className='text-sm text-[#197878]'>{session.from} - {session.to}</h1>
                  </div>
          </div>
        </div>
      ))}
      
    

       </div>
         ))} */}
          <div className="grid grid-cols-12 gap-6  p-4">
            {Schedule.map((schedule, index) => (
              <div className="p-7 border border-[#197878] hover:bg-[#197878] hover:bg-opacity-50 ease-in-out duration-300   col-span-4 rounded-lg shadow-lg  ">
                <h1 className="text-xl font-bold mb-7 ">DAY {schedule.day}</h1>
                {schedule.sessions.map((session, index) => (
                  <div className="flex flex-col gap-6 ">
                    <div className="flex flex-col mb-5 ">
                      
                      <h1 className="text-lg font-semibold ">{session.title}</h1>
                      <h1 className="text-[#197878] group-hover:text-white">
                        {session.from} - {session.to}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

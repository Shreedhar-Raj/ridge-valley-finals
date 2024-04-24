import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNav";
import { Schedule, ScheduleTwoTone } from "@mui/icons-material";
import React from "react";

function index() {
  const page = {
    page: "Schedule",
  };
  
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className=" w-full relative h-screen">
          <TopNavbar data={page} />

  <a href='/schedule/form' className="bg-[#197878] border border-[#197878] hover:text-[#197878] hover:bg-white text-white font-bold py-2 px-4 rounded">
          Generate Initial Schedule
        </a>
          
          </div>
        </div>

    </>
  );
}

export default index;

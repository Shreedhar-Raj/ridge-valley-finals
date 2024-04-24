import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TopNavbar from '@/components/TopNav';
import { supabase } from '@/utils/supabaseClient.mjs';

function Upload() {
  var alertFile = null
  const [fileNname, setFileName] = useState('Untitled')
  const page = {
    page: "AI Learning/Upload"
  }
  
    

  return (
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <TopNavbar data={page} className='max-w-100' />
      <div className=' h-full  w-full oveflow-hidden items-center'>
      
      <div className='flex justify-center h-full  w-full oveflow-hidden items-center'>
        <div>
        <input type="text" id="myname" className='m-5 border border-[#197878] border-15 rounded-lg px-3 py-2 text-black' name="filename" onChange={(e)=>  {setFileName(e.target.value)}} placeholder='Enter Subject and Topic Name'/>
        <input type="file" id="myFile" name="filename" onChange={(e)=>  {
          alertFile = e.target.files[0]
        }}/>
        </div>
        <button className='border border-[#197878]' onClick={(e) => {
           let myuuid = uuidv4();
    const file_name = localStorage.getItem('session').concat('/').concat(myuuid)
    supabase
    .storage
    .from('forumNotes')
    .upload(file_name, alertFile, {
        cacheControl: '3600',
        upsert: false
    }).then((res) => {
      if (res.error != null) {
        console.log(error)
      }
      else{
        alert("File Uploaded")
        
      }
    
    
    })
    supabase.from('forumnotes').insert({
      noteid: myuuid,
      title: fileNname,
      createdBy : localStorage.getItem('session'),
    }).then((res) => {
      if (res.error != null) {
        console.log(res.error)
      }
      else{
        console.log("Note Created")
        const fileUrl = "https://brrctpvbkaisfaohwokv.supabase.co/storage/v1/object/sign/forumNotes/fc825a68-1e45-4698-ac99-9d8445bc7d50/a7d6af2c-7455-4874-bcc4-e46069a3fd05?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3J1bU5vdGVzL2ZjODI1YTY4LTFlNDUtNDY5OC1hYzk5LTlkODQ0NWJjN2Q1MC9hN2Q2YWYyYy03NDU1LTQ4NzQtYmNjNC1lNDYwNjlhM2ZkMDUiLCJpYXQiOjE2OTkyMjUxMTMsImV4cCI6MTY5OTgyOTkxM30.fI18VnkwZEf3NrZ32SSB49eAoZBwUQwhUQolSBD7tcw&t=2023-11-05T22%3A58%3A33.163Z"

    const interests = ["blockchain", "basketball"]
    console.log(interests)
    ; // Assuming interests is an array in the query parameters
    const topic = fileNname;

    const apiUrl = `http://127.0.0.1:5000/notes?file_url=${fileUrl}&interests=${interests}&topic=${topic}`;
    console.log(apiUrl);
    fetch(apiUrl, {
  method: 'GET',

})
  .then(res => res.json()) // Parse the JSON here
  .then(data => {
    console.log(data);
    console.log(data.data);
    console.log("genius");
  })
  .catch(err => {
    console.log(err);
  });

        }})
    console.log("done")
    
        }}>Upload File  
         <UploadFileIcon className='' />
        </button>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Upload 

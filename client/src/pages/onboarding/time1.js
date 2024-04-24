import React from 'react'
import StartIcon from '@mui/icons-material/Start';
import { useEffect } from 'react';

function time1() {
  function redirectToTime2() {
    window.location.href = "/onboarding/time2";
  }

  function handleSubmitAcademics() {
    // Write submit to DB code here
    redirectToTime2();
    useEffect(() => {
        if (typeof window !== 'undefined') {
          redirectToTime2();
        }
      }, []);
  }
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
            <div>
            <h1 className='text-2xl'>How much time are you willing to spend every day on academics?</h1>
            <input className='w-full border-b-2 outline-0 border-orange-400 text-2xl text-center pt-10' placeholder='enter time in hours' />
            <div className='flex pt-5 items-center'>
                <button onClick={handleSubmitAcademics} className='py-1 items-center px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>Next Question <StartIcon /></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default time1
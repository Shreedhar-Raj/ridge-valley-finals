import React, { useEffect } from 'react';
import StartIcon from '@mui/icons-material/Start';

function time3() {
    function redirectToDash() {
        window.location.href = "/dashboard";
      }
    
      function handleSubmitSkills() {
        // Write submit to DB code here
        redirectToDash();
        useEffect(() => {
            if (typeof window !== 'undefined') {
              redirectToDash();
            }
          }, []);
      }
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
            <div>
            <h1 className='text-2xl'>How much time are you willing to spend every day learning new skills?</h1>
            <input className='w-full border-b-2 outline-0 border-orange-400 text-2xl text-center pt-10' placeholder='enter time in hours' />
            <div className='flex pt-5 items-center'>
            <button onClick={handleSubmitSkills} className='py-1 hover:bg-orange-400 hover:text-white items-center px-3 rounded-xl border border-orange-500 text-orange-400 hover-bg-orange-400'>
              Done <StartIcon />
            </button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default time3
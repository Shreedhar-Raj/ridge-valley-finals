import React, { useEffect } from 'react';
import StartIcon from '@mui/icons-material/Start';

function time2() {
  function redirectToTime3() {
    window.location.href = "/onboarding/time3";
  }

  function handleSubmitExtra() {
    // Write submit to DB code here
    redirectToTime3();
    useEffect(() => {
        if (typeof window !== 'undefined') {
          redirectToTime3();
        }
      }, []);
  }

  return (
    <div>
      <div className='flex items-center justify-center w-screen h-screen'>
        <div>
          <h1 className='text-2xl'>How much time are you willing to spend every day on extra-curriculars?</h1>
          <input className='w-full border-b-2 outline-0 border-orange-400 text-2xl text-center pt-10' placeholder='enter time in hours' />
          <div className='flex pt-5 items-center'>
            <button onClick={handleSubmitExtra} className='py-1 hover:bg-orange-400 hover:text-white items-center px-3 rounded-xl border border-orange-500 text-orange-400 hover-bg-orange-400'>
              Next Question <StartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default time2;

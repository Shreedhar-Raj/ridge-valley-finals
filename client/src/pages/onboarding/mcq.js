import React from 'react'
import StartIcon from '@mui/icons-material/Start';

function mcq() {
  const TestTitle = "Diagnostic Test - Physics"
  const Questions = [
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},
    {q: "What is the capital of France?", a: "Paris", b: "Paris", c: "Paris", d: "Paris", ans: "a"},

  ]
  return (
    <div>
        <div className=' items-center justify-center w-screen h-screen'>
                      <div>{TestTitle}</div>
            {Questions.map((question, index) => (
            <div>
  
            
           
                <h1 className='text-4xl pb-5'>{question.q}</h1>
                <div className='flex pt-3 items-center'>
                    <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>A</button>
                    <p className='pl-3'>{question.a}</p>
                </div>
                <div className='flex pt-3 items-center'>
                    <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>B</button>
                    <p className='pl-3'>{question.b}</p>
                </div>
                <div className='flex pt-3 items-center'>
                    <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>C</button>
                    <p className='pl-3'>{question.c}</p>
                </div>
                <div className='flex pt-3 items-center'>
                    <button className='py-1 px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>D</button>
                    <p className='pl-3'>{question.d}</p>
                </div>
                <div className='flex pt-3 items-center'>
                    <button className='py-1 items-center px-3 rounded-xl border border-orange-500 text-orange-400 hover:text-white hover:bg-orange-400'>Next Question <StartIcon /></button>
                </div>
                
            </div>
            ))}
        </div>
    </div>
  )
}

export default mcq
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const LongCard = (props) => {
  return (
    <div className='pt-3'>
        <a href={props.data.link} className='max-w-lg h-35 flex rounded-2xl border border-gray-300 shadow-md cursor-pointer hover:bg-[#cae6e6]  p-5'>
        {props.data.component}
        <div className='pl-5'>
            <div className="text-xl">{props.data.title}</div>
            <h1>{props.data.description}</h1>
        </div>
    </a>
    </div>
  )
}

export default LongCard
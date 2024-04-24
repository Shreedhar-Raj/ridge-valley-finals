import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Peer = (props) => {
  return (
    <div className='pt-3'>
        <a href={props.data.link} className='max-w-lg h-35 flex rounded-2xl border border-[#cae6e6] cursor-pointer hover:bg-[#cae6e6]  p-5'>
        {props.data.component}
        <div className='pl-5'>
            <div className="text-xl">{props.data.title}</div>
            <div className='flex'>
                <h1 className="font-bold">BOARD: </h1>
                <span>{props.data.board}</span>
            </div>
            <div className='flex'>
                <h1 className='font-bold'>INTERESTS: </h1>
                <span>{props.data.interests}</span>
            </div>
        </div>
    </a>
    </div>
  )
}

export default Peer

import React from 'react';
import {supabase} from '@/utils/supabaseClient.mjs'

export default function fileUpload() {
 
  
  return(
    <div>
  <input type="file" id="myFile" name="filename" onChange={(e)=> {setfile([e.target.files[0]])}}/>
    <input type="text" className="w-fit h-fit p-5" placeholder="thisvalueisshit" onChange={(e) => {setfilename(e.target.value)}}/>
  <button className="w-fit h-fit p-5" onClick={(e) => {submit()}}>submit</button>
</div>
  )
}
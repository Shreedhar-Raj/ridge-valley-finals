'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import { localStorage } from '@/utils/localstorage.mjs'
const inter = Inter({ subsets: ['latin'] })
import {redirect} from 'next/dist/server/api-utils'
import {supabase} from '@/utils/supabaseClient.mjs'
import { useEffect, useState } from 'react'
import { Link } from 'next/link'
export default function Home() {
  const [session, setSession] = useState("")

  return (
 <div className='text-black w-fit h-fit p-5'>
 </div>
  )
    }


  // localStorage and window not working here (not defined) need to implement check for localstorage.getItem('session') existing, if does not exist then redirect to login page






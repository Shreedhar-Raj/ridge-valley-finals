'use client'
import 'dotenv/config'

import {createClient} from "@supabase/supabase-js"
import 'dotenv/config'
import {supabase} from '@/utils/supabaseClient.mjs'





export default async function login(req, res) {
    const { email, password } = req.body
    
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    let { data : {session} } = await supabase.auth.getSession()



    if (error) {
        return res.status(401).json({success: false, message: error.message })}
    else {
        return res.status(200).json({  id: session.user.id, success: true, message: "success go back to https://localhost:3000/login"})}
    }


import 'dotenv/config'

import {createClient} from "@supabase/supabase-js"
import 'dotenv/config'
import {supabase} from '@/utils/supabaseClient.mjs'
export default async function signup(req, res) {
    const { email, password } = req.body
    
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
    let { data1, error1 } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        return res.status(401).json({ success: false, message: error.message })}
    else if (error1)
        return res.status(401).json({ success: false, message: error1.message })
    else {
        return res.status(200).json({ success: true, message: "success go back to https://localhost:3000/login"})}
    }
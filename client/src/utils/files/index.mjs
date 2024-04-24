import {supabase} from '@/utils/supabaseClient.mjs'
import {v4 as uuidv4} from 'uuid';


export async function Add(file, filename, filetype) {
    // await fetch('/api/auth/login', 
    // )
    let { data1, error1} = await supabase.auth.signInWithPassword({
        email: "example@example.com",
        password: "12345678"
    })
    const {data2, error2} = await supabase.auth.getSession().session.user

    let myuuid = uuidv4();
    const file_name = {`${data2.user.id}/${filename}.${filetype}`}
    const file = event.target.files[0]
    const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload(file_name, file, {
        cacheControl: '3600',
        upsert: false
    })
}
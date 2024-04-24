import { supabase } from '@/utils/supabaseClient'
import { redirect } from 'next/navigation'

export default  async function signout(req, res) {
    let { data, error } = await supabase.auth.signOut()

    if (error) {

        return res.status(401).json({ success: false, message: error.message })}
    else {

        return res.status(200).json({ success: true, message: "success"})
        
    }
    
}
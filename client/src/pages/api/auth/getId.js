import { supabase } from '@/utils/supabaseClient'
import { localstorage } from '@/utils/localstorage'
export default async function getSession(req, res) {
    var session_ld = null
    const id = localstorage.getItem('session')

        return res.status(200).json({ status:200, success: true, id: id})
}
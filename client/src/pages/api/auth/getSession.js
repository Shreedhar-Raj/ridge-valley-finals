import { supabase } from '@/utils/supabaseClient'
export default async function getSession(req, res) {
    var session_ld = null
    const { data: {session} } = await supabase.auth.getSession()
    if (session) {

        return res.status(200).json({ status:200, success: true})}
    else {
        
         if (typeof window !== 'undefined') {
            session_ld = localStorage.getItem('session')
            
            
         }}
        
         if(session_ld !== null ) {
                return res.status(200).json({ status:200, success: true})
                console.log(session_ld)
            }
        else {
            return res.status(401).json({ status:401, success: false})
        }
         
}
import { supabase } from '../utils/supabaseClient.mjs'
let auth_id = null
export async function addStudent(board, username) {

    await supabase.auth.signInWithPassword({
        email: "example@example.com",
        password: "12345678"
    })
    .then(res => {gfce
        auth_id = res.data.user.id
        console.log(auth_id)
        console.log(res.data.user)
    })
    supabase.from('students').insert({
        board: board,
        username: username,
        auth_id: auth_id
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    }
export async function getStudents() {
const data = await supabase.from('students').select('*')
return data
}

addStudent("cbse", "browassupman")
console.log(getStudents())
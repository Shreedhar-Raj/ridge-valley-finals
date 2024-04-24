import React from 'react';
import { useState } from 'react';
export default function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  function redirectToDashboard() {
    window.location.href = "/dashboard";
  }
  async function handleSubmit () {
    await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      if(data.success) {
        localStorage.setItem('session', data.id);
        redirectToDashboard();
      }
      else {
        alert(data.message)
      }

    
    })
  }
  return (
    <section className="w-full h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative border-r w-full h-screen bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <h1 className="mb-2 font-medium text-gray-700 uppercase">Learn Smarter</h1>
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you learn smarter</h2>
                </div>
                <h1 className="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your learning.</h1>
                <a href="/signup" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-[#197878] rounded-lg " data-primary="blue-600" data-rounded="rounded-lg">Get Started Today</a>
              </div>
            </div>
          </div>

          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-black text-3xl font-bold">Login</h4>
              <h1 className="text-lg text-gray-500">Don't have an account? <a href="/signup" className="text-blue-600 underline" data-primary="blue-600">Sign Up</a></h1>
              <div className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input type="text" onChange={(e)  => { setEmail(e.target.value) }} className="block text-black w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 border border-1 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Enter Your Email Address" />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <input type="password" onChange={(e)  => { setPassword(e.target.value) }} className="block text-black w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 border border-1 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Password" />
                </div>
                <div className="relative">
                  <button onClick={(e) => {handleSubmit()}} className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-[#197878] rounded-lg " data-primary="blue-600" data-rounded="rounded-lg">Log In</button>
                  <a href="#_" className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease" data-rounded="rounded-lg">Login with Google</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

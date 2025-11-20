import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'

export default function Login() {
  const [formdata,setFormdata] = useState({})
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async()=>{
    await signInWithEmailAndPassword(auth,formdata.email,formdata.password).then((res)=>{
      navigate("/dashboard") 
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h4 className="text-2xl font-bold text-center mb-6">Login</h4>
<input type="text" placeholder='Enter Your Email' onChange={handleChange} name='email' className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"/>
<input type="password" placeholder='Enter Your Password' onChange={handleChange} name='password' className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"/>
<button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">Log in</button>
<p className="text-center mt-4"><Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link></p>
      </div>
    </div>
  )
}

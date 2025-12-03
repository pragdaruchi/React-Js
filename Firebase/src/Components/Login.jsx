import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../FfirebaseConfig'
import { useNavigate, Link } from 'react-router-dom'
     
export default function Login() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((res) => {
        navigate("/dashboard");
      });
  };
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h4 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h4>
      <input type="text" name="email" placeholder="Enter Your Email" onChange={handleChange} className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button onClick={handleLogin}className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">Log In</button>
      <div className="text-center mt-4">
        <Link to="/dashboard"className="text-blue-600 hover:underline">Dashboard</Link>
      </div>
    </div>
  </div>
);
}
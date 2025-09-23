import React, { useState } from 'react'

export default function Form() {
  const [formdata , setFormdata] = useState({});
  const [record , setRecord] = useState([]);

  const handleSubmit = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setRecord([...record, formdata])
    setFormdata({
      name: "",
      subject: "",
      password : "",
      age: "",
      gender: "",
      city: ""
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <h4 className="text-3xl font-bold mb-6 text-center text-purple-700">Form</h4>
        <form onSubmit={handleChange} className="space-y-5">
          <input type="text" name='name' value={formdata.name} onChange={handleSubmit} placeholder='Name' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"/>
          <input type="text" name='subject' value={formdata.subject} onChange={handleSubmit} placeholder='Subject' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"/>
          <input type="text" name='age' value={formdata.age} onChange={handleSubmit} placeholder='Age' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"/>
          <input type="password" name='password' value={formdata.password} onChange={handleSubmit} placeholder='Enter Your Password' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"/>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2"><input type="radio" name='gender' value="male" checked={formdata.gender==="male"} onChange={handleSubmit} /> Male</label>
            <label className="flex items-center gap-2"><input type="radio" name='gender' value="female" checked={formdata.gender==="female"} onChange={handleSubmit}/> Female</label>
          </div>
          <select name="city" value={formdata.city} onChange={handleSubmit} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
            <option hidden>Select City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Gondal">Gondal</option>
            <option value="Amreli">Amreli</option>
            <option value="London">London</option>
          </select>
          <button type='submit' className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl hover:scale-105 transform transition-all font-semibold shadow-lg">Submit</button>
        </form>
        <div className="mt-8 space-y-6">
          {record.map((e,i) => (
            <ul key={i} className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-xl border-l-4 border-pink-500 space-y-2">
              <li><span className="font-semibold text-purple-700">Name:</span> {e.name}</li>
              <li><span className="font-semibold text-purple-700">Subject:</span> {e.subject}</li>
              <li><span className="font-semibold text-purple-700">Age:</span> {e.age}</li>
              <li><span className="font-semibold text-purple-700">Password:</span> {e.password}</li>
              <li><span className="font-semibold text-purple-700">Gender:</span> {e.gender}</li>
              <li><span className="font-semibold text-purple-700">City:</span> {e.city}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )}
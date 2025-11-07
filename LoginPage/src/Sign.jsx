import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const navigate = useNavigate();
  const [formdata,setFormdata] = useState({})
  const [record,setRecord] =useState([])
   const [showPassword, setShowPassword] = useState(false);
  
  useEffect(()=>{
    fetchRecord()
  },[])  

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
  })
  }
 
  const handleSubmit = async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:5000/users",formdata).then((res)=>{
       setFormdata({
        name : "",
        mail : "",
        password : ""
       })
  })
  
  }  
const fetchRecord = async ()=>{
    await axios.get("http://localhost:5000/users").then((res)=>{
        setRecord(res.data)
    })  
}
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="text" placeholder="Enter Your Mail" name="mail" onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
       <div className="relative">
  <input type={showPassword ? "text" : "password"} placeholder="Enter Your Password" name="password" onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"/>
<button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-blue-600 text-sm font-medium">{showPassword ? "Hide" : "Show"}</button>
          </div>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => navigate("/login")}>Sign Up</button>
      </form>
    </div>
    <div className="mt-8 w-full max-w-md bg-white shadow-md  rounded-xl p-6">
      <h4 className="text-center font-bold text-3xl">registration</h4>
      {record.map((e, i) => (
        <ul key={i}>
          <li className="text-gray-800 font-medium">{e.name}</li>
          <li className="text-gray-600">{e.mail}</li>
          <li className="text-gray-500">Password: {e.password}</li>
        </ul>
      ))}
    </div>
  </div>
  );
}
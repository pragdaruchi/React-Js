import React, { useState } from 'react'

export default function From() {
  
   const [name, setName] = useState("");
   const [name1, setName1] = useState("");
   const [pass, setPass] = useState("");
   const [email, setemail] = useState("");
   const [img, setUrl] = useState("");

   const [record,setRecord] = useState([]);

   const allData = (e) =>{
      let obj = {"name" : name , "pass" : pass , "email" : email, "img" : img , "name1" : name1};
      setRecord([...record,obj])
   }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-9 w-full max-w-xl border border-gray-200">        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">FORM</h1>
        <div className="flex">
          <input type="text" placeholder='First Name' className="border border-gray-300 bg-white p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"  onChange={(e)=>setName(e.target.value)}  />
          <input type="text" placeholder='Last  Name' className="mx-3 border border-gray-300 bg-white p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"  onChange={(e)=>setName1(e.target.value)}  />
        </div>

  <div className="flex">
          <input type="password" placeholder='Enter Your Password' className="border border-gray-300 bg-white p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"  onChange={(e)=>setPass(e.target.value)}  />
          <input type="text" placeholder='Enter Your Email' className="mx-3 border border-gray-300 bg-white p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"  onChange={(e)=>setemail(e.target.value)}  />
        </div>
        <input type="text" placeholder='Enter Your URL' className="border border-gray-300 bg-white p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition" onChange={(e)=>setUrl(e.target.value)} />
        
        <button onClick={allData} className="bg-pink-400 text-white font-semibold p-3 w-full rounded-xl hover:bg-pink-500 active:scale-95 transition shadow-md">Add Data</button>
        <div className="mt-6 grid gap-4">
          {
            record.map((e,i)=>{
              return (
                <div key={i} className=" items-center gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-200">
                  <img src={e.img} className=" object-cover border-2 border-pink-300 rounded-2xl h-70 w-150" />
                  <div className='flex justify-center items-center'>
                    <h2 className="text-lg font-semibold text-gray-700 text-center">{e.name}</h2>
                    <h2 className="text-lg font-semibold text-gray-700 text-center mx-1">{e.name1}</h2>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 text-center">{e.pass}</p> 
                    <p className="text-sm text-gray-500 text-center">{e.email}</p> 
                  </div>
                </div>
              )})}
        </div>
      </div>
    </div>
  )
}

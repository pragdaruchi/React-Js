import React, { useEffect, useState } from 'react'

export default function Crud() {

  const [formdata , setFormdata] = useState({})
  const [record , setRecord] = useState([])
  const [editIndex , setEditIndex] = useState(null)
  useEffect(()=>{
    let allData = JSON.parse(localStorage.getItem("record")) || []
    setRecord(allData)
  },[])
  const handleform = (e) =>{
    setFormdata ({
       ...formdata,
       id:Date.now(),
       [e.target.name] : e.target.value
    })   
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (editIndex==null) {
      setRecord([...record, formdata])
      localStorage.setItem("record" , JSON.stringify([...record , formdata]))  
    }
    else{
      let singleData = record.find((item)=>item.id == editIndex)
      singleData.name = formdata.name
      singleData.age = formdata.age
      singleData.subject = formdata.subject
      singleData.city = formdata.city
      localStorage.setItem("record" , JSON.stringify([...record]))
    }
    setEditIndex(null)

    setFormdata({
      name: "",
      age: "",
      city : "",
      subject : ""
    })
  }
  const handleDelete = (id)=>{
    let newdata = record.filter((item)=>item.id!=id)
    setRecord(newdata)
    localStorage.setItem("record" , JSON.stringify(newdata))
  }
  const handleEdit = (id) =>{
    let singleData = record.find((item)=>item.id == id)
    setFormdata({
      name : singleData.name,
      age : singleData.age,
      subject : singleData.subject,
      city : singleData.city
    })
    setEditIndex(id)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">LocalCrud</h1>
      
      <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-4">
        <input  type="text" name="name" placeholder="Enter your name" onChange={handleform} className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"/>
        <input type="text" name="subject" placeholder="Enter your subject" onChange={handleform} className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"/>
        <input type="text" name="age" placeholder="Enter your age" onChange={handleform} className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"/>
        <select name="city" onChange={handleform}className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200">
          <option hidden>Choose Your City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Gondal">Gondal</option>
          <option value="Amreli">Amreli</option>
          <option value="Surat">Surat</option>
        </select> 
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
          {editIndex == null ? "Add Data" : "Update Data"}
        </button>
      </form>
      <div className="mt-8 w-full max-w-5xl overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Id</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Age</th>
              <th className="py-2 px-4 border">Subject</th>
              <th className="py-2 px-4 border">City</th>
              <th colSpan="2" className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {record ? 
              record.map((e,i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{e.id}</td>
                  <td className="py-2 px-4 border">{e.name}</td>
                  <td className="py-2 px-4 border">{e.age}</td>
                  <td className="py-2 px-4 border">{e.subject}</td>
                  <td className="py-2 px-4 border">{e.city}</td>
                  <td className="py-2 px-4 border">
            <button onClick={()=>handleEdit(e.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md">Edit</button>
                  </td>
                  <td className="py-2 px-4 border">
                    <button onClick={()=> handleDelete(e.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md">Delete</button>
                  </td>
                </tr>
              )) :
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">...loading</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData, postData, updateData } from '../Features/ApiSlice'

export default function ApiData() {
const [formData,setFormData] = useState({})
const [editIndex, setEditIndex] = useState(null);
const dispatch = useDispatch()

useEffect(()=>{
   dispatch(fetchData())
},[])

const response = useSelector((state)=>{
    return state.Apikey
})

if (response.loading == true) {
    return <p>Loading...</p>
}
     const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (editIndex == null) {
    dispatch(postData(formData));
  } else {
    dispatch(updateData(
        { 
        id: editIndex, ...formData }));
  }
  setFormData(
    { 
    name: "",
     age: "" 
    });
  setEditIndex(null);
};
const handleDelete =(id)=>{
    dispatch(deleteData(id));   
}

const handleEdit = (id) => {
  const singleData = response.record.find((item) => item.id == id);
  setFormData({
    name: singleData.name,
    age: singleData.age,
  });
  setEditIndex(id);
};

        return (
          <div className="mx-auto max-w-xl mt-10 p-6 bg-white shadow-lg rounded-xl">
<h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">API Data</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
<input type="text" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} name="name" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
<input type="text" placeholder="Enter Your Age" value={formData.age} onChange={handleChange} name="age" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
<button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">{editIndex ? "Update Data" : "Add Data"}</button>
    </form>
    <div className="space-y-4">
      {response.record &&
        response.record.map((e, i) => (
          <div key={i} className="p-4 border rounded-lg shadow flex items-center justify-between bg-gray-50">
            <div>
              <p className="text-lg  text-gray-800">Name:{e.name}</p>
              <p className="text-gray-600">Age: {e.age}</p>
            </div>
            <div className="flex gap-3">
<button onClick={() => handleDelete(e.id)} className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"> Delete</button>
<button onClick={() => handleEdit(e.id)} className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">Edit</button>
            </div>
          </div>
        ))}
    </div>
  </div>
);}
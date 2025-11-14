import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData} from '../Features/TodoSlice'

export default function Crud() {
    const [editIndex, setEditIndex] = useState(null)
    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.TodoKey.record
    })
    const [formdata, setFormdata] = useState({})

    const handleChange = (e)=>{   
        setFormdata({
            ...formdata,
            id : Date.now(),
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e)=>{ 
        e.preventDefault();
      if (editIndex == null) {
         dispatch(addData(formdata))
      }
       else{
        dispatch(updateData({id:editIndex , data : formdata}))
       }
        
        setFormdata({
            name : "",
            age : ""
        })
        setEditIndex(null)
    }
    const handleDelete = (id)=>{
        dispatch(deleteData(id))
    }
    const handleEdit = (id)=>{
   let singleData = data.find((item)=>item.id == id)
   setFormdata({
    name : singleData.name,
    age : singleData.age
   })
    setEditIndex(id)
    }

  return (
    <div>
        <h1>CRUD</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formdata.name} placeholder='Enter your name' onChange={handleChange} name='name' />
            <input type="text" value={formdata.age} placeholder='Enter your age'onChange={handleChange} name='age' />
            <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
        </form>
        {
            data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                     <button onClick={() => handleDelete(e.id)} className='border h-10 w-20 my-5'>Delete</button>
                     <button onClick={() => handleEdit(e.id)} className='border h-10 w-20 mx-2'>Edit</button>
                </ul>
            })
        }
    </div>
  )
}

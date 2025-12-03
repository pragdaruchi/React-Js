import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../FfirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [Task, setTask] = useState("")
  const [priourity, setPriourity] = useState("")
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserId(user.uid)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId, record])

  const fetchUser = async () => {
    await getDoc(doc(db, "users", userId)).then((res) => {
      setUserData(res.data());
    });
  };

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data()
    }))
    setRecord(newData)
  }
  const handleTask = async () => {
    const obj = { uid: userId, Task, priourity };
    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, obj])
      });
    }
    else {
      await updateDoc(doc(db, "Todos", editIndex), {
        Task,
        priourity,
      });
    }
    setTask("");
    setPriourity("");
    setEditIndex(null);
    fetchData();
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id);
    setTask(singleData.Task)
    setPriourity(singleData.priourity)
    setEditIndex(id);
  }
  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-gray-800">Dashboard</h4>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">Log Out</button>
        </div>
        <h1 className="text-xl font-semibold text-gray-700 mb-6">Welcome, {userData && userData.name} </h1>
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-700"> {editIndex ? "Update Your Task" : "Add New Task"}</h2>
          <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Your Task" className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"/>
          <input  type="text"  value={priourity}  onChange={(e) => setPriourity(e.target.value)}  placeholder="Enter Priority"  className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"/>
          <button onClick={handleTask} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">{editIndex ? "Update Task" : "Add Task"}</button>
        </div>

        <div className="flex flex-col items-center gap-4">
          {
          record &&
            record.map((e, i) => (
              <div key={i} className="bg-white p-4 w-full max-w-md rounded-xl shadow-md border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-800">{e.Task}</h3>
                <p className="text-gray-600 mb-4">{e.priourity}</p>
                <div className="flex justify-center gap-3">
                  <button onClick={() => handleDelete(e.docId)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">Delete</button>
                  <button onClick={() => handleEdit(e.docId)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition">Edit</button>
                </div>
              </div>
            ))
            }
        </div>
      </div>
    </div>
  );

}


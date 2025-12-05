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
    .filter((item)=>item.uid == userId)
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
    <div className="min-h-screen bg-[#e8edff] flex items-center justify-center p-6">
      <div className="flex flex-col w-full max-w-4xl max-h-screen bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-full bg-[#5d79ff] text-white p-6 flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold mb-2">Hello, {userData?.name}</h1>
          <p className="text-white/80 mb-4 text-sm">Manage your daily tasks & stay organized.</p>
     <img src={userData?.photo ? userData.photo : "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"} className="h-16 rounded-full mx-auto border-2 border-[#c7bfbf] shadow-lg mb-4"/>
      <button onClick={handleLogout} className="bg-[#4166bd] hover:bg-[#2b5cce] shadow-lg w-full py-2 rounded-xl font-semibold transition">Log Out</button>
        </div>
        <div className="w-full p-6 bg-white overflow-y-visible">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Task Dashboard</h2>
          <div className="bg-gray-100 p-5 rounded-xl shadow-inner mb-6">
            <h2 className="text-md font-semibold mb-3 text-gray-700">{editIndex ? "Update Your Task" : "Add New Task"}</h2>
            <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Your Task" className="w-full mb-2 px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500"/>
            <input type="text" value={priourity} onChange={(e) => setPriourity(e.target.value)} placeholder="Enter Priority" className="w-full mb-3 px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500"/>
            <button onClick={handleTask} className="w-full bg-[#326ae2] hover:bg-blue-700 text-white py-2 rounded-xl transition font-semibold">{editIndex ? "Update Task" : "Add Task"}</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {record.map((e, i) => (
              <div key={i} className="bg-white shadow-md p-4 rounded-xl border hover:shadow-xl transition">
                <h3 className="text-md font-bold text-gray-800">{e.Task}</h3>
                <p className="text-gray-600 mb-3">{e.priourity}</p>
                <div className="flex justify-between">
                  <button onClick={() => handleEdit(e.docId)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-xl transition">Edit</button>
                  <button onClick={() => handleDelete(e.docId)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl transition">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
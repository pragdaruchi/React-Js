import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [formdata, setFormdata] = useState({});
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetchRecord();
  }, []);
  
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let i = 0;
    while (record[i]) {
      if (record[i].mail == formdata.mail && record[i].password == formdata.password) {
        alert("Login Successful!");
        return;
      }
      i++;
    }
    alert("Wrong Mail or Password!");
  };
  
  const fetchRecord = () => {
    axios.get("http://localhost:5000/users").then((res) => {
      setRecord(res.data);
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Log In</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Your Mail" name="mail" onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >Log In</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-50 via-teal-50 to-blue-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-center mb-6">Counter Form</h1>
        <h1 className="text-6xl font-semibold text-gray-700 text-center mb-8">{count}</h1>   
        <div className="grid grid-cols-3 gap-4">
           <button onClick={()=>setCount(count-5)} className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200">-</button>
          <button onClick={() => setCount(0)} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200">Reset</button>
          <button onClick={() => setCount(count + 5)} className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200">+</button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button onClick={() => setCount(count * 5)} className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200">×</button>
          <button onClick={() => setCount(Math.floor(count / 5))} className="px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200">÷</button>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Features/CounterSlice'

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) =>
    {
     return  state.CounterKey.count
    })
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white border border-pink-100 rounded-2xl shadow-md p-10 w-80 text-center">
        <h1 className="text-2xl font-medium text-pink-500 mb-4">Counter</h1>
        <h2 className="text-5xl font-medium text-purple-500 mb-8">{count}</h2>
        <div className="flex justify-center gap-5">
<button  onClick={() => dispatch(decrement())} className="bg-pink-100 border border-pink-200 text-pink-700 font-semibold text-xl px-6 py-2 rounded-md hover:bg-pink-200 transition-all">–</button>
<button onClick={() => dispatch(increment())}  className="bg-purple-100 border border-purple-200 text-purple-700 font-semibold text-xl px-6 py-2 rounded-md hover:bg-purple-200 transition-all">+</button>
        </div>
      </div>
    </div>
  )
}

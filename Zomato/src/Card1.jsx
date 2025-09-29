import React from "react";

export default function Card1({movies , title = "Ruchi"}) {
 
  return (
    <>
    <h4 className="text-3xl px-20 font-semibold">{title}</h4>
    <div className="flex mx-20 flex-wrap gap-4 -py-10">
      {movies.map((e,i) => (
        <div key={i} className="w-50 border-2 border-[#d4cccc] rounded-xl overflow-hidden transition-transform duration-300">
          <img src={e.image} alt={e.title} className="w-50 h-60 object-cover"/>
          <div className="p-3">
            <h2 className="text- base font-semibold ">{e.title}</h2>
            <p className="text-sm text-gray-600">{e.age} <span className="mx-1">|</span> {e.language}</p>
          </div>
        </div>
      ))}
    </div>
    <div>     
    </div>
    </>
  );}
import React from "react";

export default function Card2({places , title = "Ruchi"}) {
  return (
    <>
    <h4 className="text-3xl px-20 font-semibold">{title}</h4>
    <div className="w-full overflow-x-scroll scrollbar-hide " style={{scrollbarWidth : 'none'}}>
      <div className="flex gap-6 px-20">
        {places.map((e,i) => (
         <div key={i} className="w-78 bg-white rounded-2xl h-141 overflow-hidden border border-gray-300 flex-shrink-0">
  <div className="relative w-full">
    <img src={e.img} alt={e.title} className="w-full h-100 object-cover"/>
    <span className="absolute bottom-0 left-0 bg-purple-600 text-white w-full text-base px-3">{e?.discount}</span>
  </div>
  <div className="p-4">
    <p className="text-sm text-[#e4d08a]">{e.date}</p>
    <h2 className="text-base font-semibold mt-1">{e.title}</h2>
    <p className="text-sm text-gray-600">{e.subtitle}</p>
    <p className="text-base font-bold text-gray-800 mt-2">{e.price}</p>
  </div>
</div>
))}
      </div>
    </div>
  </>
  );
}
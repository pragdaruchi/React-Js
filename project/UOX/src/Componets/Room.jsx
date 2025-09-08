import React from "react";

export default function Room() {
  return (
    <div>
    <div className="relative my-15">
      <img src="src/117.jpg" alt="" className="w-full h-auto object-cover"/>
      <div className="absolute top-18 w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800">LIVING ROOM FURNITURE</h1>
        <p className="text-2xl text-gray-600">Discount 50%</p>
      </div>
    </div>
       <h2 className="text-4xl  text-center">Latest News</h2>
       <div className="flex justify-center my-10">
         <div>
            <img className="w-115 h-75 mx-3" src="src/118.jpg" alt="" />
            <h4 className="text-[#9b9b9b] mx-5 my-2 text-base"> BY ADMIN <span className="mx-5">APRIAL 05, 2023</span></h4>
            <p className="text-lg mx-5">Woman with good shoes is never be ugly</p>
         </div>
         <div>
            <img className="w-115 h-75 mx-3" src="src/119.jpg" alt="" />
            <h4 className="text-[#9b9b9b] mx-5 my-2 text-base"> BY ADMIN <span className="mx-5">APRIAL 05, 2023</span></h4>
            <p className="text-lg mx-5">What Freud Can Teach Us About Furniture</p>
         </div>
         <div>
            <img className="w-115 h-75 mx-3" src="src/120.jpg" alt="" />
            <h4 className="text-[#9b9b9b] mx-5 my-2 text-base"> BY ADMIN <span className="mx-5">APRIAL 05, 2023</span></h4>
          <p className="text-lg mx-5">Habitant morbi tristique senectus</p>
         </div>
       </div>
    </div>
  );
}

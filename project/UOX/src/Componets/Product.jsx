import React from 'react'

export default function Product() {
  return (
    <div>
        <h4 className='text-center text-4xl text-[#1e1d36] font-normal'>BEST SELLING PRODUCTS</h4>
        <div className="flex justify-center my-5">
          <h4 className='text-xl mx-6 text-[#2a2e44]'><u>All</u></h4>
          <h4 className=' mx-6 text-[#8e959d] text-xl hover:underline'>FEATURED</h4>
          <h4 className=' mx-6 text-[#8e959d] text-xl hover:underline'>BEST SELLER</h4>
          <h4 className=' mx-6 text-[#8e959d] text-xl hover:underline'>SALES</h4>
        </div>

        <div className="flex justify-evenly my-10">
         <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/110.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Accerrious</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Wooden Wall Clock</p>
               <h5 className='text-sm mx-2 my-5'>$29</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/111.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Furniture</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Gray Vintage Chair</p>
               <h5 className='text-sm mx-2 my-5'>$62</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/112.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Furniture</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Small Gray Table</p>
               <h5 className='text-sm mx-2 my-5'>$17</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/110.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Accerrious</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Cableknit Shawl</p>
               <h5 className='text-sm mx-2 my-5'>$129</h5>
         </div>
        </div>
         <div className="flex justify-evenly my-10">
         <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/113.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Accerrious</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Black Vase</p>
               <h5 className='text-sm mx-2 my-4'>$29</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/114.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Furniture</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Chest Of Drawers</p>
               <h5 className='text-sm mx-2 my-4'>$62</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/115.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Furniture</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>White Table Lamp</p>
               <h5 className='text-sm mx-2 my-4'>$17</h5>
         </div>
           <div>
           <div className='bg-[#f4f4f6] w-86 h-105'>
               <img src="src/116.jpg" alt="" />
           </div>
               <div className="flex justify-between my-4">
                 <h4 className='text-lg mx-2 text-[#837b72]'>Accerrious</h4>
                 <img className='h-5 my-1' src="src/like1.png" alt="" />
               </div>
               <p className='text-base mx-2 -my-4'>Minimal Circle Clock</p>
               <h5 className='text-sm mx-2 my-4'>$129</h5>
         </div>
        </div>
        <h4 className='text-center text-xl hover:underline -my-8'>SEE ALL PRODUCTS</h4>
    </div>
  )
}

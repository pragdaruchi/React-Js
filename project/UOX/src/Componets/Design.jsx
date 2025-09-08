import React from 'react'

export default function Design() {
  return (
    <div>
      <div className="relative w-full my-2">
        <img className="h-170 w-370 mx-5 object-cover" src="src/104.jpg" alt="Interior Design" />
        <div className="absolute top-1/3 left-20 text-left text-[#141f45]">
          <p className="">TRENDING 2023</p>
          <h1 className="text-6xl  my-4">INTERIOR DESIGNS</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur elit.<br />Odio pulvinar in ipsum amet.</p>
          <button className="mt-6 px-6 py-2 bg-blue-900 text-white font-semibold hover:bg-blue-700 transition rounded">BUY NOW</button>
        </div>
      </div>

      <div className='flex my-5'>
        <div className="relative">
          <img className='h-120 w-150 mx-5' src="src/105.jpg" alt="" />
          <div className="absolute top-5 mx-5 text-[#141f45]">
            <h2 className="text-2xl font-bold px-15 py-3">FURNITURE</h2>
            <p className='px-15'>954 Products</p>
          </div>
        </div>

        <div>
          <div className='flex mx-2'>
            <div className="relative">
              <img className=' w-107 ' src="src/106.jpg" alt="" />
              <div className="absolute top-3 left-3 text-[#141f45]">
                <h2 className="text-lg font-bold px-15 py-3">CLOCKS</h2>
                <p className='px-15'>710 Products</p>
              </div>
            </div>

            <div className="relative">
              <img className=' w-107 mx-5' src="src/107.jpg" alt="" />
              <div className="absolute top-3 left-3 text-[#141f45]">
                <h2 className="text-lg font-bold px-18 py-3">ACCESSORIES</h2>
                <p className='px-18'>954 Products</p>
              </div>
            </div>
          </div>

          <div className='flex my-5 mx-2'>
            <div className="relative">
              <img className=' w-107 ' src="src/108.jpg" alt="" />
              <div className="absolute top-3 left-3 text-[#141f45]">
                <h2 className="text-lg font-bold px-15 py-3">LIGHTING</h2>
                <p className='px-15'>184 Products</p>
              </div>
            </div>

            <div className="relative">
              <img className=' w-107 mx-5' src="src/109.jpg" alt="" />
              <div className="absolute top-3 left-3 text-[#141f45]">
                <h2 className="text-lg font-bold px-18 py-3">TOYS</h2>
                <p className='px-18'>245 Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

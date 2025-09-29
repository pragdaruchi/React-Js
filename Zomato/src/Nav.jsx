import React from 'react'

export default function Nav({dark , setDark}) {
  console.log(dark);
  
  return ( 
    <div>
      <button onClick={()=>setDark(!dark)}>Light/Dark</button>   
      <div style={{backgroundColor: dark ? "black" : "white" } } className="flex justify-between px-9 items-center h-25 shadow-lg">
        <div className="flex items-center gap-4">
          <img className="h-16" src="src/logo.png" alt="Logo" />
          <div className="border-l-2 h-8 border-[gray]"></div>
          <img className='h-7' src="src/location.png" alt="" />
  <div className="flex flex-col">
  <h4 className='font-bold text-xl'>Gurugram</h4>
  <h4 className='text-[#777674]'>Haryana</h4>
</div>

        </div>
        <div className='flex items-center gap-8'>
          <h4 className='bg-[#e8e5fe] h-11 w-28 cursor-pointer font-semibold text-center py-2 text-xl rounded-full'>For you</h4>
          <a href="https://www.district.in/dining/" className='text-xl text-[#746c62] font-semibold'>Dining</a>
          <a href="https://www.district.in/events/" className='text-xl text-[#746c62] font-semibold'>Events</a>
          <a href="https://www.district.in/movies/" className='text-xl text-[#746c62] font-semibold'>Movies</a>
          <a href="https://www.district.in/activities/" className='text-xl text-[#746c62] font-semibold'>Activities</a>
        </div>
        <div className='flex items-center gap-3'>
        <div className="border-2 border-[#d6d2d2] items-center px-2 h-11 w-90 flex  rounded-xl">
             <img className='h-6' src="src/search.png" alt="" />
             <h4 className='text-[#a4a4aa] mx-2'>Search for events,movies and restaurant</h4>
        </div>
        <img className='h-10' src="src/ix--user-profile-filled.png" alt="" />
        </div>
      </div>
    </div>
  )
}


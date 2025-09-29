import React from 'react'

export default function Footer() {
  return (
  <div>
     <h4 className="mx-30 text-3xl font-semibold">Artists in your District</h4>
     <div className="flex justify-center mx-20 text-center my-10 ">
        <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img15.png" alt="" />
           <h4 className="text-xl my-3 font-medium">Anna Erhard</h4>
        </div>
         <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img16.jpg" alt="" />
           <h4 className="text-xl my-3 font-medium">Euphoria</h4>
        </div>
         <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img17.jpg" alt="" />
           <h4 className="text-xl my-3 font-medium">Shalish Lodha</h4>
        </div>
        <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img18.png" alt="" />
           <h4 className="text-xl  my-3 ont-medium">Anna Erhard</h4>
        </div>
        <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img19.jpg" alt="" />
           <h4 className="text-xl my-3 font-medium">Reble</h4>
        </div>
        <div>
           <img className="h-50 mx-4 w-50 rounded-full" src="src/img20.png" alt="" />
           <h4 className="text-xl my-3 font-medium">Sheck Wes</h4>
        </div>
     </div>
      <div className="bg-[#1e1e20] text-white px-10 py-20 h-85">      
      <div className="flex justify-between items-center">
        <img className="h-18" src="src/logo2.svg" alt="Logo" />
        <div className="cursor-pointer flex gap-8">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>List your events</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-25 w-25" src="src/scaner.svg" alt="" />
          <p className="text-sm mt-1 text-gray-300">Scan to download the app</p>
        </div>
      </div>
      <div className="border-t border-gray-600 my-10"></div>
      <div className="flex justify-between items-center text-gray-400 text-sm">
        <p> By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
        <div className='flex gap-8'>
        <img className='h-7' src="src/13.svg" alt="" />
        <img className='h-7' src="src/14.png" alt="" />
        <img className='h-7' src="src/15.webp" alt="" />
        <img className='h-7' src="src/16.png" alt="" />
        <img className='h-7' src="src/17.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
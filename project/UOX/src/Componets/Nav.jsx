import React from 'react'

export default function Nav() {

  return (
    <div className="flex items-center   p-4 px-10 justify-between ">
      <img  src="src/103.png" alt="logo" className="h-7" />

       <div className="border-2 flex justify-between items-center  rounded-sm border-[#ededed] h-12 w-106 px-2">
        <div className="flex gap-2">
          <img class="h-6" src="src/search.png" alt="" />
          <p class="font-lg text-[#71767a]">Search products...</p>
        </div>
        <div className='flex'>
          <p class="font-lg text-[#71767a]">All Category</p>
          <img class="h-3 mx-1 my-2" src="src/102.svg" alt="" />
        </div>
      </div>
      <div className="flex">
         <a class="mx-4 font-medium hover:underline" href="">HOME</a>
         <a class="mx-4 font-medium hover:underline" href="">SHOP</a>
         <a class="mx-4 font-medium hover:underline" href="">BLOG</a>
         <a class="mx-4 font-medium hover:underline" href="">PAGES</a>
         <a class="mx-4 font-medium hover:underline" href="https://uomo-html.flexkitux.com/Demo9/about.html">ABOUT</a>
         <a class="mx-4 font-medium hover:underline" href="https://uomo-html.flexkitux.com/Demo9/contact.html">CONTACT</a>
      </div>
      <div className="flex">
        <img className='h-7 mx-4' src="src/profile.png" alt="" />
        
        <a href="https://uomo-html.flexkitux.com/Demo9/account_wishlist.html"><img className='h-7 mx-4' src="src/like.png" alt="" /></a>
        <img className='h-7 mx-4' src="src/bag.png" alt="" />
        <img className='h-7 mx-4' src="src/menu.png" alt="" />
      </div>
    </div>
  );
}

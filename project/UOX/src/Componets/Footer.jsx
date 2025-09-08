import React from 'react'

export default function Footer() {
  return (
    <div>
        <p className='text-center text-3xl font-semibold text-[#181a5c]'>DON'T MISS THE CHANGE TO GET 40% OFF</p>
        <h5 className='text-center text-[#a09a94] my-4'>Get the latest products and news update daily in fastest.</h5>
        <div className="flex justify-center">
            <input type="text" placeholder='Your email address' className='border border-gray-300 h-12 w-130 px-5' />
            <a href="https://uomo-html.flexkitux.com/Demo9/index.html?email="><button className='h-12 w-40 bg-[#131f45] mx-5 text-white'>Join</button></a>
        </div>

        <div className="flex justify-evenly my-10">
           <div>
             <img src="src/103.png" alt="" />
             <p className='text-[#827977] my-5'>1418 River Drive, Suite 35 Cottonhall, CA 9622 United <br/> States</p>
             <h4 className='text-[#827977] '>sale@uomo.com <br/>+1 246-345-0695</h4>
           </div>
           <div>
            <h4 className='text-xl text-[#153661] font-semibold'>COMPANY</h4>
            <h4 className='my-5 text-sm'>About Us</h4>
            <h4 className='my-5 text-sm'>Careers</h4>
            <h4 className='my-5 text-sm'>Affiliates</h4>
            <h4 className='my-5 text-sm'>BLog</h4>
            <h4 className='my-5 text-sm'>Contact Us</h4>
           </div>
            <div>
            <h4 className='text-xl text-[#153661] font-semibold'>SHOP</h4>
            <h4 className='my-5 text-sm'>New Arrivals</h4>
            <h4 className='my-5 text-sm'>Accessories</h4>
            <h4 className='my-5 text-sm'>Men</h4>
            <h4 className='my-5 text-sm'>Women</h4>
            <h4 className='my-5 text-sm'>Shop All</h4>
           </div>
            <div>
            <h4 className='text-xl text-[#153661] font-semibold'>HELP</h4>
            <h4 className='my-5 text-sm'>Customer Service</h4>
            <h4 className='my-5 text-sm'>My Account</h4>
            <h4 className='my-5 text-sm'>Find a Store</h4>
            <h4 className='my-5 text-sm'>Legal & Privacy</h4>
            <h4 className='my-5 text-sm'>Contact</h4>
            <h4 className='my-5 text-sm'>Gift Card</h4>
           </div>
            <div>
            <h4 className='text-xl text-[#153661] font-semibold'>OPENING TIME</h4>
            <h4 className='my-5 text-sm'>Mon - Fri: 8AM - 9PM</h4>
            <h4 className='my-5 text-sm'>Sat: 9AM - 8PM</h4>
            <h4 className='my-5 text-sm'>Sun: Closed</h4>
           </div>
        </div>
       <div className="border border-[#e6e6e6] my-10"></div>
        <div className="flex justify-between mx-20 text-[#929597] my-8 ">
          <div>
            <h4>©2023 Uomo</h4>
          </div>
            <div className='flex '>
            <p>United Kingdom | English</p>
            <h4 className='mx-5'>$ USD</h4>
            </div>
        </div>
    </div>
  )
}

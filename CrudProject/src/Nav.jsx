import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {  
  return (
    <div className="shadow-lg cursor-pointer h-20 flex justify-evenly items-center bg-white">
      <img src="src/logo.png" alt="Logo" className="h-12" />
      <div className="flex items-center">
        <h4 className="mx-4 text-base font-bold hover:underline">MEN</h4>
        <h4 className="mx-4 text-base font-bold hover:underline">WOMEN</h4>
        <h4 className="mx-4 text-base font-bold hover:underline">KIDS</h4>
        <Link to="/" className="mx-4 text-base font-bold hover:underline">HOME</Link>
        <h4 className="mx-4 text-base font-bold hover:underline">BEAUTY</h4>
        <h4 className="mx-4 text-base font-bold hover:underline">GENZ</h4>
        <h4 className="mx-4 text-base font-bold hover:underline">STUDIO</h4>
      </div>

      <div className="bg-[#f5f5f5] h-10 py-2 px-3 w-96 rounded-sm flex items-center">
        <img className="h-5" src="src/search.png" alt="Search" />
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="bg-transparent text-sm text-[#828282] px-3 outline-none w-full"
        />
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mx-4">
          <img className="h-4 mb-1" src="src/profile.png" alt="Profile" />
          <h4 className="font-semibold text-sm">Profile</h4>
        </div>

        <div className="flex flex-col items-center mx-4">
          <img className="h-4 mb-1" src="src/like.png" alt="Wishlist" />
          <h4 className="font-semibold text-sm">Wishlist</h4>
        </div>

        <div className="flex flex-col items-center mx-4">
          <Link to="/bag">
            <img className="h-4 mb-1" src="src/bag.png" alt="Bag" />
            <h4 className="font-semibold text-sm">Bag</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

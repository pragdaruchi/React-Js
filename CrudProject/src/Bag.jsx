import React, { useEffect, useState } from 'react';

export default function Bag() {
  const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0); 
  
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(allData);
  }, []);

  const handleDelete = (id) => {
    const newData = cart.filter((item) => item.id != id);
    setCart(newData);
    localStorage.setItem('cart', JSON.stringify(newData));
  };

  return (
    <div className="flex justify-evenly mx-20 flex-wrap gap-4 py-10">
      {
        cart.map((e, i) => (
          <div key={i} className="w-64 h-110 shadow rounded-xl overflow-hidden transition-transform duration-300">
            <img src={e.image} alt={e.title} className="w-64 h-70 object-cover" />
            <div className="p-3 py-3">
              <h2 className="text-base font-semibold py-0.5">{e.title}</h2>
              <p className="text-sm text-gray-600 py-0.5">{e.age}</p>
              <h3 className="font-semibold py-0.5">{e.price}</h3>
              <button onClick={() => handleDelete(e.id)} className="mt-2 px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-red-600 transition">Remove</button>
            </div>
          </div>     
        ))
      }
    </div>
  );
}

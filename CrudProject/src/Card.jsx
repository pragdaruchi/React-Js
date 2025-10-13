import React from "react";

export default function Card({ movies }) {
  const AddtoCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="flex justify-evenly mx-20 flex-wrap gap-4 py-10">
      {movies.map((e, i) => (
        <div key={i} className="w-64 h-110 shadow rounded-xl overflow-hidden transition-transform duration-300">
          <img src={e.image} alt={e.title} className="w-64 h-70 object-cover" />
          <div className="p-3 py-3">
            <h2 className="text-base font -semibold py-0.5">{e.title}</h2>
            <p className="text-sm text-gray-600 py-0.5">{e.age}</p>
            <h3 className="font-semibold py-0.5">{e.price}</h3>
            <button onClick={() => AddtoCart(e)} className="mt-2 px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

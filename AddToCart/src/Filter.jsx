//   // const movies = JSON.parse(localStorage.getItem("movies")) || [
//   //   { id: 1, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/11.jpg" },
//   //   { id: 2, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/12.jpg" },
//   //   { id: 3, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/13.jpg" },
//   //   { id: 4, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/101.jpg" },
//   //   { id: 5, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/15.jpg" },
//   // ];

//   // const movies1 = JSON.parse(localStorage.getItem("movies1")) || [
//   //   { id: 6, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/104.jpg" },
//   //   { id: 7, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/111.jpg" },
//   //   { id: 8, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/106.jpg" },
//   //   { id: 9, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/107.jpg" },
//   //   { id: 10, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/108.jpg" },
//   // ];

//   // const movies2 = JSON.parse(localStorage.getItem("movies2")) || [
//   //   { id: 11, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/102.jpg" },
//   //   { id: 12, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/103.jpg" },
//   //   { id: 13, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/16.jpg" },
//   //   { id: 14, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/105.jpg" },
//   //   { id: 15, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/15.jpg" },
//   // ];

import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Filter() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const initialProducts = [
      { id: 1, title: "Wireless Mouse", price: 15.99, category: "Computer Accessories", image: "https://m.media-amazon.com/images/I/61RgUtmRymL.jpg" },
      { id: 2, title: "Gaming Keyboard", price: 49.99, category: "Computer Accessories", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl77HVOlnUf2Mz9n-4kU6_KEdFIbeT-DSJxQ&s" },
      { id: 3, title: "Bluetooth Speaker", price: 29.99, category: "Audio", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s" },
      { id: 4, title: "Smartwatch", price: 79.99, category: "Wearables", image: "https://gourban.in/cdn/shop/files/Rage_b58c11d0-c9e2-4332-b7ee-dcb265fe0170.png?v=1705564157&width=2048" },
      { id: 5, title: "USB-C Charger", price: 12.99, category: "Mobile Accessories", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIgDgI4XfSr6_-fKfse_5ASZa7ZoYR4ar_Q&s" },
      { id: 6, title: "Noise Cancelling Headphones", price: 99.99, category: "Audio", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2AiaiUrgWOtooVJhHeG_gbwqi9Ocr88nmA&s" },
      { id: 7, title: "Fitness Band", price: 49.5, category: "Wearables", image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/263853_0_xfgsey.png?tr=w-400" },
      { id: 8, title: "Laptop Stand", price: 25.99, category: "Office Accessories", image: "https://symplify.in/cdn/shop/products/Wooden-Laptop-Stand-Opt3-3_1024x1024.jpg?v=1658253933" },
      { id: 9, title: "Tablet Case", price: 16.99, category: "Mobile Accessories", image: "https://oliveplanet.in/cdn/shop/files/tactical_molle_tablet_case_black_front_1280x.jpg?v=1687513453" },
      { id: 10, title: "VR Headset", price: 199.99, category: "Gaming", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxH1Jmgf08s-nG3Gn2jp_hNpu34jttWmIRg&s" },
      { id: 11, title: "Smartphone Tripod", price: 18.99, category: "Photography", image: "https://ewindia.in/wp-content/uploads/2023/06/41NPQAhxOWS._SL1500_.jpg" },
      { id: 12, title: "LED Desk Lamp", price: 22.49, category: "Home & Office", image: "https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg" },
      { id: 13, title: "Power Bank", price: 19.99, category: "Mobile Accessories", image: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/x/i/xiaomi_4i_10000mah_power_bank_classic_black_bhr8815in_.jpg" },
      { id: 14, title: "Wireless Earbuds", price: 39.99, category: "Audio", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cFJaZ1lGZHFKcGJsSXgrL2F5L1JHUWtuVHYzMERCZURia3c5SzJFOTlPaHhNQ0ZhdnU4OTFpbitJRmo4UW5zYUxSUlVvWjUwQnQyV1pJd0R5enZ6RFE" },
      { id: 15, title: "External Hard Drive", price: 59.99, category: "Storage Devices", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq-nxXBMVFF2M7uyhjgFKV0Xq0k6XQkJBCA&s" },
    ];

    setProducts(initialProducts);
    localStorage.setItem("products", JSON.stringify(initialProducts));
  }, []);

  const searchedData = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

 const filteredData = [...searchedData].filter((item)=>{
    if(cat=="all"){
      return item
    }else{
      return item.category == cat;
    }
  })

  const sortedData = [...filteredData].sort((a,b)=>{
    if(sort=="asc"){
      return a.price - b.price
    }else{
      return b.price - a.price;
    }
  })
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap p-4">
        <input type="text" value={search} placeholder="Search..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" onChange={(e) => setSearch(e.target.value)}/>
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">          <option value="all">All</option>
          <option value="Computer Accessories">Computer Accessories</option>
          <option value="Audio">Audio</option>
          <option value="Wearables">Wearables</option>
          <option value="Mobile Accessories">Mobile Accessories</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
          <option value="">Sort</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <Card movies={sortedData} />
    </>
  );
}
  import React from 'react'
  import Nav from './Nav'
  import Menu from './Menu'
  import Card from './Card'
  import Footer from './Footer'
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Bag from './Bag'

  const movies = [
    { id: 1, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/11.jpg" },
    { id: 2, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/12.jpg" },
    { id: 3, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/13.jpg" },
    { id: 4, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/101.jpg" },
    { id: 5, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/15.jpg" },
  ];
    const movies1 = [
    { id: 6, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/104.jpg" },
    { id: 7, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/111.jpg" },
    { id: 8, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/106.jpg" },
    { id: 9, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/107.jpg" },
    { id: 10, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/108.jpg" },
  ];

    const movies2 = [
    { id: 11, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.844", image: "src/102.jpg" },
    { id: 12, title: "Timex", age: "Women Analogue Watch", price: "Rs.1782", image: "src/103.jpg" },
    { id: 13, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/16.jpg" },
    { id: 14, title: "Timex", age: "Men Bracelet Analogue Watch", price: "Rs.1677", image: "src/105.jpg" },
    { id: 15, title: "DressBerry", age: "Women Watches Gift Set", price: "Rs.775", image: "src/15.jpg" },
  ];

  function Home() {
    return (
      <>
        <Menu />
        <div className='my-7'>
          <Card movies={movies} />
        </div>
        <div>
          <Card movies={movies1} />
        </div>
        <div>
          <Card movies={movies2} />
        </div>
        <Footer />
      </>
    )
  }

  export default function App() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/bag' Component={Bag}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

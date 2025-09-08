import React from 'react'
import Nav from "./Componets/Nav";
import Design from './Componets/Design';
import Product from './Componets/Product';
import Footer from './Componets/Footer';
import Room from './Componets/Room';
import Asos from './Componets/Asos';

export default function () {
  return (
    <div>
      <Nav/>
      <Design/>
      <Product/>
      <Room/>
      <Asos/>
      <Footer/>
    </div>
  )
}

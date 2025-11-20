import React from 'react'
import Nav from '../Nav'
import Menu from '../Menu'
import Bag from '../Bag'
import Filter from '../Filter'
import Footer from '../Footer'

export default function DashBoard() {
  return (
    <div>
      <Nav/>
      <Menu/>
      <Bag/>
      <Filter/>
      <Footer/>
    </div>
  )
}

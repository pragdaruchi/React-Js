import React from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import Filter from "./Filter";
import Bag from "./Bag";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={
            <>
              <Nav />
              <Menu />
              <Filter />
              <Footer />
            </>}
        />

        <Route path="/bag" element={
            <>
              <Nav />
              <Bag />
            </>
          }/>
      </Routes>
    </BrowserRouter>
  );
}
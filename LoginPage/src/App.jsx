import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Sign";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Sign} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

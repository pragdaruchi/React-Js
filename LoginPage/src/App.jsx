import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Sign";
import Login from "./Login";
import Dashboard from "./Dashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Sign} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
}
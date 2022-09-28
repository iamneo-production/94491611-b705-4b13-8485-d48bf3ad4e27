import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddOn from './components/AddOn';
import History from './components/History';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Registration from './components/Registration';
import Navbar from './components/Screen/Navbar'

function App() {

  return (
      <Router>  
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/AddOn" element={<AddOn />} />
      <Route path="/History" element={<History />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

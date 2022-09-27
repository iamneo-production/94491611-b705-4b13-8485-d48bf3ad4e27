import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './index.js';

import AddOn from './components/AddOn';
import History from './components/History';
import Home from './components/Home';
import Login from './components/Login';
import PopularPlan from './components/PopularPlan';
import Profile from './components/Profile';
import Registration from './components/Registration';

function App() {

  return (
<<<<<<< HEAD
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
      <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/PopularPlan" element={<PopularPlan />} />
      <Route path="/AddOn" element={<AddOn />} />
      <Route path="/History" element={<History />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
>>>>>>> 9087a7f6955dc1b7c72386ee47d6293a618d3aff
  );
}


export default App;

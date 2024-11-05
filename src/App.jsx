// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> {/* Add Navbar here so it appears on all pages */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
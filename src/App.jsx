import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Services from './container/Services';
import Contact from './container/Contact';
import Gallery from './container/Gallery';
import Navbar from './components/Navbar';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="navbar" element={<Navbar />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Home />
    </>
  );
}

export default App;

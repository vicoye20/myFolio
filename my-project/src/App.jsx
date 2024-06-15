import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import React from "react"
import Home from "./Home"
import About from './About';
import Contact from './Contact';
import Project from './Project';

function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

import React from "react";
import {Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"


function App() {
  return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Kalvium ❤️</Link>
              </li>
              <div className="last">
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
              <li>
                <Link to="/about">Register</Link>
              </li>
              </div>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
  );
}

export default App;
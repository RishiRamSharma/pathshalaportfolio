import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/components/pages/Review.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/pathshalaportfolio" className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

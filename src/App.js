import React from "react";
import Navbar from "./components/nav";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Photos from "./components/photography";
import Videos from "./components/videography";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Photos />
      <Videos />
      <Contact />
    </>
  );
}

export default App;

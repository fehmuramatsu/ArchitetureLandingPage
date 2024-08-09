import React from "react";
import Consultation from "./components/Consultation";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <Consultation />
    </>
  );
};

export default App;

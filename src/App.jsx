import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import CuisineGrid from "./components/CuisineGrid";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      <CuisineGrid />
      <Footer />
    </div>
  );
}

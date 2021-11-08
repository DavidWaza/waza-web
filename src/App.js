import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home  from "./components/pages/HomePage/Home";
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

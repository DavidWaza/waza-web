import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/pages/Footer";
import SignIn from "./components/pages/SignIn";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route  path="/" component={Home} exact/>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/SignIn" component={SignIn} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;

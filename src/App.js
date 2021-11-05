import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home  from "./components/pages/HomePage/Home";
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

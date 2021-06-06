import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
    </div>
    <div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

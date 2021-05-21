import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Services" exact component={Services}></Route>
            <Route path="/Products" exact component={Products}></Route>
            <Route path="/SignUp" exact component={SignUp}></Route>
          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Slide from "./components/Slide";
import Cardholder from "./components/Card";
import Forms from "./components/Forms";

import {} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <br />
      <Slide />
      <br />
      <Cardholder />
      <br />
      <Forms />
    </div>
  );
}

export default App;

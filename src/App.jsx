import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Homepage";

export default function App(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Route exact path="/card" component={() => <Cart />} />
        <Route exact path="/" component={() => <Home />} />
      </div>
    </div>
  );
}

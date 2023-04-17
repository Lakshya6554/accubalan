import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Login from "./componets/login/login";
import Signup from "./componets/signup/signup";
import Home from "./home";
import Service from "./service";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";
import Expensetracker from "./componets/expensetracker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invoiceform from "./componets/Invoiceform";

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/invoice" element={<Invoiceform />} />
          <Route path="/expensetracker" element={<Expensetracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

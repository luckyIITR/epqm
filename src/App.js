import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Committee from "./components/Committee";
import Speakers from "./components/Speakers";
import Programs from "./components/Programs";
import Papersubmission from "./components/Papersubmission";
import Sponsors from "./components/Sponsors";
import Scope from "./components/Scope";
import Dates from "./components/Dates";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/papersubmission" element={<Papersubmission />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/dates" element={<Dates />} />
      </Routes>
    </Router>
  );
}

export default App;

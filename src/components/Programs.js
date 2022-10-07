import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Programpdf from "./ProgramsCompo/Programpdf";
import Footer from "./Homecompo/Footer";

function Programs() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <div className="container mt-5">
        <p className="text-center h2 pt-3 mb-5 font-weight-bold">Program</p>
        <Programpdf />
      </div>
      <Footer />
    </div>
  );
}

export default Programs;

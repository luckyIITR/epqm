import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Footer from "./Homecompo/Footer";
import Datecomp from "./Datecompo/Datecomp";

function Dates() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Datecomp />
      <Footer />
    </div>
  );
}

export default Dates;

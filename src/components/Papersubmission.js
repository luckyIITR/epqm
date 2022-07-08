import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Footer from "./Homecompo/Footer";
import Papercomp from "./Papersubmissioncompo/Papercomp";

function Papersubmission() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Papercomp />
     
      <Footer />
    </div>
  );
}

export default Papersubmission;

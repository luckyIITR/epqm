import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";

import Footer from "./Homecompo/Footer";
import Scopecomp from "./Scopecompo/Scopecomp";

function About() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Scopecomp />
      <Footer />
    </div>
  );
}

export default About;

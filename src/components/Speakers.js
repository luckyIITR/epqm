import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Footer from "./Homecompo/Footer";
import Speakercomp from "./Speakercompo/Speakercomp";

function Speakers() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Speakercomp />
      <Footer />
    </div>
  );
}

export default Speakers;

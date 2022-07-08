import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import logo from "./images/logo.png";

import Footer from "./Homecompo/Footer";

function About() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <div className="container" style={{ height: "50vh" }}>
        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={logo} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

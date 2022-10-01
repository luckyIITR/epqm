import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import logo from "./images/logo.png";
import logo2 from "./images/serb_logo.png";
import thermo from "./images/ThermoFisher.webp";
import brns from "./images/BRNS.jpg";
import oxford from "./images/oxford.png";
import Footer from "./Homecompo/Footer";
import ir from "./images/IR_Tech.png";
function About() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <div className="container">
        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={logo} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
        <br />
        <br />

        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={brns} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
        <br />
        <br />

        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={oxford} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
        <br />
        <br />

        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={thermo} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
        <br />
        <br />

        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={logo2} alt="IITR" className="sponsor-logo" />
          </div>
        </div>

        <div className="row justify-content-around pt-5 mt-5">
          <div className="col-md-6">
            <img src={ir} alt="IITR" className="sponsor-logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

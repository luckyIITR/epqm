import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Regsiter from "./Registrationcompo/Register";
import Footer from "./Homecompo/Footer";

function Registration() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Regsiter />
      <Footer />
    </div>
  );
}

export default Registration;

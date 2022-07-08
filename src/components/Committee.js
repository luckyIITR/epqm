import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Committeecompo from "./Committeecompo/committeecompo";
import Footer from "./Homecompo/Footer";

function Committee() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Committeecompo />
      <Footer />
    </div>
  );
}

export default Committee;

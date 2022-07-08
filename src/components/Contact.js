import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Contactcompo from "./Contactcompo/con";
import Footer from "./Homecompo/Footer";

function Home() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <Contactcompo />
      <Footer />
    </div>
  );
}

export default Home;

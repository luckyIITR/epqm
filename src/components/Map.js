import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import MapFile from "./MapCompo/MapFile";
import Footer from "./Homecompo/Footer";

function Home() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <MapFile />
      <Footer />
    </div>
  );
}

export default Home;

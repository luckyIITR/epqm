import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import PosterFile from "./PosterCompo/PosterFile";
import Footer from "./Homecompo/Footer";

function Home() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <PosterFile />
      <Footer />
    </div>
  );
}

export default Home;

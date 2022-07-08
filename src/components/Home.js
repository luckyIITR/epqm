import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import TextBox from "./Homecompo/TextBox";
import AboutIIT from "./AboutCompo/AboutIIT";
import AboutCon from "./AboutCompo/AboutCon";
import AboutRoorkee from "./AboutCompo/AboutRoorkee";
import About175 from "./AboutCompo/About175";
import Footer from "./Homecompo/Footer";

function Home() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
        <TextBox />
      </div>
      <AboutCon />
      <AboutIIT />
      <About175 />
      <AboutRoorkee />
      <Footer />
    </div>
  );
}

export default Home;

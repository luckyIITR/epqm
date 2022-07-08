import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="bg-dark mt-5 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="iitr Logo" className="footerlogo" />
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="p-1">
          <p className="text-center text-light">Copyright 2022, IIT Roorkee</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
import logo2 from "../images/logo.png";

function Logo() {
  return (
    <div className="row pt-4 mr-md-4 ml-md-4 bg-light">
      <div className="col-md-4">
        <Link to="/">
          <img src={logo} alt="" className="logoImage" />
        </Link>
      </div>
      <div className="col-md-8 row">
        <div className="col">
          <p className="text-center title">E-QMAT</p>
        </div>
        <div className="col row justify-content-center">
          <Link to="/">
            <img src={logo2} alt="" className="iitrlogo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logo;

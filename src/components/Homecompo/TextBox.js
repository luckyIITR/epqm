import React from "react";
import { Link } from "react-router-dom";

function TextBox() {
  return (
    <div className="carouselImage">
      <div className="container pt-5 text-white text-center">
        <p
          style={{ lineHeight: "normal" }}
          className="h1 font-weight-bold text-center"
        >
          CONFERENCE
          <br /> ON <br />
          EMERGENT PHENOMENA IN QUANTUM MATERIALS
        </p>

        <p id="iit" style={{ lineHeight: "normal" }} className="mt-5">
          Organized by
        </p>
        <p id="iit" style={{ lineHeight: "normal", fontWeight: "bold" }}>
          Department of Physics, IIT Roorkee
        </p>
        <div>
          <span className="date p-2">October 12-14, 2022</span>
        </div>

        <Link to="/Registration" className="btnm mt-5">
          Register Now &#8594;
        </Link>
        <div className="row justify-content-center">
          <div className="col col-md-11 margin m-2 m-md-0 p-md-2">
            <p className="text-center font-weight-bold h5">
              The conference proceedings are likely to be published online in
              the Journal of Physics Conference Series (IOP Publishing).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextBox;

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
          Conference
          <br /> on <br />
          Emergent phenomena in Quantum MATerials <br /> (E-QMAT) 2022
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

        {/* <Link to="/papersubmission" className="btnm mt-5">
          Abstract Submission &#8594;
        </Link>
        <div className="row justify-content-center">
          <div className="col col-md-11 m-2 m-md-0 p-md-2">
            <p className="text-center font-weight-bold h5 text-warning">
              *Abstract Submssion Deadline is extended to August 30, 2022.*
            </p>
          </div>
        </div> */}
        <div className="row justify-content-center mt-5">
          <div className="col col-md-11 margin m-2 m-md-0 p-md-2">
            <p className="text-center font-weight-bold h5">
              The conference proceedings will be published online in the Journal
              of Physics: Conference Series (IOP Publishing) after the peer
              review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextBox;

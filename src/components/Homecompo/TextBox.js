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

        {/* <div className="row justify-content-center">
          <div className="col-md-5 card p-3 m-2 m-md-4">
            <h5 className="card-title font-weight-bold">
              {value.name} <cite title="Source Title">{value.title}</cite>
            </h5>
            <p>{value.affiliated}</p>
          </div>
        </div> */}

        <div className="d-flex justify-content-center p-2">
          <Link type="button" className="btn btn-danger" to="/poster">
            Poster Schedule &#8594;
          </Link>
        </div>

        <div className="d-flex justify-content-center p-2">
          <Link type="button" className="btn btn-danger" to="/map">
            Map &#8594;
          </Link>
        </div>

        <div className="d-flex justify-content-center p-2 mb-4">
          <Link type="button" className="btn btn-danger" to="/contact">
            Important Contacts &#8594;
          </Link>
        </div>
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

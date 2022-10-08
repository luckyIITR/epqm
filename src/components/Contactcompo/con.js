import React from "react";

function con() {
  return (
    <div className="container mt-5">
      <p className="text-center h2 pt-3 mb-5 font-weight-bold">
        Contact Information
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6 card m-2 p-3 mb-md-4 mb-3">
          <p className="font-weight-bold">
            For any query please write to &nbsp;
            <a href="mailto:e-qmat@iitr.ac.in">e-qmat@iitr.ac.in</a>
          </p>
          <p>
            Department of Physics <br /> IIT Roorkee <br /> Roorkee-247667
            <br />
            Uttarakhand <br /> India
          </p>
        </div>
      </div>
      <p className="text-center h2 pt-3 mb-5 font-weight-bold">
        Important Phone Numbers
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6 card m-2 p-3 mb-md-4 mb-3">
          <p className="font-weight-bold">
            Accommodation: <br /> Student volunteers: <br />
          </p>
          <p>
            Mr. Pravesh Chandra: +91 89297 21084‬ <br /> Mr. Brij Mohan: +91
            85868 98136‬ <br /> Mr. Mohit Madaan: +91 90017 93581‬, +91 80001
            85553‬
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 card m-2 p-3 mb-md-4 mb-3">
          <p className="font-weight-bold">
            Transport: <br /> Travel Agent: +91 98372 41590‬
          </p>
          <p className="font-weight-bold">Student volunteers:</p>
          <p>
            Mr. Mohd Anas: +91 70172 56560‬ <br />
            Mr. Mukesh Kumar Sharma: +91 94527 39064, ‎+91 81267 59494
          </p>
        </div>
      </div>

      {/* <div className="row justify-content-between">
        <div className="col-sm-1"></div>
        <div className="col-sm-3 card m-2">
          <p className="font-weight-bold mt-3">Tulika Maitra</p>
          <p>tulika.maitra@ph.iitr.ac.in</p>
        </div>
        <div className="col-sm-3 card m-2">
          <p className="font-weight-bold mt-3">Vivek K. Malik</p>
          <p>vivek.malik@ph.iitr.ac.in</p>
        </div>
        <div className="col-sm-1"></div>
      </div> */}
    </div>
  );
}

export default con;

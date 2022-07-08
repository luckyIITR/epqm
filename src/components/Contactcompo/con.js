import React from "react";

function con() {
  return (
    <div className="container mt-5" style={{ height: "80vh" }}>
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

import React from "react";

function Register() {
  return (
    <div className="container mt-5 pt-5" style={{ height: "60vh" }}>
      <p className="text-center h2">
        Process of Registration is currently going on. The registration link is already sent to the confirmed participants.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6 card m-3 mt-4 m-md-5 p-2 pt-3 p-md-5">
          <p>
            <span className="font-weight-bold">For Ph.D and Post - Doc</span>{" "}
            &emsp;: Rs 4000 /-
          </p>
          <p>
            <span className="font-weight-bold">For Faculty Members</span>
            &emsp; : Rs 5000/-
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

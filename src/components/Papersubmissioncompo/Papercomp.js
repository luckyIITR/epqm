import React from "react";

function Papercomp() {
  return (
    <div className="container mt-5" style={{ height: "70vh" }}>
      <p className="text-center h2 pt-3 mb-5 font-weight-bold">
        PAPER SUBMISSION
      </p>
      <div className="row justify-content-center">
        <div className="col-md-10 m-2 card p-md-4 p-3">
          <p className="text-justify">
            At this stage, we invite a two-page manuscript for submission
            through the following link. Authors of the accepted papers will be
            called for the presentation (oral and poster) during the conference.
            After the conference, selected papers will be invited for submission
            in the Journal of Physics Conference Series (IOP Publishing) as
            full-length (no page limit) articles which will be published online
            after the peer-review process.
          </p>
          <div className="d-flex justify-content-center pt-4 mb-3">
            <a
              class="btn btn-outline-primary"
              href="https://forms.gle/p4NXfvvwXBGSm4dM6"
              type="button"
              target="_blank"
              rel="noreferrer"
            >
              Paper Submission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Papercomp;

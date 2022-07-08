import React from "react";

var speakers = [
  {
    name: "Prof. Anthony James Leggett",
    affiliated: "University of Illinois at Urbana-Champaign, USA",
    // title: "Professor Nobel Laureate",
  },
  {
    name: "Prof. Albert Fert",
    affiliated: "Paris-Saclay University, Paris, France",
    // title: "Professor Nobel Laureate",
  },
  {
    name: "Prof. G. Baskaran",
    affiliated: "Institute of mathematical sciences, Chennai, India",
    // title: "Professor Bhatnagar awardee",
  },
  {
    name: "Prof. E V Sampathkumaran",
    affiliated: "Tata Institute of fundamental research, Mumbai, India",
  },
  //   {
  //     name: "Prof.  D D Sarma",
  //     affiliated: "Indian Institute of Science, Bangalore, India",
  //   },
  {
    name: "Prof. Arindam Ghosh",
    affiliated: "Indian Institute of Science, Bangalore, India",
  },
  {
    name: "Prof. Kalobaran Maiti",
    affiliated: "Tata Institute of fundamental research, Mumbai, India",
  },
  //   {
  //     name: "Prof. Pratap Raychaudhuri",
  //     affiliated: "Tata Institute of fundamental research, Mumbai, India",
  //   },
  {
    name: "Prof. R Ramesh",
    affiliated: "University of Berkeley, USA",
  },
  //   {
  //     name: "Prof. J C Seamus Davis",
  //     affiliated: "Oxford University, UK",
  //   },
];

function Speakercomp() {
  return (
    <div className="container mb-5 pd-5">
      <p className="h2 font-weight-bold text-center mt-5 mb-5">SPEAKERS</p>
      <p className="text-right">
        <cite title="Source Title">*Being Updated</cite>
      </p>
      <div className="row justify-content-center">
        {speakers.map((value, index) => {
          return (
            <div className="col-md-5 card p-3 m-2 m-md-4" key={index}>
              <p className="font-weight-bold">
                {value.name} <cite title="Source Title">{value.title}</cite>
              </p>
              <p>{value.affiliated}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Speakercomp;

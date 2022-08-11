import React from "react";

var speakers = [
  {
    name: "G. Baskaran",
    affiliated: "Institute of mathematical sciences, Chennai, India",
    // title: "sor Bhatnagar awardee",
  },
  {
    name: "Suvankar Chakraverty",
    affiliated: "INST Mohali",
  },
  {
    name: "Albert Fert",
    affiliated: "Paris-Saclay University, Paris, France",
    // title: "sor Nobel Laureate",
  },
  {
    name: "Arindam Ghosh",
    affiliated: "Indian Institute of Science, Bangalore, India",
  },
  {
    name: "Anil Jain",
    affiliated: "Bhaba Atomic Research centre (BARC), Mumbai, India",
  },
  {
    name: "Kalobaran Maiti",
    affiliated: "Tata Institute of fundamental research, Mumbai, India",
  },
  {
    name: "Anthony James Leggett",
    affiliated: "University of Illinois at Urbana-Champaign, USA",
    // title: "sor Nobel Laureate",
  },
  {
    name: "R Ramesh",
    affiliated: "University of Berkeley, USA",
  },

  {
    name: "E V Sampathkumaran",
    affiliated: "Tata Institute of fundamental research, Mumbai, India",
  },
  {
    name: "D. D. Sarma",
    affiliated: "Indian Institute of Science, Bangalore, India",
  },

  //   {
  //     name: " D D Sarma",
  //     affiliated: "Indian Institute of Science, Bangalore, India",
  //   },

  //   {
  //     name: "Pratap Raychaudhuri",
  //     affiliated: "Tata Institute of fundamental research, Mumbai, India",
  //   },

  {
    name: "Alok Shukla",
    affiliated: "Indian Institute of Technology, Bombay, India",
  },
  {
    name: "Kaushik Sen",
    affiliated: "Indian Institute of Technology, Delhi, India",
  },

  {
    name: "A. Taraphder",
    affiliated: "Indian Institute of Technology, Kharagpur, India",
  },
  {
    name: "S. M. Yusuf",
    affiliated: "Bhabha Atomic Research Center (BARC) Mumbai",
  },

  //   {
  //     name: "J C Seamus Davis",
  //     affiliated: "Oxford University, UK",
  //   },
];
// speakers.sort((a, b) => {
//   return a.name.split(" ").slice(-1)[0] < b.name.split(" ").slice(-1)[0];
// });
console.log(speakers);
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

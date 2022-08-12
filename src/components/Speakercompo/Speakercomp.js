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
  {
    name: "C. S. Yadav",
    affiliated: "Indian Institute of Technology, Mandi, India",
  },
  {
    name: "Brijesh Kumar",
    affiliated: "Jawaharlal Nehru University, India",
  },
  {
    name: "N.S. Vidhyadhiraja",
    affiliated:
      "Jawaharlal Nehru Centre For Advanced Scientific Research, India",
  },
  {
    name: "Sumiran Pujari",
    affiliated: "Indian Institute of Technology, Bombay, India",
  },
  {
    name: "Surjeet Singh",
    affiliated: "IISER Pune, India",
  },
  {
    name: "Rajendra Dhaka",
    affiliated: "Indian Institute of Technology, Delhi, India",
  },
  {
    name: "Subhankar Bedanta",
    affiliated: "NISER Bhubaneswar, India",
  },
  {
    name: "T. V. Ramakrishnan",
    affiliated: " IISc, India",
  },
  {
    name: "S. J. Ray",
    affiliated: "Indian Institute of Technology, Patna, India",
  },

  {
    name: "Siddharth Lal",
    affiliated: "IISER Kolkata, India",
  },
  {
    name: "Pratap Raychaudhuri",
    affiliated: "TIFR, India",
  },
  {
    name: "Elbio Dagotto",
    affiliated: "University of Tennessee, USA",
  },
  {
    name: "Tamalika Banerjee",
    affiliated: "University of Groningen",
  },
  {
    name: "Saikat Ghosh",
    affiliated: "Indian Institute of Technology, Kanpur, India",
  },

  //   {
  //     name: "J C Seamus Davis",
  //     affiliated: "Oxford University, UK",
  //   },
];
// speakers.sort((a, b) => {
//   return a.name.split(" ").slice(-1)[0] < b.name.split(" ").slice(-1)[0];
// });
function SortNames(data) {
  // for (let j = 0; j < data.length; j++) {
  //   let splited = data[j].name.split(" ");
  //   data[j]["last_name"] = splited[splited.length - 1];
  // }

  function compareObjects(object1, object2, key) {
    const obj1 = object1[key].toUpperCase();
    const obj2 = object2[key].toUpperCase();

    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  }

  data.sort((book1, book2) => {
    return compareObjects(book1, book2, "name");
  });
}

SortNames(speakers);
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
              <h5 className="card-title font-weight-bold">
                {value.name} <cite title="Source Title">{value.title}</cite>
              </h5>
              <p>{value.affiliated}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Speakercomp;

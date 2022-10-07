import React from "react";

var speakers = [
  {
    name: "G. Baskaran",
    affiliated: "Institute of Mathematical Sciences, Chennai, India",
    // title: "sor Bhatnagar awardee",
  },
{
    name: "Surendra Singh",
    affiliated: "Bhabha Atomic Research Center, Mumbai, India",
},
  {
    name: "Suvankar Chakraverty",
    affiliated: "Institute of Nano Science and Technology, Mohali, India",
  },
  {
    name: "Manuel Bibes",
    affiliated: "Laboratoire CNRS/ Thales de l'Université Paris-Saclay, France",
    // title: "sor Nobel Laureate",
  },
{
      name: "Peayush K. Choubey",
    affiliated: "Indian Institute of Technology Roorkee, India",
},
{
    name: "Debakanta Samal",
    affiliated: "Institute of Physics, Bhubaneswar, India",
},
  {
    name: "Arindam Ghosh",
    affiliated: "Indian Institute of Science, Bangalore, India",
  },
  {
    name: "Anil Jain",
    affiliated: "Bhaba Atomic Research Centre, Mumbai, India",
  },
  {
    name: "Kalobaran Maiti",
    affiliated: "Tata Institute of Fundamental Research, Mumbai, India",
  },
  {
    name: "Anthony James Leggett",
    affiliated: "University of Illinois at Urbana-Champaign, USA",
    // title: "sor Nobel Laureate",
  },
  {
    name: "R. Ramesh",
    affiliated: "University of Berkeley, USA",
  },

  {
    name: "E. V. Sampathkumaran",
    affiliated: "Tata Institute of Fundamental Research, Mumbai, India",
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
    affiliated: "Indian Institute of Technology Bombay, India",
  },
  {
    name: "Kaushik Sen",
    affiliated: "Indian Institute of Technology, Delhi, India",
  },

  {
    name: "Arghya Taraphder",
    affiliated: "Indian Institute of Technology Kharagpur, India",
  },
  {
    name: "S. M. Yusuf",
    affiliated: "Bhabha Atomic Research Center, Mumbai, India",
  },
  {
    name: "C. S. Yadav",
    affiliated: "Indian Institute of Technology Mandi, India",
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
    affiliated: "Indian Institute of Technology Bombay, India",
  },
  {
    name: "Saurabh Basu",
    affiliated: "Indian Institute of Technology Guwahati, India",
  },
{   name: "Kaustubh Priolkar",
    affiliated: "Goa University, India",
},
{    name: "Suhas Gangadharaiah",
     affiliated: "Indian Institute of Science Education and Research Bhopal, India",
},
{    name: "Kaushik Parida",
     affiliated: "Indian Institute of Technology Roorkee, India",
},
  {
    name: "Rajendra Dhaka",
    affiliated: "Indian Institute of Technology Delhi, India",
  },
  {
    name: "Subhankar Bedanta",
    affiliated: "National Institute of Science Education and Research Bhubaneswar, India",
  },
  {
    name: "T. V. Ramakrishnan",
    affiliated: " Indian Institute of Science Bangalore, India",
  },
  {
    name: "Saikat Das",
    affiliated: "Indian Institute of Technology Kharagpur, India",
  },

  {
    name: "Siddharth Lal",
    affiliated: "Indian Institute of Science Education and Research Kolkata, India",
  },
  {
    name: "Pratap Raychaudhuri",
    affiliated: "Tata Institute of Fundamental Research, Mumbai, India",
  },
  {
    name: "Elbio Dagotto",
    affiliated: "University of Tennessee, USA",
  },
  {
    name: "Tamalika Banerjee",
    affiliated: "University of Groningen, The Netherlands",
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

import React from "react";

var adv_com = [
  {
    name: "T. V. Ramakrishnan",
    insti: "Indian Institute of Science, Bangalore, India",
  },
  {
    name: "Elbio Dagotto",
    insti: "University of Tennesse & Oak Ridge National Laboratory, USA",
  },
  {
    name: "D. D. Sarma",
    insti: "Indian Institute of Science, Bangalore, India",
  },
  {
    name: "G. Baskaran",
    insti: "Institute of Mathematical Sciences, Chennai, India",
  },
  {
    name: "E. V. Sampathkumaran",
    insti: "Tata Institute of Fundamental Research, Mumbai, India",
  },
  {
    name: "R. Ramesh",
    insti: "University of California, Berkeley, USA",
  },
  {
    name: "Christian Bernhard",
    insti: "University of Fribourg, Switzerland",
  },
  {
    name: "A. Taraphder",
    insti: "Indian Institute of Technology, Kharagpur, India",
  },
  {
    name: "S. M. Yusuf",
    insti: "Bhabha Atomic Research Center (BARC) Mumbai",
  },
];

var tech_com = [
  {
    name: "Debraj Choudhury",
    insti: "Indian Institute of Technology, Kharagpur, India",
  },
  {
    name: "Dr. Anil Jain",
    insti: "Bhaba Atomic Research centre (BARC), Mumbai, India",
  },
  {
    name: "Kaushik Sen",
    insti: "Indian Institute of Technology, Delhi, India",
  },
  {
    name: "N. Mohanta",
    insti: "Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Vivek. K. Malik",
    insti: "Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "T. Maitra",
    insti: "Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Peayush K. Choubey",
    insti: "Indian Institute of Technology, Roorkee, India",
  },
];

var org_com = [
  {
    name: "G. D. Varma",
    insti:
      "Head, Dept. of Physics, Indian Institute of Technology, Roorkee, India",
    sufix: "(Chairman)",
  },
  {
    name: "T. Maitra",
    insti: "Dept. of Physics, Indian Institute of Technology, Roorkee, India",
    sufix: "(Convener)",
  },
  {
    name: "Vivek K. Malik",
    insti: "Dept. of Physics, Indian Institute of Technology, Roorkee, India",
    sufix: "(Convener)",
  },
  {
    name: "N. Mohanta",
    insti: "Dept. of Physics, Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Peayush K. Choubey",
    insti: "Dept. of Physics, Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Hem C. Kandpal",
    insti: "Dept. of Chemistry, Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Tapas K. Mandal",
    insti: "Dept. of Chemistry, Indian Institute of Technology, Roorkee, India",
  },
  {
    name: "Ramesh Chandra",
    insti: "Institute Instrumentation Centre, IIT Roorkee, India",
  },
  {
    name: "Himanshu Fulara",
    insti: "Dept. of Physics, Indian Institute of Technology, Roorkee, India",
  },
];

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

SortNames(adv_com);
SortNames(org_com);
SortNames(tech_com);
console.log(adv_com);
function committeecompo() {
  return (
    <div className="container mb-5 pb-5">
      <p className="h2 pt-5 mb-5 font-weight-bold">Patron</p>
      <div className="row">
        <div className="col-sm-3 card mr-4 p-4 mt-4">
          <h5 className="card-title font-weight-bold">A. K. Chaturvedi</h5>
          <p>Director, Indian Institute of Technology, Roorkee, India</p>
        </div>
      </div>

      {/* Advisory Committee */}
      <p className="h2 pt-5 mb-5 font-weight-bold">Advisory Committee</p>
      <div className="row">
        {adv_com.map((value, index) => {
          return (
            <div className="col-sm-3 card mr-4 p-4 mt-4" key={index}>
              <h5 className="card-title font-weight-bold">{value.name}</h5>
              <p>{value.insti}</p>
            </div>
          );
        })}
      </div>

      {/* Technical Committee */}

      <p className="h2 pt-5 mb-5 font-weight-bold">Technical Committee</p>
      <div className="row">
        {tech_com.map((value, index) => {
          return (
            <div className="col-sm-3 card mr-4 p-4 mt-4" key={index}>
              <h5 className="card-title font-weight-bold">{value.name}</h5>
              <p>{value.insti}</p>
            </div>
          );
        })}
      </div>

      {/* Organizing Committee */}

      <p className="h2 pt-5 mb-5 font-weight-bold">Organizing Committee</p>
      <div className="row">
        {org_com.map((value, index) => {
          return (
            <div className="col-sm-3 card mr-4 p-4 mt-4" key={index}>
              <h5 className="card-title font-weight-bold">{value.name}</h5>
              <p>
                {value.insti} <br />
                <span className="font-weight-bold">{value.sufix}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default committeecompo;

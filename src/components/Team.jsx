import React from "react";
import {Image} from "./image";

export const Team = (props) => {
  // Team data
  const teamData = [
    {
      name: "Pasindu Dharmagunwardhana",
      img: "path/to/alex-johnson-image.jpg",
      // job: "Product Manager",
    },
    {
      name: "Glen Anthick",
      img: "path/to/emily-white-image.jpg",
      // job: "Lead Developer",
    },
    {
      name: "Aveen  Peramunage",
      img: "path/to/michael-brown-image.jpg",
      // job: "Data Scientist",
    },
    {
      name: "Dewmini Abeywardhana",
      img: "path/to/sophia-taylor-image.jpg",
      // job: "Safety Engineer",
    },
    {
      name: "Deemantha Siriwardana",
      img: "path/to/sophia-taylor-image.jpg",
      // job: "Safety Engineer",
    },
    {
      name: "Nelum Amarasena",
      img: "path/to/sophia-taylor-image.jpg",
      // job: "Safety Engineer",
    },
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Our dedicated team works tirelessly to develop cutting-edge solutions for vehicle fire detection, severity assessment, optimal routing, and fire extinguisher deployment, ensuring safety and rapid response.
          </p>
        </div>

        <div id="row justify-content-md-center">
          {props.data
              ? props.data.map((d, i) => {
                return (
                    <div
                        key={`${d.name}-${i}`}
                        className="col-md-3 col-sm-6 col-lg-3 team"
                    >
                      <div className="thumbnail">
                        <img src={d.img} alt={d.name} className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                        </div>
                      </div>
                    </div>
                );
              })
              : "Loading..."}
        </div>


      </div>
    </div>
  );
};

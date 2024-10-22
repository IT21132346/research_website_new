import React from "react";

export const Features = (props) => {
  // Features data
  const featuresData = [
    {
      title: <strong>Vehicle Fire Alerts</strong>,
      icon: "fa fa-bell", // Replace with actual icon class
      text: "Provides real-time notifications of vehicle fires, enabling immediate response to potential hazards.",
    },
    {
      title: <strong>Fire Detection System</strong>,
      icon: "fa fa-fire", // Replace with actual icon class
      text: "Uses advanced sensors and algorithms to accurately detect fires within vehicles.",
    },
    {
      title: <strong>Fire Severity Analysis</strong>,
      icon: "fa fa-chart-bar", // Replace with actual icon class
      text: "Analyzes the detected fire's severity level to determine the necessary response, helping prioritize resources.",
    },
    {
      title: <strong>Optimal Route to Fire Location</strong>,
      icon: "fa fa-road", // Replace with actual icon class
      text: "Calculates the quickest and safest route to the fire location, ensuring faster response times for the fire brigade.",
    },
    {
      title: <strong>Automatic Fire Extinguisher Service</strong>,
      icon: "fa fa-fire-extinguisher", // Replace with actual icon class
      text: "Automatically deploys fire extinguishers to control vehicle fires efficiently before they spread further.",
    },
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>
            services
          </h2>
        </div>
        <div className="row">
          {featuresData.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className={`col-xs-6 col-md-3 ${
                d.title === <strong>Automatic Fire Extinguisher Service</strong>
                  ? "col-md-offset-3"
                  : ""
              }`}
            >
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

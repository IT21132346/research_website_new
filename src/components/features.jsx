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
      icon: "fa fa-line-chart", // Replace with actual icon class
      text: "Analyzes the detected fire's severity level to determine the necessary response, helping prioritize resources.",
    },
    {
      title: <strong>Provide Optimal Route </strong>,
      icon: "fa fa-map-marker", // Replace with actual icon class
      text: "Calculates the quickest and safest route to the fire location, ensuring faster response time.",
    },
    {
      title: <strong>Automatic Extinguishers</strong>,
      icon: "fa fa-fire-extinguisher", // Replace with actual icon class
      text: "Automatically deploys fire extinguishers to control vehicle fires efficiently before they spread further.",
    },
    {
      title: <strong>Mobile Application</strong>,
      icon: "fa fa-android", // Replace with actual icon class
      text: "Keep the Driver upto date  about the system also alert about the fire outbreaks.",
    },
    {
      title: <strong>Fire Department Alerts </strong>,
      icon: "fa fa-building", // Replace with actual icon class
      text: "alert the fire department ASAP and provide them realtime insights about the fire outbreak.",
    },
    {
      title: <strong>Detailed Dashboard</strong>,
      icon: "fa fa-dashboard", // Replace with actual icon class
      text: "Real-time fire incident reporting and all previous fire relates statistics will be available for fire department.",
    },
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            Features
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

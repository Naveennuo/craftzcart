import React from "react";
import "./OurTeam.css";
import founderImg from "../../assets/images/founder1.png";
import icon from "../../assets/images/icon.svg";

const row1 = [
  { type: "icon" },
  { type: "founder", name: "Aarav Sharma" },
  { type: "icon" },
];

const row2 = [
  { type: "founder", name: "Meera Patel" },
  { type: "founder", name: "Kunal Desai" },
  { type: "founder", name: "Priya Menon" },
  { type: "founder", name: "Ravi Reddy" },
];

const OurTeam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">The Hands Behind the Craft</h2>

      <div className="ourteam-row">
        {row1.map((item, index) =>
          item.type === "icon" ? (
            <img
              key={index}
              src={icon}
              alt="decorative icon"
              className="ourteam-icon"
            />
          ) : (
            <div className="team-wrapper" key={index}>
              <div className="team-card">
                <img src={founderImg} alt={item.name} className="team-image" />
                <div className="team-name">{item.name}</div>
              </div>
              <div className="founder-label">Founder</div>
            </div>
          )
        )}
      </div>

      <div className="ourteam-row">
        {row2.map((item, index) => (
          <div className="team-wrapper" key={index}>
            <div className="team-card">
              <img src={founderImg} alt={item.name} className="team-image" />
              <div className="team-name">{item.name}</div>
            </div>
            <div className="founder-label">Founder</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;

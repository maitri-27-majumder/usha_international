import React from "react";
import Members from "../components/Team/Members";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <div
        className="heading-container"
        style={{
          paddingTop: "160px",
        }}
      >
        <h2>Meet Our Team</h2>
      </div>
      <Members />
    </div>
  );
};

export default Team;

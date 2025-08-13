import React from "react";
import SKILS from "./skils";
import EXPERIENCE from "./experince";

function SkillsAndExperience({ tools, articles }) {
  return (
    <section
      style={{
        padding: "20px 0",
        marginTop: "40px",
      }}
    >

      {/* Side-by-Side Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // wraps on smaller screens
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "850px", // total container width
          margin: "0 auto",
        }}
      >
        {/* Skills Box */}
        <div
          style={{
            flex: "1 1 48%", // both take about half space
            border: "1px solid #0a0a0aff",
            borderRadius: "10px",
            padding: "15px",
            background: "#fefefeff",
            boxSizing: "border-box",
          }}
        >
          <SKILS tools={tools} />
        </div>

        {/* Experience Box */}
        <div
          style={{
            flex: "1 1 48%",
            border: "1px solid #0a0a0aff",
            borderRadius: "10px",
            padding: "15px",
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          <EXPERIENCE articles={articles} />
        </div>
      </div>
    </section>
  );
}

export default SkillsAndExperience;

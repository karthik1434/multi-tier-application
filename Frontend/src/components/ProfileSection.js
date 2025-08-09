import React from "react";
import ContactDetails from "./ContactDetails";
import "../App.css";

function ProfileSection() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "50px",
        marginBottom: "40px",
        flexWrap: "nowrap",
        border: "2px solid #396076",
        borderRadius: "10px",
        padding: "5px"
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <img
          src="http://localhost:1337/uploads/IMG_20250719_224747235_HDR_760f765281.jpg"
          alt="Karthik Duggana"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "8px",
            border: "3px solid #396076",
          }}
        />
      </div>

      <ContactDetails />
    </div>
  );
}

export default ProfileSection;

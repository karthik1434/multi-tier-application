import React from "react";
import ContactDetails from "./ContactDetails";
import "../App.css";

function ProfileSection() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "3vw",
        marginBottom: "40px",
        flexWrap: "wrap",
        border: "2px solid #396076",
        borderRadius: "10px",
        padding: "1vw",
        justifyContent: "center",

        width: "fit-content",  
        maxWidth: "100%",     
        margin: "0 auto",   
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <img
          src="http://localhost:1337/uploads/IMG_20250719_224747235_HDR_760f765281.jpg"
          alt="Karthik Duggana"
          style={{
            width: "20vw",
            maxWidth: "150px",
            minWidth: "120px",
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

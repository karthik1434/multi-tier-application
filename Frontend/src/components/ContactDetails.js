import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaBirthdayCake, FaVenusMars, FaCity, FaGlobe } from "react-icons/fa";

function ContactDetails() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gap: "25px 20px",
        fontSize: "16px",
        paddingLeft: "1px",
        textAlign: "left",
      }}
    >
      <p><FaPhone style={{ marginRight: "8px", color: "#396076" }} /><strong>Mobile:</strong> +91 8143650763</p>
      <p><FaGithub style={{ marginRight: "8px", color: "#396076" }} /><strong>GitHub:</strong> <a href="https://github.com/karthik1434" target="_blank" rel="noopener noreferrer">github.com/karthik1434</a></p>
      <p><FaCity style={{ marginRight: "8px", color: "#396076" }} /><strong>City:</strong> Nellore, 524405</p>
      <p><FaEnvelope style={{ marginRight: "8px", color: "#396076" }} /><strong>Email:</strong> karthikduggana131@gmail.com</p>
      <p><FaLinkedin style={{ marginRight: "8px", color: "#396076" }} /><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthikduggana/" target="_blank" rel="noopener noreferrer">karthikduggana/</a></p>
      <p><FaGlobe style={{ marginRight: "8px", color: "#396076" }} /><strong>Country:</strong> India, Andhra Pradesh</p>
      <p><FaBirthdayCake style={{ marginRight: "8px", color: "#396076" }} /><strong>Date of Birth:</strong> 05 Aug 1994</p>
      <p><FaVenusMars style={{ marginRight: "8px", color: "#396076" }} /><strong>Gender:</strong> Male</p>
      <p><FaGlobe style={{ marginRight: "8px", color: "#396076" }} /><strong>Website:</strong> https://yourwebsite.com</p>
    </div>
  );
}

export default ContactDetails;

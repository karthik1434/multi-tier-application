import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaBirthdayCake, FaVenusMars, FaCity, FaGlobe } from "react-icons/fa";

function ContactDetails() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        gap: "0px 80px",
        fontSize: "10px",
        paddingLeft: "20px",
        textAlign: "left",
      }}
    >
      <p><FaPhone style={{ marginRight: "8px", color: "#396076" }} /><strong>Mobile:</strong> +91 8143650763</p>
      <p><FaGlobe style={{ marginRight: "8px", color: "#396076" }} /><strong>Website:</strong> https://yourwebsite.com</p>
      
      <p><FaEnvelope style={{ marginRight: "8px", color: "#396076" }} /><strong>Email:</strong> karthikduggana131@gmail.com</p>
      <p><FaCity style={{ marginRight: "8px", color: "#396076" }} /><strong>City:</strong> Nellore, 524405</p>
      
      <p><FaGithub style={{ marginRight: "8px", color: "#396076" }} /><strong>GitHub:</strong> <a href="https://github.com/karthik1434" target="_blank" rel="noopener noreferrer">github.com/karthik1434</a></p>
      <p><FaGlobe style={{ marginRight: "8px", color: "#396076" }} /><strong>Country:</strong> India, Andhra Pradesh</p>
      <p><FaLinkedin style={{ marginRight: "8px", color: "#396076" }} /><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthikduggana/" target="_blank" rel="noopener noreferrer">karthikduggana/</a></p>
      
      <p><FaBirthdayCake style={{ marginRight: "8px", color: "#396076" }} /><strong>Date of Birth:</strong> 05 Aug 1994</p>
      <p><FaVenusMars style={{ marginRight: "8px", color: "#396076" }} /><strong>Gender:</strong> Male</p>
      
    </div>
  );
}

export default ContactDetails;

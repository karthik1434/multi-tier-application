import React from "react";
import "../App.css"; // import CSS file


function ProjectSourceCode() {
  return (
    <div className="resume-download-container">
      <a
        href="https://github.com/karthik1434/multi-tier-application.git"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        ProjectSourceCode
      </a>

      <a
        href="https://github.com/karthik1434"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        github Profile
      </a>
      
      <a
        href="https://github.com/karthik1434"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        Portfolio
      </a>

      <a
        href="http://localhost:1337/admin"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        Admin login
      </a>

      <a
        href="https://github.com/karthik1434"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        All Project
      </a>

    </div>
  );
}


function ResumeDownload() {
  return (
    <div className="resume-download-container">
      <a
        href="http://localhost:1337/uploads/Karthik_Duggana_Resume_d86dfe310e.pdf"
        download="KarthikDugganaResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        📄 Download Resume
      </a>
    </div>
  );
}



export {ProjectSourceCode, ResumeDownload};

